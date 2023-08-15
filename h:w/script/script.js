//DOMASHKA

//Задача1.  Объявить функцию, которая считывает значение через prompt и выводит “ДА” если число четное и “НЕТ” в ином случае.

    // function checkNumber(num){
    //     if (num%2==0){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }

    // let user_number = Number(prompt('Enter number'));

    // if (checkNumber(user_number)==true){
    //     console.log("ДА");
    // }
    // else{
    //     console.log("НЕТ")
    // }

    // Задача2. Создать функцию, которая в качестве аргументов получает два числа и выводит в консоль наибольшее.

// function getMax(a, b){
//     if (a > b){
//         return a;
//     }
//     return b;
// }

// console.log(getMax(7, 14));

//Задача3. Описать функцию, которая получает число и возвращает true, если число четное и false в ином случае

// function checkNumber(num){
//     if (num%2==0){
//         return "true";
//     }
//     else{
//         return "false";
//     }
// }
// console.log(checkNumber(12));

// Задача4. Описать функцию, которая получает в качестве аргумента число и возвращает массив из чисел от 0 до указанного числа.

// function getArray(a){

//     let array = [];
//     for (let i=0; i<=a; i++){
//         array.push(i);
//     }
//     return array;
// }

// console.log(getArray(15));

//Задача5. Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему. 
// function get_Array(a, b){

//     let array = [];
//     if(a>b){
//         for(let i=b; i<=a; i++){
//             array.push(i)
//         }
//     }

//     else if (a<b) {
//         for(let i=a; i<=b; i++){
//             array.push(i)
//         }
//     }
//     else{
//         return "error";
//     }
//     return array
// }
// console.log(get_Array(12,28));

// Задача6.Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от большего числа к меньшему. 

// function get_Array(a, b){

//     let array = [];
//     if(a>b){
//         for(let i=a; i>=b; i--){
//             array.push(i)
//         }
//     }
//     else if(a<b){
//         for(let i=b; i>=a; i--){
//             array.push(i)
//         }
//         }
//         else{
//             return "error";
//         }
//         return array
//     }
//     console.log(get_Array(34, 47));

//Задача7.В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте сумму чисел и выведите в консоль.

// let list=[11, -4, 16, -12, 23, -32, 45];

// let sum=0;

// for(let i=0; i<list.length; i++){
//     sum = sum + list[i];
// }
// console.log(sum);

//Задача8.В программе объявлена переменная list, представляющая массив положительных и отрицательных численных значений. Используя цикл, выведите в консоль сумму положительных чисел.

// let list= [11, -4, 16, -12, 23, -32, 45];
// let sum = 0;
// for(let i=0; i< list.length; i++){
//     if(list[i]>0) {sum = sum + list[i];}
// }
// console.log(sum);

//Задача9.В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте разность суммы всех четных чисел и суммы всех нечетных.
//  otvet polychilsja -13, a dolzen - 15)

// let list = [11, 4, 16, 12, 23, 32, 45];
// let sum = 0;
// let sum1 = 0;
// let sum2 = 0;

// for(let i=0; i<list.length; i++){
//     if( list[i]%2==0) {sum1 = sum + list[i];}

//     if(list[i]%2==1) {sum2 = sum + list[i];}
// }
// console.log(sum1-sum2);

//Задача10. Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает объект со свойствами min, max, avg с соответствующими значениями по массиву.

// function getMin(a, b, c){
    
//     if (a <= b && a<=c){
//        return a;
//     }
//     else if (b<=a && b<=c){
//         return b;
//     }
//     return c;
// }

// function getMax(a, b, c){

//     if(a>=b && a>=c){
//         return a
//     }
//     else if( b>=a && b>=c){
//         return b;
//     }
//     return c;
// }

// function getAvg(a, b, c){
//     return a + b + c;
//     }
//     let sum = getAvg(9, 24, 36);
    

// console.log(getMin(9, 24, 36));
// console.log(getMax(9, 24, 36));
// console.log(sum/3);

// Задача11.Используя цикл, выведите в консоль сумму чисел из диапазона значений от 0 до 50 кратные 5.

// let sum = 0;

// for(let i=0; i <=50; i+5){
//     if(i%5 == 0){
// sum = sum + i;
// }
// }
// console.log(sum);

// Задача12.В программе объявлена переменная list, содержащая массив данных. Используя цикл, посчитайте сумму значений до первого булевого значения. Дойдя до булевого значения остановите цикл. Результат суммы выведите в консоль
//let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Задача13.В следующих задачах будет использоваться массив из объектов, каждый из которых описывает определенный товар. 
// Пример массива
// let arr = [
//             {
//             id: 1,
//             title: "bicycle",
//             price: 45000,
//             discount: 10
//             },
//             {
//             id: 2,
//             title: "roller-skates",
//             price: 15000,
//             discount: 5
//             },
//             {
//             id: 3,
//             title: "Kick scooter",
//             price: 10000,
//             discount: 30
//             },
//             {
//             id: 4,
//             title: "skis",
//             price: 25000,
//             discount: 20
//             },
//             {
//             id: 5,
//             title: "skate",
//             price: 10000,
//             discount: 0
//         }
//     ]

// Задача14.Написать цикл, который выводит только названия товаров.
//     for (let i= 0; i < arr.length; i++){
//      for(let key in arr [i]){
//          console.log(arr[i].title);
//     }
// }

// Задача15.Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена>)”
//  for (let i=0; i< arr.length; i++){
    
//     console.log(arr[i]['title']);
//     console.log(arr[i]['price']);
//   }

// Задача16.Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена со скидкой>)”

// for(let i=0; i<arr.length; i++){

//         console.log(arr[i]['title']);
//         console.log('цена со скидкой');
//     }

// Задача17.Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром (без учета скидки).

// function getMax(a, b, c, d, e){
//     if (a>=b && a>=c && a>=d && a>=e){
//         return a;
//     }
//     if (b>=a && b>=c && b>=d && b>=e){
//         return b;
// }
//     if (c>=a && c>=b && c>=d && c>=e){
//         return c;
// }
//     if (d>=a && d>=b && d>=c && d>=e){
//         return d;
// }
//     else{
//         return e;
//     }
// }
// console.log(getMax(45000, 25000, 10000, 12000, 47000));

// Задача18.Написать код, выполнив задание: если значение объекта является числом (number), то его значение надо увеличить вдвое.

// Пример объекта:

// let menu = {
//     width: 200, 
//     height: 300,
//     title: "my menu"
// };

// ne polychilos'

//     console.log(menu );
//     console.log(menu.width*2);
//     console.log(menu.height*2);
//     console.log(menu.title);

// Результат:

// let menu = {
//     width: 400, 
//     height: 600,
//     title: "my menu"
// };

// Задача19.Написать функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.

// function checkNumber(a, b){
//     if(a>b){
//         return 1;
//     }
    
//     if(a<b){
//         return -1;
//     }
//     return 0;
// }
// console.log(checkNumber(12, 12));

// Задача20.Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число. --></цена>

//ne polychilosj "Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число."

// function checkNumber(a, b){
//     if(a%2==0 && b%2==0){
//         return a*b;
//     }
//     if (a%2==1 && b%2==1){
//         return a + b;
//     }
//     return (a%2==1) || (b%2==1);
// } 

// console.log(checkNumber(16, 151));


    
