import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { CartProduct } from "../models/cartProduct";
import { Product } from "../models/product";

@Injectable({ providedIn: 'root' })
export class ShopService{

    private _headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(
        private _httpClient: HttpClient
    ){}

    categories=[
        {
            id: 1,
            name: 'METAL ART',
            des: 'Browse our huge selection of metal artwork. There\'s a little something for everyone.',
            imgSrc: '../../assets/metalart-category1.jpg'
        },
        {
            id: 2,
            name: 'HOME DECORATION',
            des: 'Our artisans make art that\'s perfect for your bathroom, kitchen or bedroom.',
            imgSrc: '../../assets/metalart-category2.jpg'
        },
        {
            id: 3,
            name: 'CUSTOM PROJECT',
            des: 'We create all kids of metal art pieces, including initials, flags, logos and more.',
            imgSrc: '../../assets/metalart-category3.jpg'
        },
        {
            id: 4,
            name: 'FUNNY GIFTS',
            des: 'Curious about custom desings? Contact us today to find out more about our metal art.',
            imgSrc: '../../assets/metalart-category4.jpg'
        }
    ];

    products: Product[] = [
        new Product(1, 1, 'Metal Peacock', 299, '../../assets/product2.jpg', 314, "Beautiful shape and smooth lines. This Dining table ad five chairs where designed to mix contemporary design with classic comfort while looking incredibly modern and stylish. The beautiful natural wood is blended with the modern home style, so you can feel the warmth and comfort of home when you et home."),
        new Product(2, 2, 'Bottle Holder Female Body', 350, '../../assets/product4.jpg', 0, "Beautiful shape and smooth lines. This Dining table ad five chairs where designed to mix contemporary design with classic comfort while looking incredibly modern and stylish. The beautiful natural wood is blended with the modern home style, so you can feel the warmth and comfort of home when you et home."),
        new Product(3, 2, 'Toilet Paper Holder', 50, '../../assets/product5.jpg', 0, "Beautiful shape and smooth lines. This Dining table ad five chairs where designed to mix contemporary design with classic comfort while looking incredibly modern and stylish. The beautiful natural wood is blended with the modern home style, so you can feel the warmth and comfort of home when you et home."),
        new Product(4, 2, 'Litle Man Dozer', 500, '../../assets/product6.jpg', 0, "Beautiful shape and smooth lines. This Dining table ad five chairs where designed to mix contemporary design with classic comfort while looking incredibly modern and stylish. The beautiful natural wood is blended with the modern home style, so you can feel the warmth and comfort of home when you et home."),
        new Product(5, 2, 'Race Car', 30, '../../assets/product7.jpg', 0, "Beautiful shape and smooth lines. This Dining table ad five chairs where designed to mix contemporary design with classic comfort while looking incredibly modern and stylish. The beautiful natural wood is blended with the modern home style, so you can feel the warmth and comfort of home when you et home."),
        new Product(6, 2, 'ffff', 50000, '../../assets/product8.jpg', 0, "Beautiful shape and smooth lines. This Dining table ad five chairs where designed to mix contemporary design with classic comfort while looking incredibly modern and stylish. The beautiful natural wood is blended with the modern home style, so you can feel the warmth and comfort of home when you et home."),
        new Product(7, 2, 'Metal Guitar', 299, '../../assets/product9.jpg', 400, "Beautiful shape and smooth lines. THREE DIMENSIONS SADDLE BRONC RIDER SHOOTING A SIX GUM IN THE AIR. FINISHED IN A TRANSPARENT BRONZE CLEARCOAT."),
        new Product(8, 2, 'Drink Shelf', 199, '../../assets/product10.jpg', 0, "Beautiful shape and smooth lines. This Dining table ad five chairs where designed to mix contemporary design with classic comfort while looking incredibly modern and stylish. The beautiful natural wood is blended with the modern home style, so you can feel the warmth and comfort of home when you et home."),
        new Product(9, 2, 'Night Keeper', 249, '../../assets/product11.jpg', 0, "Beautiful shape and smooth lines. This Dining table ad five chairs where designed to mix contemporary design with classic comfort while looking incredibly modern and stylish. The beautiful natural wood is blended with the modern home style, so you can feel the warmth and comfort of home when you et home.")

    ];

    cartChange: EventEmitter<any> = new EventEmitter();
    cartNumber: number = 0;

    getProductsByCategoryId(categoryId: number){
        return this.products.filter(
            p=>p.categoryId == categoryId
        );
    }

    getProductsByProductId(productID: number){
        return this.products.find(
            p=>p.id == productID
        )
    }

    getPrevNextProducts(productID: number): number[]{
        var currentIndex = this.products.findIndex(x => x.id == productID);
        var prevIndex = currentIndex-1;
        var nextIndex = currentIndex+1;

        var prevId = 0;
        var nextId = 0;

        if(prevIndex >= 0 && prevIndex < this.products.length){
            prevId = this.products[prevIndex].id;
        }
        if(nextIndex >= 0 && nextIndex < this.products.length){
            nextId = this.products[nextIndex].id
        }
        
        return [prevId, nextId];
    }

    addToCart(product: Product, quantity: number, cart: CartProduct[]){
        var cartProduct = new CartProduct(product.id, product.name, product.price, product.imgSrc, parseInt(quantity.toString()));
        var x = cart.filter(
            p=>p.id == product.id
        );
        if(x.length){
            var index = cart.findIndex(x => x.id === product.id);
            //menja kolicinu postojeceg proizvoda -edit
            cartProduct.quantity = parseInt(cart[index].quantity.toString()) + parseInt(quantity.toString());
            return this._httpClient.put('api/cartProd', cartProduct, {
                headers: this._headers
            })
        }
        else{
            //dodaje novi proizvod u korpu
            console.log(cartProduct);
            return this._httpClient.post('api/cartProd', cartProduct, {
                headers: this._headers
            })
        }
    }

    editProductFromCart(product: CartProduct){
        return this._httpClient.put('api/cartProd', product, {
            headers: this._headers
        })
    }

    removeFromCart(productID: number, quantity: number){
        this.emitCartNumberChangeEvent('-', quantity);
        return this._httpClient.delete('api/cartProd/' + productID,{
            headers: this._headers
        });
    }

    getCartProducts(){
        return this._httpClient.get('api/cartProd', {
            headers: this._headers
        })
    }

    getCartProductByID(id: number){
        return this._httpClient.get('api/cartProd/' + id, {
            headers: this._headers
        });
    }
    
    emitCartNumberChangeEvent(operator: string, sum: number) {
        console.log(sum);
        if(operator == '+'){
            this.cartNumber = this.cartNumber*1 + sum*1;
        }
        else{
            this.cartNumber = this.cartNumber*1 - sum*1;
            if(this.cartNumber < 0)
            {
                this.cartNumber = 0;
            }
        }
        this.cartChange.emit(this.cartNumber);
    }

    getCartNumberChangeEmitter() {
        return this.cartChange;
    }

}