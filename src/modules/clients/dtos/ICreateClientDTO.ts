interface ICreateClientDTO {
  name: string;
  lastName?: string;
  bithDate?: Date;
  phoneNumber: string;
  address?: {
    street: string;
    number: string;
    district: string;
    city: string;
    uf: string;
  };
  avatar?: string;
}

export { ICreateClientDTO };
