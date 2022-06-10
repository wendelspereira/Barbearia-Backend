class Client {
  name!: string;
  lastName?: string;
  idade?: string;
  phoneNumber?: string;
  address?: {
    street: string;
    number: string;
    district: string;
    cidade: string;
    estado: string;
  };
  avatar?: string;
}


export {Client}