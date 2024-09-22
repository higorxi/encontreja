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

const uploadImageHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const form = new IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Erro ao fazer o parse do formulário:', err);
        return res.status(500).json({ message: 'Erro ao fazer upload da imagem' });
      }

      const imageFile = files.file; 
      if (!imageFile || imageFile.length === 0) {
        return res.status(400).json({ message: 'Nenhum arquivo enviado' });
      }

      const accountId = process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_ID;
      const apiToken = process.env.NEXT_PUBLIC_CLOUDFLARE_API_TOKEN;

      const formData = new FormData();
      const fileStream = fs.createReadStream(imageFile[0].filepath); 
      formData.append('file', fileStream, imageFile[0].originalFilename as string); 
      formData.append('metadata', JSON.stringify({})); 
      formData.append('requireSignedURLs', 'false'); 

      try {
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

        res.status(200).json(response.data);
      } catch (error) {
        console.error('Erro ao fazer upload da imagem:', error);
        res.status(500).json({ message: 'Erro ao fazer upload da imagem', error });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
};

export default uploadImageHandler;
