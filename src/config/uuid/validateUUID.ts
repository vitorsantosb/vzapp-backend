import { BadRequestException } from '@nestjs/common';
import { validate } from 'uuid';
import {ErrorLogMessage} from "@config/LogMessages/logMessages";

export const uuidValidate = (uuid: string): boolean => {
  if (!validate(uuid)) {
    return new ErrorLogMessage('[UUID_MODULE]','Invalid UUID');
  }
  return true;
};

export const validateUuid = (uuid: string): boolean => {
  return validate(uuid);
};
