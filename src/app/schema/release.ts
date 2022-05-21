import { Commit } from './commit';

export interface Release {
  name: string;
  commits: Commit[];
}
