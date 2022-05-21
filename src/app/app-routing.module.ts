import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitLogComponent } from './component/git-log/git-log.component';
import { MarkdownComponent } from './component/markdown/markdown.component';
import { MigratorComponent } from './component/migrator/migrator.component';
import { DataGuard } from './guard/data.guard';

const routes: Routes = [
  {
    path: 'git-log',
    component: GitLogComponent,
  },
  {
    path: 'migrator',
    component: MigratorComponent,
    canActivate: [DataGuard],
  },
  {
    path: 'markdown',
    component: MarkdownComponent,
    canActivate: [DataGuard],
  },
  {
    path: '**',
    redirectTo: 'migrator',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
