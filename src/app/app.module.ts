import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {StoreModule} from "@ngrx/store";
import {simpleReducer} from './ngrx/simple.reducer';
import {AppRoutingModule} from "./app-routing.module";
import {postReducer} from "./ngrx/post.reducer";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      post: postReducer,
      message: simpleReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
