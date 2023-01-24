//Задание 1

///Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
//Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
//При выполнении задания необходимо учесть, что массив может содержать не только числа,
//но и, например, знаки, null и так далее.
//На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

let chetNumbers = 0;
let nechetNumbers = 0;
let otherNumbers = 0;
let array = ['julia', 112, 220, 'abc', 0, 13, 25, 6, 7, null];
function checkNumbers () {
for (let i = 0; i < array.length; i++) {
    if (array[i] === 0 || (typeof (array[i]) !== 'number')){
            otherNumbers++;
        } else {
            if (array[i] % 2 === 0) {
                chetNumbers++;
        } else {
            nechetNumbers++;
        }
    }
}
console.log('Количество чётных чисел ' + chetNumbers);
console.log('Количество нечётных чисел ' + nechetNumbers);
console.log('Количество остальных чисел ' + otherNumbers);
}
checkNumbers();