import { DogInterface } from '../models/dog.model';
import * as DogActions from './../actions/dog.actions';

const initialState: DogInterface = {
    nick: 'Alisa',
    breed: 'Maltese',
    age: 9
};

export function reducer(state: DogInterface[] = [initialState], action: DogActions.Actions) {

    switch (action.type) {
        case DogActions.ADD_DOG:
            return [...state, action.payload];
        case DogActions.REMOVE_DOG:
            const old = [...state];
            old.splice(action.payload, 1);
            return old;
        default:
            return state;
    }
}
