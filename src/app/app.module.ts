import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/dog.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';

@NgModule({
    declarations: [
        AppComponent,
        ReadComponent,
        CreateComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        StoreModule.forRoot({dog: reducer})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
