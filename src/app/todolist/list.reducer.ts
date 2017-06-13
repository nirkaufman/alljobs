import {ListActionsService} from './list.service';

export function listReducer(list: any[] = [], action) {

  switch (action.type) {

    case ListActionsService.ITEMS_SUCCESS:
      return [...action.payload];

    case ListActionsService.ADD_ITEM:
      return [...list, action.payload];

    case ListActionsService.REMOVE_ITEM:
      const index = list.indexOf(action.payload);
      return [...list.slice(0, index), ...list.slice(index + 1)];

    default:
      return list;
  }


}