export class User {
  id?: string;
  name!: string;
  password?: string;
  isAdmin!: boolean;
  created_at!: Date;
}
