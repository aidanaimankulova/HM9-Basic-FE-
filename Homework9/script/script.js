// 1 work 

// let menu = {
//     width: 200,
//     height: 300,
//     title: "my menu"
// };

// function doubleNumericValues(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key] *= 2;
//         }
//     }
// }

// doubleNumericValues(menu);

// console.log(menu);

// 2 work

let arr = [
    {
    id: 1,
    title: "bicycle",
    price: 45000,
    discount: 10
    },
    {
    id: 2,
    title: "roller-skates",
    price: 15000,
    discount: 5
    },
    {
    id: 3,
    title: "Kick scooter",
    price: 10000,
    discount: 30
    },
    {
    id: 4,
    title: "skis",
    price: 25000,
    discount: 20
    },
    {
    id: 5,
    title: "skate",
    price: 10000,
    discount: 0
}
];

for (let item of arr){
    console.log(item.title);
}


for (let item of arr) {
    console.log(`${item.title} (${item.price})`);
}

for (let item of arr) {
    let priceWithDiscount = item.price * (1 - item.discount / 100);
    console.log(`${item.title} (${priceWithDiscount})`);
}