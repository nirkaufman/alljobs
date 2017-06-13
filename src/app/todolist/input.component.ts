import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'aj-input',
  template: `
    <input class="new-todo"
           (keydown.enter)="itemClicked.emit($event.target.value)"
           placeholder="What needs to be done?"
           autofocus>
  `,
  styles: []
})
export class InputComponent  {

  @Output()
  public itemClicked = new EventEmitter<string>();

}
