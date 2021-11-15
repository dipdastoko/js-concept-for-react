// 1. array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65];

const [x, y] = numbers;

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

// const [first, second] = [90, 34];
const [first, second] = boxify(90, 34);

const student = {
    name: 'Sakib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};
const [firstMovie, secondMovie] = student.movies;

// object destructuring
const { name, age } = {
    name: 'alu',
    age: 14,
    salary: 12000
};

const employee = {
    ide: 'VS code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'narsingdi',
        drink: 'water'
    }
};
const { machine, ide } = employee;
const { weight, address } = employee?.specification;
const [a, b, c] = employee?.languages;
console.log(a);