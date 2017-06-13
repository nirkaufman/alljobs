import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aj-toggle-all',
  template: `
    <input class="toggle-all"
           type="checkbox">
  `,
  styles: []
})
export class ToggleAllComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
