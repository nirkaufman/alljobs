import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'aj-counter',
  template: `
    <span class="todo-count"><strong>{{ count }}</strong> items left</span>
  `,
  styles: []
})
export class CounterComponent  {
  @Input() count: number;
}
