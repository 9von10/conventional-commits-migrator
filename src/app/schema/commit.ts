import { TypeEnum } from '../enum/type.enum';

export interface Commit {
  timestamp: number;
  subject: string;
  type: TypeEnum;
  scope?: string;
}
