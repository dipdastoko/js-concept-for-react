// 1. JSON (stringigy and parse)
const student = {
    name: 'Sakib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};

const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// 2. fetch
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [54, 58, 77, 99, 45];
numbers.forEach(num => console.log(num));
numbers.map(num => num + 2);

//for of on array like object
// for in for looping a object

//add or remove from an array
const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'golden' },
    { name: 'sunglass', price: 300, brand: 'casio', color: 'yellow' },
    { name: 'camera', price: 8000, brand: 'ribon', color: 'black' }
];

const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };

// add newProduct
const newProducts = [...products, newProduct];

//create a new araay without one specific item
//remove phone means create a new array without the phone

const remaining = products.filter(product => product.name !== 'phone');
