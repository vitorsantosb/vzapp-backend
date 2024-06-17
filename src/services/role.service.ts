import {IRoleDto, IRolePermissions} from "@repository/dto/roles/interfaces/role.interfaces";
import {roles} from "@config/roles/roles";
import {RoleDtoConstructor} from "@repository/dto/roles/role.dto";
import {ErrorLogMessage, WarningLogMessage} from "@config/LogMessages/logMessages";

/**
 * Retrieves the roles from the role configuration.
 *
 * @return {Array} An array containing the roles.
 */
function GetRoles(): Array<IRoleDto> {
  return roles;
}

function GetRolePermissions(roleSlug: string) {
  const roles: IRoleDto[] = GetRoles();

  for (let role of roles) {
    if (role.slug === roleSlug) {
      return role.permissions;
    }
  }

  return null;
}

/**
 *
 * @param roleName
 * @returns {string|null|*}
 * @constructor
 */
function GetRoleSlug(roleName) {
  const roles = GetRoles();

  for (let role of roles) {
    if (role.slug === roleName) {
      return role.slug;
    }
  }

  return null;
}

function GetRoleName(roleSlug: string): string | null {
  const roles: IRoleDto[] = GetRoles();

  for (let role of roles) {
    if (role.slug === roleSlug) {
      return role.name;
    }
  }
  return null;
}

function CreateRoleObject(roleSlug: string, customPermissions?: IRolePermissions[] | undefined): IRoleDto | undefined {
  if (roleSlug) {
    for (let role of GetRoles()) {
      if (role.slug === roleSlug) {
        if (customPermissions) {
          return RoleDtoConstructor(role.name, role.slug, customPermissions);
        } else {
          return RoleDtoConstructor(role.name, role.slug, role.permissions);
        }
      }
    }
  } else {
    return new WarningLogMessage('[Role.service],', 'roleSlug is not defined!');
  }
}

/*
async function StoreSystemDefaultRoles() {
  const fileName: string | undefined = process.env.FILE_NAME;
  if (typeof fileName === 'undefined' || !fileName) {
    return ErrorLogMessage('[Role.service]', 'FILE_NAME is not defined!');
  }
  if (await ExistsApiConfigFileWithFileName(fileName)) {
    if (await VerifyRolesIsCreated(fileName)) {
      DebugLogMessage('[Role.service]', 'Roles already stored!');
      return;
    }

    const roles: IRolesDto[] = GetRoles();

    DebugLogMessage('[Role.service]', 'Storing roles...');

    for (const role of roles) {
      const roleObj: IRolesDto = RoleDto(role.name, role.slug, role.permissions);
      await StoreRoles(roleObj);
    }
    DebugLogMessage('[Role.service]', 'Roles stored!');

    await UpdateRoleHasBeenCreated(fileName, true);
    DebugLogMessage('[Role.service]', 'File has been updated!');
  }
}
*/

async function ValidatePermissionsStructure(newRole, defaultPermissions) {
  if (!newRole || !newRole.permissions) {
    return false;
  }
  for (const permission of newRole.permissions) {
    const _defaultPermission = defaultPermissions.find((p) => p.slug === permission.slug);

    if (!_defaultPermission || !_defaultPermission.name || typeof _defaultPermission.allowed !== 'boolean') {
      return false;
    }
  }
  return true;
}

export {
  GetRoles,
  GetRolePermissions,
  GetRoleSlug,
  CreateRoleObject,
  GetRoleName,
  ValidatePermissionsStructure
};
