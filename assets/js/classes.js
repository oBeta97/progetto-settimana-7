class Kakapo {
    name = '';
    description = '';
    brand = '';
    imageUrl = '';
    price = 0;


    constructor(_name = '', _description = '', _brand = '', _imageUrl = '', _price = 0) {
        this.name = _name;
        this.description = _description;
        this.brand = _brand;
        this.imageUrl = _imageUrl;
        this.price = _price;
    }
}