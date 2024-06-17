export interface IRoleDto {
  name: string,
  slug: string,
  permissions: IRolePermissions[]
}

export interface IRolePermissions {
  name: string,
  slug: string,
}

export interface IRoleDtoForTransfer {
  name: string,
  slug: string,
}
