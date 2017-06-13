import {Injectable} from '@angular/core';
import {LoggerService} from '../aj-core/logger.service';
import {Item} from '../item';

@Injectable()
export class TodolistService {

  private _items: Item[];
  public logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this._items = [];
  }

  public get items(): Item[] {
    return this._items;
  }

  public set items(value: Item[]) {
    this._items = value;
  }

  public addItem(title: string): void {
    this.items = [...this.items, new Item(title)];
    this.logger.log('item added!');
  }

  public removeItem(item: Item): void {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

}
