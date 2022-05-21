import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';

@Pipe({
  name: 'marked',
})
export class MarkedPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(value: string): string {
    if (value && value.trim() !== '') {
      return marked(value);
    }

    return '';
  }
}
