import {ListActionsService} from './todolist/list.service';

export const apiMdl = store => next => action => {

  if(action.type === ListActionsService.GET_ITEMS) {
      fetch('https://jsonplaceholder.typicode.com/todos').then( res => {
        res.json().then(items => {
          next({
            type: ListActionsService.ITEMS_SUCCESS,
            payload: items
          })
        });
      })
  }

  return next(action);
};
