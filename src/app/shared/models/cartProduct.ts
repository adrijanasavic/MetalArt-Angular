export class CartProduct{
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public imgSrc: string,
        public quantity: number
    ){}
}