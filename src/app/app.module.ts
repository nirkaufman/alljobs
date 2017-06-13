import {NgReduxModule, NgRedux, DevToolsExtension} from '@angular-redux/store';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TodolistModule} from './todolist/todolist.module';
import {listReducer} from './todolist/list.reducer';
import {Item} from './item';
import {combineReducers} from 'redux';
import {apiMdl} from './api.mdl';

const rootReducer = combineReducers({
  items: listReducer
})


@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule, TodolistModule, NgReduxModule],
  bootstrap   : [AppComponent]
})

export class AppModule {

  constructor(ngRedux: NgRedux<any>, devTool: DevToolsExtension) {
      ngRedux.configureStore(rootReducer, {
        items: []
      }, [apiMdl], [devTool.enhancer()])
  }

}
