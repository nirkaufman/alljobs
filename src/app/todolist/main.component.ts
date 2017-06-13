import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aj-main',
  template: `
    <section class="main">
      <ng-content></ng-content>
    </section>
  `,
  styles: []
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
