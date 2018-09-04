import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DogInterface } from '../models/dog.model';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import * as Actions from '../actions/dog.actions';

@Component({
    selector: 'app-read',
    templateUrl: './read.component.html',
    styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

    dogs: Observable<DogInterface[]>;

    @Output() edited = new EventEmitter<number>();

    constructor(private store: Store<AppState>) {
        this.dogs = store.select('dog');
    }

    ngOnInit() {
    }

    dogDeletion(i: number) {
        this.store.dispatch(new Actions.RemoveDog(i));
    }

    dogEdition(i: number) {
        this.edited.emit(i);
    }

}
