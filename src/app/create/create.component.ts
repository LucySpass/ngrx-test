import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Actions from './../actions/dog.actions';
import { AppState } from '../app.state';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    constructor(private store: Store<AppState>) {
    }

    addTutorial(name, breed, age) {
        this.store.dispatch(new Actions.AddDog({nick: name, breed: breed, age: age}));
    }

    ngOnInit() {
    }

}
