import {NgRedux} from '@angular-redux/store';
import {Injectable} from '@angular/core';
import {Item} from '../item';

@Injectable()
export class ListActionsService {

  static GET_ITEMS    = 'GET_ITEMS';
  static ITEMS_SUCCESS    = 'ITEMS_SUCCESS';
  static ADD_ITEM    = 'ADD_ITEM';
  static REMOVE_ITEM = 'REMOVE_ITEM';

  constructor(private store: NgRedux<any>) {
  }

  getItems() {
     this.store.dispatch({
      type   : ListActionsService.GET_ITEMS,
    })
  }

  addItem(title: string) {
    this.store.dispatch({
      type   : ListActionsService.ADD_ITEM,
      payload: new Item(title)
    })
  }

  removeItem(item: Item) {
    this.store.dispatch({
      type   : ListActionsService.REMOVE_ITEM,
      payload: item
    })
  }

}
