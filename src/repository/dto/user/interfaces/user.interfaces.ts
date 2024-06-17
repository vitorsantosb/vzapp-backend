import {IRoleDto} from "@repository/dto/roles/interfaces/role.interfaces";

export interface IUserDto {
  id: string;
  name: string;
  email: string;
  password: string;
  role: IRoleDto;

  address?: string;
  zipcode?: string;
  country?: string;
  city?: string;
  cpf?: string;

  isEmailConfirmed: boolean;
  isDeleted: boolean;
  deletedAt: Date;

  createdAt: Date;
  updatedAt: Date;
}