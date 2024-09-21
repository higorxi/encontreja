export interface advertisementDetails {
    user : {
        document: string
    },
    title: string;
    description: string;
    price: number;
    whatsappNumber: string;
    acceptPix: boolean;
    acceptCard: boolean;
    acceptMoney: boolean;
    hasServiceLocation: boolean;
    serviceLocation?: string
    linkWebsitePortfolio?: string;
    servicesAvailable: [{
        id: number,
        description: string
    }]
  }