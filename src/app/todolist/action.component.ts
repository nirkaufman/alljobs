import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aj-action',
  template: `
    <button class="clear-completed">Clear completed
    </button>
  `,
  styles: []
})
export class ActionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
