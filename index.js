
//The longest name with function
let names = ['Alex', 'George', 'Michael'];
let longestName = MaxName(names);


function MaxName(names) {
    let max_name = '';
    for (let i = 0; i < names.length; i++) {
        if (names[i].length > max_name.length) {
            max_name = names[i];
        }
    }

    return max_name;
}

console.log(longestName);


//Proportion
let percent = prompt("Введите состоящую цену:");
let total = prompt("Введите процент:");
let result = calculateProportionWithPercentageEasy(percent, total);



function calculateProportionWithPercentageEasy(percent, total) {
    let proportion = percent / total;
    return proportion / 100;


}
alert(`Ответ: ${result}`);


//Engineering
function min(...values) {
    let minimum = values[0];

    for (let i = 1; i < values.length; i++) {
        if (values[i] < minimum) {
            minimum = values[i];
        }
    }

    return minimum;
}

console.log(min(1, 2));
console.log(min([1, 2]));
console.log(min({ a: 1, b: 2 }));
console.log(min({ a: 1, b: 2 }, { a: 11, b: 12 }));