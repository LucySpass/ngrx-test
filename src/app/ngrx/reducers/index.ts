import { ActionReducerMap } from '@ngrx/store';
import { postReducer } from './post.reducer';
import { simpleReducer } from './simple.reducer';
import { pizzaReducer } from '../../pizza/pizza.reducer';

export const reducers: ActionReducerMap<any> = {
    pizza: pizzaReducer,
    post: postReducer,
    message: simpleReducer
};
