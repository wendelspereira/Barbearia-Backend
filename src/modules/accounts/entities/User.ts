import { ObjectId } from "mongodb";

export class User {
  id!: ObjectId;
  name!: string;
  password?: string;
  isAdmin!: boolean;
  created_at!: Date;
}
