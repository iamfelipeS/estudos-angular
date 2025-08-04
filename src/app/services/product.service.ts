import { Injectable } from "@angular/core";
import { PRODUTOS_MOCK } from "../data/products.mock";
import { Observable, of } from "rxjs";
import { Produto } from "../models/product.model";


@Injectable({
    providedIn: 'root'
})

export class ProductService {


    getProduct(): Observable<Produto[]> {
        return of(PRODUTOS_MOCK);
    }
}