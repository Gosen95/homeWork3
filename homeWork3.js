// 1. Insert a number. Print “yes” if it contains 3 successive zeros, otherwise print “no”.

function checkZeroо(number) {

   const numString = String(number);   // Преобразуем число в строку
 
    for (let i = 0; i < numString.length - 2; i++) {// с помощью .length проходимся по каждому символу строки кроме последних 2 потомучто нужно вычислить 3-(0) подрад
     if (numString[i] === '0' && numString[i + 1] === '0' && numString[i + 2] === '0') {//проверяем на каждом круге цыкла число и сравниваем в предидущим
       console.log("yes");
       return;
     }
   }
       console.log("no");
 
 }
 





/*2. Insert a number. Remove all zeros from the number, except the last one and print the
number. If there are at most one zero, print “Nothing to remove”.*/


function checkAndDelZero(inputNumber) {

   let numberString = inputNumber + '';// создаем переменную и конвертим число в строку
   let resultBefore = '';// до нахождения 0
   let resultAfter = '';//после нахождения 0
   let zeroCount = 0;// для подсчета 0
   let lastZeroIndex = -1;// для хранения индекса последнего найденного 0
 
   for (let i = 0; i < numberString.length; i++) {/*цикл который проходит по всем символам
     if (numberString[i] === '0') {//  Если найден 0 то  zeroCount++, если lastZeroIndex равен -1 (то есть это первый встреченный ноль), то lastZeroIndex устанавливается в текущий индекс i, если символ не  0  то lastZeroIndex сбрасывается в -1 и символ добавляется либо в resultBefore либо в resultAfter в зависимости от того  был ли предыдущий символ 0*/
       zeroCount++;
       if (lastZeroIndex === -1) {
         lastZeroIndex = i;
       }
     } else {
       lastZeroIndex = -1;
       if (lastZeroIndex === -1) {
         resultBefore += numberString[i];
       } else {
         resultAfter += numberString[i];
       }
     }
   }
 
   if (zeroCount <= 1) {//если найдено оди 0 то вывезти Nothing
     console.log("Nothing to remove");
   } else {
     let result = resultBefore + '0' + resultAfter;// если найдено больше чем 1 то создается переменная  в которой добавляется '0' между resultBefore и resultAfter, и затем эта строка преобразуется в число и выводится.
     console.log(Number(result));
   }
 }
 
 






/*3. Insert a n positive number. Check number is prime or not. Prime numbers are numbers
that have only 2 factors: 1 and themselves. For example, the first 5 prime numbers are
2, 3, 5, 7, and 11.*/


function checkNumb(number){//если число <=1 сразу false
    
   if (number <= 1) {
       return false;
   }

   if (number === 2) {//если число = 2 то true потомучто 2 единственное четное простое число
       return true;
   }

   if (number % 2 === 0) {//проверяем четное ли введенное число кроме числа 2 если да то false
       return false;
   }

   for (let i = 3; i * i <= number; i += 2) {//цикл для нечетных чисел i=3 цикл будет работать пока i*i меньше или равно введенному числу, i=3 потомучто на 2 уже проверили а цикл будет увеличивать на 2 чтобы не проверять четные числа
       if (number % i === 0) {//проверяем делится ли число на на текущую i без остатка,если делитса то true если нет то false
           return false;
       }
   }

   return true;
}






//4. Insert a n positive number. Print the n-st prime number.


function printPrimeNumb(n) {
   let count = 0;// для простых чисел 
   let num = 2;// для текущего числа

   while (count < n) {// будет искать простые числа пока не достигнет введенное число
       let isPrime = true;// сездаем переменную с true и проверяем ее потом

       for (let i = 2; i <= num / 2; i++) {// проверяем является ли рекущее число простым
           if (num % i === 0) {// если число делится на i без остатка тоесть целое число то это не простое число так как у простого числя есть только 2 делителя 1 и само это число
               isPrime = false;// если условие выше работает это значит что число не простое то цикл останавливается и дает folse
               break;
           }
       }

       if (isPrime) {// если текущее число оказалось простым то счетчик ++
           count++;
       }

       if (count < n) {//проверяем не достигнуло ли уже введенного числа
           num++;
       }
   }

   return num;
}






//5. Insert two positive integers n and m between 1 and 10. Compute and print n m .

function calculationNumb(n, m) {
 
   if (n >= 1 && n <= 10 && m >= 1 && m <= 10) {// проверяем что введенные числа находятся в диопазоне от 1 до 10
   
     let result = Math.pow(n, m);// с помощью math.pow возводим в степень
 
 
    console.log(n + '^' + m + ' = ' + result);//^- знак степени
 
   } else {
     console.log();
   }
 }
 
 
 