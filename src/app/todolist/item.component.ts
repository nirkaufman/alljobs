import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Item} from '../item';

@Component({
  selector: 'aj-item',
  template: `
    <li [ngClass]="{completed: item.completed}">
      <div class="view">
        <input class="toggle"
               [checked]="item.completed"
               (change)="item.completed = $event.target.checked"
               type="checkbox">
        <label>{{ item.title }}</label>
        <button (click)="itemDestroy.emit(item)" class="destroy"></button>
      </div>
      <input class="edit">
    </li>
  `,
  styles: []
})
export class ItemComponent  {

  @Input() item: Item;
  @Output() itemDestroy = new EventEmitter<Item>();

}
