import { Pipe, PipeTransform } from '@angular/core';
import { IStudent } from './data.service';

@Pipe({
  name: 'after21'
})
export class After21Pipe implements PipeTransform {

  transform(args: IStudent[]): IStudent[] {
    return args.filter(e => e.age > 21)
  }

}
