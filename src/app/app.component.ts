import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Post } from './ngrx/post.model';
import * as PostActions from './ngrx/post.actions';

interface AppLanguageState {
    message: string;
}

interface AppState {
    post: Post;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    post: Observable<Post>;

    text: string; /// form input val

    message$: Observable<string>;

    constructor(private store: Store<AppLanguageState>, private advancedStore: Store<AppState>) {
        this.message$ = this.store.select('message');

        this.post = this.advancedStore.select('post'); // to get store as an Observable
    }

    spanishMessage() {
        this.store.dispatch({type: 'SPANISH'});
        // console.log(this.store.source.value.message);
    }

    frenchMessage() {
        this.store.dispatch({type: 'FRENCH'});
    }

    editText() {
        this.advancedStore.dispatch(new PostActions.EditText(this.text));
    }

    resetPost() {
        this.advancedStore.dispatch(new PostActions.Reset());
    }

    upvote() {
        this.advancedStore.dispatch(new PostActions.Upvote());
    }

    downvote() {
        this.advancedStore.dispatch(new PostActions.Downvote());
    }
}
