const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'golden' },
    { name: 'sunglass', price: 300, brand: 'casio', color: 'yellow' },
    { name: 'camera', price: 8000, brand: 'ribon', color: 'black' }
];

// 1.map 
const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(product => product.price);
console.log(prices);

// 2. foreach 
products.forEach(product => product.color = 'yellow');

products.forEach(product => {

})

// 3. filter
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);

// find
const special = products.find(product => product.name.includes('n'));
console.log(special);
console.log(products);
