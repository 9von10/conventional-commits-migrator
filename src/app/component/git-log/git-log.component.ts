import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TypeEnum } from 'src/app/enum/type.enum';
import { Commit } from 'src/app/schema/commit';
import { GitLog } from 'src/app/schema/git-log';
import { Release } from 'src/app/schema/release';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-git-log',
  templateUrl: './git-log.component.html',
  styleUrls: ['./git-log.component.scss'],
})
export class GitLogComponent {
  constructor(private router: Router, public dataService: DataService) {}

  addRelease(): void {
    const gitLog: GitLog = {
      name: '',
      commits: '',
    };

    this.dataService.gitLogs.push(gitLog);
  }

  removeRelease(release: GitLog) {
    this.dataService.gitLogs = this.dataService.gitLogs.filter((x) => x !== release);
  }

  forward(): void {
    if (this.dataService.gitLogs.length === 0) {
      return;
    }

    const releases: Release[] = [];

    this.dataService.gitLogs.forEach((gitLog) => {
      const release: Release = { name: gitLog.name, commits: [] };
      const commits = gitLog.commits.trim();
      const lines = commits.split('\n');

      lines.forEach((line) => {
        const cells = line.split(';');
        const commit: Commit = {
          timestamp: Number(cells[0]),
          subject: cells[1],
          type: TypeEnum.none,
        };

        release.commits.push(commit);
      });

      releases.push(release);
    });

    this.dataService.releases = releases;

    localStorage.setItem('migratorGitLogs', JSON.stringify(this.dataService.gitLogs));
    localStorage.setItem('migratorReleases', JSON.stringify(this.dataService.releases));

    this.router.navigate(['/migrator']);
  }
}
