interface IServiceDTO {
  name: String;
  amount: number;
}

interface IClient {
    name: string;
    phone: number;
    isWhatsapp: boolean;
}

interface ICreateSchedulingDTO {
  client: IClient;
  services: IServiceDTO[];
  schedulingHours: string;
}

export { ICreateSchedulingDTO, IServiceDTO, IClient };
