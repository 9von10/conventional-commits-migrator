import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Release } from 'src/app/schema/release';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-migrator',
  templateUrl: './migrator.component.html',
  styleUrls: ['./migrator.component.scss'],
})
export class MigratorComponent {
  selectedRelease!: Release;

  constructor(private router: Router, public dataService: DataService) {}

  save(): void {
    if (!this.selectedRelease) {
      return;
    }

    const index = this.dataService.releases.findIndex((x) => x.name === this.selectedRelease.name);
    this.dataService.releases = [
      ...this.dataService.releases.slice(0, index),
      this.selectedRelease,
      ...this.dataService.releases.slice(index + 1),
    ];

    localStorage.setItem('migratorReleases', JSON.stringify(this.dataService.releases));
  }

  forward(): void {
    this.save();
    this.router.navigate(['/markdown']);
  }

  back(): void {
    this.router.navigate(['/git-log']);
  }
}
