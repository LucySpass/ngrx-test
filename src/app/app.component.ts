import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    editDogIndex: number = null;

    onEdit(index: number) {
        this.editDogIndex = index;
    }
}
