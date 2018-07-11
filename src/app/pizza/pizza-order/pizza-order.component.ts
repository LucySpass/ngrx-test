import { Component, OnInit } from '@angular/core';
import * as actions from '../pizza.actions';
import * as fromPizza from '../pizza.reducer';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-pizza-order',
    templateUrl: './pizza-order.component.html',
    styleUrls: ['./pizza-order.component.css']
})
export class PizzaOrderComponent implements OnInit {

    pizzas: Observable<any>;


    constructor(private store: Store<fromPizza.State>) {
    }

    ngOnInit() {
        this.pizzas = this.store.select(fromPizza.selectAll); // getting pizzas Observable from store!
    }

    // taking data from html and doing corresponding action:

    createPizza() {
        const pizza: fromPizza.Pizza = {
            id: new Date().getUTCMilliseconds().toString(), // dummy data id
            size: 'small'
        };

        this.store.dispatch(new actions.Create(pizza));
    }

    updatePizza(id, size) {
        this.store.dispatch(new actions.Update(id, {size: size}));
    }

    deletePizza(id) {
        this.store.dispatch(new actions.Delete(id));
    }

}
