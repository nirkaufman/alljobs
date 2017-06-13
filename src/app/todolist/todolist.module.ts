import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ActionComponent} from './action.component';
import {CounterComponent} from './counter.component';
import {FooterComponent} from './footer.component';
import {HeaderComponent} from './header.component';
import {InputComponent} from './input.component';
import {ItemComponent} from './item.component';
import {ListComponent} from './list.component';
import {MainComponent} from './main.component';
import {TitleComponent} from './title.component';
import {TodolistComponent} from './todolist.component';
import {ToggleAllComponent} from './toggle-all.component';
import {TodolistService} from './todolist.service';
import { CountPipe } from './pipes/count.pipe';
import {AjCoreModule} from '../aj-core/aj-core.module';
import {ListActionsService} from './list.service';

@NgModule({
  imports     : [CommonModule, AjCoreModule],
  declarations: [
    TodolistComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    TitleComponent,
    InputComponent,
    ToggleAllComponent,
    ListComponent,
    ItemComponent,
    CounterComponent,
    ActionComponent,
    CountPipe
  ],
  providers: [ListActionsService],
  exports: [TodolistComponent]
})
export class TodolistModule {

  constructor() {
    console.log('TodolistModule instance');
  }

}
