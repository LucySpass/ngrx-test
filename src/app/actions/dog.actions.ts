import { Action } from '@ngrx/store';
import { DogInterface } from '../models/dog.model';

export const ADD_DOG = '[DOG] Add';
export const REMOVE_DOG = '[DOG] Remove';
export const EDIT_DOG = '[DOG] Edit';

export class AddDog implements Action {
    readonly type = ADD_DOG;

    constructor(public payload: DogInterface) {
    }
}

export class RemoveDog implements Action {
    readonly type = REMOVE_DOG;

    constructor(public payload: number) {
    }
}

export class EditDog implements Action {
    readonly type = EDIT_DOG;

    constructor(public payload: { dog: DogInterface, index: number }) {
    }
}

export type  Actions = AddDog | RemoveDog | EditDog;
