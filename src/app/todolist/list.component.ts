import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {Item} from '../item';
import {ListActionsService} from './list.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aj-list',
  template: `
    <ul class="todo-list">
      <aj-item *ngFor="let item of items"
               [item]="item"
               (itemDestroy)="listActions.removeItem($event)">
      </aj-item>
    </ul>
  `,
  styles  : []
})
export class ListComponent {

  @Input() items: Item[];

  constructor(public listActions: ListActionsService) {}

}
