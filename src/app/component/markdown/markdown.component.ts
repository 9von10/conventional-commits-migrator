import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeEnum } from 'src/app/enum/type.enum';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss'],
})
export class MarkdownComponent implements OnInit {
  markdown!: string;

  private types = [
    TypeEnum.feat,
    TypeEnum.fix,
    TypeEnum.docs,
    TypeEnum.style,
    TypeEnum.refactor,
    TypeEnum.perf,
    TypeEnum.test,
    TypeEnum.build,
    TypeEnum.ci,
    TypeEnum.chore,
  ];

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    if (this.dataService.releases.length === 0) {
      return;
    }

    this.generateMarkdown();
  }

  back(): void {
    this.router.navigate(['/migrator']);
  }

  private generateMarkdown(): void {
    let markdown = '';

    this.dataService.releases.forEach((release) => {
      markdown += `## ${release.name}\n\n\n`;

      this.types.forEach((type) => {
        const count = release.commits.filter((x) => x.type === type).length;

        if (count > 0) {
          markdown += `### ${this.getType(type)}\n\n`;

          release.commits.forEach((commit) => {
            if (commit.type === type) {
              markdown += `* ${commit.scope ? `**${commit.scope}**: ` : ''} ${commit.subject}\n`;
            }
          });

          markdown += '\n';
        }
      });
    });

    this.markdown = markdown.trim();
  }

  // eslint-disable-next-line class-methods-use-this
  private getType(type: TypeEnum): string {
    switch (type) {
      case TypeEnum.feat:
        return 'Features';
      case TypeEnum.fix:
        return 'Bug Fixes';
      case TypeEnum.docs:
        return 'Documentation';
      case TypeEnum.style:
        return 'Styles';
      case TypeEnum.refactor:
        return 'Code Refactoring';
      case TypeEnum.perf:
        return 'Performance Improvements';
      case TypeEnum.test:
        return 'Tests';
      case TypeEnum.build:
        return 'Builds';
      case TypeEnum.ci:
        return 'Continuous Integrations';
      case TypeEnum.chore:
        return 'Chores';
      case TypeEnum.none:
      default:
        break;
    }

    return 'Unknown';
  }
}
