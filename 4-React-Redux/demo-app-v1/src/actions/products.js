

export function loadProducts() {
    //....
    let products = [
        {
            id: '111',
            name: 'Laptop',
            price: 198000.00,
            description: 'New Mac pro',
            canBuy: true,
            image: 'images/Laptop.png'
        },
        {
            id: '222',
            name: 'Mobile',
            price: 18000.00,
            description: 'New  pro',
            canBuy: true,
            image: 'images/Mobile.png'
        }
    ]
    return { type: "LOAD_PRODUCTS", products };
}