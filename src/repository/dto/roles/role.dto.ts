import {IRoleDto, IRolePermissions} from "@repository/dto/roles/interfaces/role.interfaces";

export function RoleDtoConstructor(name: string, slug: string, permissions: IRolePermissions[] | undefined): IRoleDto {
  return {
    name,
    slug,
    permissions
  }
}