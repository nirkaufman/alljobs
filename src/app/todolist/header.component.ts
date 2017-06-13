import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aj-header',
  template: `
    <header class="header">
      <ng-content></ng-content>
    </header>

  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
