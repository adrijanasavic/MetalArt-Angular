import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryCart implements InMemoryDbService{
    createDb(){
        const cartProd = [

        ];
        return {cartProd};
    }
    
}