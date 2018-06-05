import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

// Models
import { Dog } from "../models"; 

@Injectable()
export class DogService {
    dogs: Dog[] = [];
    
    constructor(
        private http: Http
    ) {
        
    }
    
    getAllDogs() {
        return this.http.get('/api/dogs').map((res: Response)=> res.json());
    }
    
}