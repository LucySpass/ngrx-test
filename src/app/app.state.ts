import { DogInterface } from './models/dog.model';

export interface AppState {
    readonly dog: DogInterface[];

}
