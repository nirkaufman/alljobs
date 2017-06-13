import {Component} from '@angular/core';
import {ListActionsService} from './list.service';
import {select} from '@angular-redux/store';


@Component({
  selector: 'aj-todolist',
  template: `
    <section class="todoapp">
      <aj-header>
        <aj-title [title]="title"></aj-title>
        <aj-input (itemClicked)="todolist.addItem($event)"></aj-input>
      </aj-header>

      <aj-main>
        <aj-toggle-all></aj-toggle-all>
        <aj-list [items]="items | async"></aj-list>
      </aj-main>

      <aj-footer>
        <aj-counter></aj-counter>
        <aj-action></aj-action>
      </aj-footer>
    </section>
  `,
})
export class TodolistComponent {

  public title: string;

  @select('items') items;

  public todolist: ListActionsService;

  constructor(todolist: ListActionsService) {
    this.todolist = todolist;
    this.title    = 'todos';
    todolist.getItems();
  }
}
