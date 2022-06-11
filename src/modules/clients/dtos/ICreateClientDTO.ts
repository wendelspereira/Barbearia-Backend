interface ICreateClientDTO {
  name: string;
  lastName?: string;
  birthDate?: Date;
  phoneNumber: string;
  address?: {
    street: string;
    number?: string;
    district?: string;
    city?: string;
    uf?: string;
  };
  avatar?: string;
}

export { ICreateClientDTO };
