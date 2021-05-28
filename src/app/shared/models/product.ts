export class Product{
    constructor(
        public id: number,
        public categoryId: number,
        public name: string,
        public price: number,
        public imgSrc: string,
        public oldPrice: number,
        public description: string
    ){}
}