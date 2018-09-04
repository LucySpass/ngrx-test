import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Actions from './../actions/dog.actions';
import { AppState } from '../app.state';
import { Observable } from 'rxjs/Observable';
import { DogInterface } from '../models/dog.model';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnChanges {
    @Input()
    editDogIndex: number = null;

    name: string;
    breed: string;
    age: number;

    dogs: Observable<DogInterface[]>;

    constructor(private store: Store<AppState>) {
        this.dogs = store.select('dog');
    }

    addDog() {
        if (!this.isObject(this.editDogIndex)) {
            this.store.dispatch(new Actions.EditDog({
                dog: {nick: this.name, breed: this.breed, age: this.age},
                index: this.editDogIndex
            }));
            this.name = '';
            this.breed = '';
            this.age = null;
            this.editDogIndex = null;
        } else {
            this.store.dispatch(new Actions.AddDog({nick: this.name, breed: this.breed, age: this.age}));
            this.editDogIndex = null;
        }
    }

    isObject(item: number | object) {
        return typeof item === 'object';
    }

    ngOnChanges() {
        if (!this.isObject(this.editDogIndex)) {
            this.dogs.subscribe((items) => {
                this.name = items[this.editDogIndex].nick;
                this.breed = items[this.editDogIndex].breed;
                this.age = items[this.editDogIndex].age;
            });
        }
    }

    ngOnInit() {
    }
}
