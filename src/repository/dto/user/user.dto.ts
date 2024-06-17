import {Exclude, Expose} from 'class-transformer';
import {IsString} from 'class-validator';

@Exclude()
export default class IUserDto {
  @IsString()
  @Expose()
  readonly id: string;

  @IsString()
  @Expose()
  readonly name: string;

  @IsString()
  @Expose()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsString()
  @Expose()
  readonly role: { name: string, slug: string, permissions: []};

  @IsString()
  @Expose()
  readonly address?: string;

  @IsString()
  @Expose()
  readonly zipcode?: string;

  @IsString()
  @Expose()
  readonly country?: string;

  @IsString()
  @Expose()
  readonly city?: string;

  @IsString()
  @Expose()
  readonly cpf?: string;
}