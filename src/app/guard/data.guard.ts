import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Injectable({
  providedIn: 'root',
})
export class DataGuard implements CanActivate {
  constructor(private router: Router, private dataService: DataService) {}

  canActivate(): boolean {
    const isValid = !!(this.dataService.releases && this.dataService.releases.length > 0);

    if (!isValid) {
      this.router.navigate(['/git-log']);
    }

    return isValid;
  }
}
