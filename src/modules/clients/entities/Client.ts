class Client {
  name!: string;
  lastName?: string;
  birthDate?: Date;
  phoneNumber!: string;
  address?: {
    street: string;
    number: number;
    district: string;
    city: string;
    uf: string;
  };
  avatar?: string;
}


export {Client}