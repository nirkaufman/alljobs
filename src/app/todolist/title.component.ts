import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'aj-title',
  template: `
    <h1>{{title | uppercase}}</h1>
  `,
  styles: []
})
export class TitleComponent  {

  @Input()
  public title: string;

}
