import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aj-footer',
  template: `
    <footer class="footer">
      <ng-content></ng-content>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
