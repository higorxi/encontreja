import axios from 'axios';
import { IncomingForm } from 'formidable';
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import FormData from 'form-data';

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadImageAdvertisementHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const form = new IncomingForm(); 

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Erro ao fazer o parse do formulário:', err);
        return res.status(500).json({ message: 'Erro ao fazer upload da imagem' });
      }

      const imageFiles = Array.isArray(files.file) ? files.file : [files.file];

      if (!imageFiles || imageFiles.length === 0) {
        return res.status(400).json({ message: 'Nenhum arquivo enviado' });
      }

      const accountId = process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_ID;
      const apiToken = process.env.NEXT_PUBLIC_CLOUDFLARE_API_TOKEN;

      try {
        const uploadPromises = imageFiles.map(async (imageFile: any) => {
          if (!imageFile || !imageFile.filepath) {
            throw new Error('Arquivo de imagem não definido ou caminho de arquivo ausente');
          }

          const formData = new FormData();
          const fileStream = fs.createReadStream(imageFile.filepath);
          formData.append('file', fileStream, imageFile.originalFilename as string);
          formData.append('metadata', JSON.stringify({}));
          formData.append('requireSignedURLs', 'false');

          const response = await axios.post(
            `https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v1`,
            formData,
            {
              headers: {
                ...formData.getHeaders(),
                'Authorization': `Bearer ${apiToken}`,
              },
            }
          );
          return response.data;
        });

        const results = await Promise.all(uploadPromises);
        res.status(200).json(results);
      } catch (error: any) {
        console.error('Erro ao fazer upload das imagens:', error.message);
        res.status(500).json({ message: 'Erro ao fazer upload das imagens', error: error.message });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
};

export default uploadImageAdvertisementHandler;
