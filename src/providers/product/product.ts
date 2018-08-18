import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductProvider {

    constructor(public http: HttpClient) {}

    getProducts() {
        return this.http.get('../../assets/data.json')
    }

}
