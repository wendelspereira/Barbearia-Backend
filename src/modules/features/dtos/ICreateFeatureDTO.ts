interface ICreateFeatureDTO {
  name: string;
  description: string;
  price: number;
  estimatedTime: number;
  isAvailable?: boolean;
}

export { ICreateFeatureDTO };
