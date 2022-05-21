import { Injectable } from '@angular/core';
import { GitLog } from '../schema/git-log';
import { Release } from '../schema/release';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  gitLogs!: GitLog[];

  releases!: Release[];

  constructor() {
    const lsGitLogs = localStorage.getItem('migratorGitLogs');
    this.gitLogs = lsGitLogs ? JSON.parse(lsGitLogs) : [];

    const lsReleases = localStorage.getItem('migratorReleases');
    this.releases = lsReleases ? JSON.parse(lsReleases) : [];
  }
}
