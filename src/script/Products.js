export const productsList = [
    {
        name: 'Wagyu',
        price: 800.00,
        quantity: 6,
        type: "bovina",
        sold: 0,
        img: "https://firebasestorage.googleapis.com/v0/b/deliciasdascarnes-5f44f.appspot.com/o/products-img%2Fwagyu.jpg?alt=media&token=167f0006-e055-4cb6-8394-5a769945ac4d"
    },
    {
        name: 'Kobe Beef',
        price: 600.00,
        quantity: 6,
        type: "bovina",
        sold: 10,
        img: "https://firebasestorage.googleapis.com/v0/b/deliciasdascarnes-5f44f.appspot.com/o/products-img%2FkobeBeef.jpg?alt=media&token=386f19af-f109-4369-add7-ee71b10702f7"
    },
    {
        name: 'Pato',
        price: 150.00,
        quantity: 40,
        type: "ave",
        sold: 20,
        img: "https://firebasestorage.googleapis.com/v0/b/deliciasdascarnes-5f44f.appspot.com/o/products-img%2FPato.jpg?alt=media&token=21cc3287-c9e9-45ac-8eb6-2cef40b38f47"
    },
    {
        name: 'Avestruz',
        price: 200.00,
        quantity: 10,
        type: "exotica",
        sold: 5,
        img: "https://firebasestorage.googleapis.com/v0/b/deliciasdascarnes-5f44f.appspot.com/o/products-img%2Faveztruz.jpeg?alt=media&token=540acaa7-50ce-4fbb-87d2-6f21171febb1"
    },
    {
        name: 'Bufalo',
        price: 300.00,
        quantity: 30,
        type: "exotica",
        sold: 30,
        img: 'https://firebasestorage.googleapis.com/v0/b/deliciasdascarnes-5f44f.appspot.com/o/products-img%2Fbufalo.jpg?alt=media&token=6aa241f4-e9b8-407f-a086-77b15290d6ac'
    },
    {
        name: 'Salmao',
        price: 100.00,
        quantity: 20,
        type: "peixe",
        sold: 10,
        img: 'https://firebasestorage.googleapis.com/v0/b/deliciasdascarnes-5f44f.appspot.com/o/products-img%2Fsalmon.jpg?alt=media&token=1105b184-5e26-497b-8e1e-567c40431137'
    },
    {
        name: 'Jacare',
        price: 250.00,
        quantity: 8,
        type: "exotica",
        sold: 6,
        img: 'https://firebasestorage.googleapis.com/v0/b/deliciasdascarnes-5f44f.appspot.com/o/products-img%2Fjacare.jpeg?alt=media&token=777a07dc-8525-4813-b9ea-3c33aae90aad'
    },
    {
        name: 'Cordeiro',
        price: 120.00,
        quantity: 35,
        type: "exotica",
        sold: 15,
        img: 'https://firebasestorage.googleapis.com/v0/b/deliciasdascarnes-5f44f.appspot.com/o/products-img%2Fcordeiro.jpeg?alt=media&token=4250c188-fd3c-4d54-bbf0-6a900fc86e52'
    }];


const newProductsList = [...productsList];
export const categories = newProductsList.reduce((acc, product) => {
    if (!acc[product.type]) {
        acc[product.type] = product;
    }
    return acc;
}, {});
