// console.log("Data Structure")

// looping with increment

// for (let index = 0; index < 10; index++) {
//     console.log('hai looping');
// }

// hasil
// hai looping (10 kali)

// for (let index = 0; index < 10; index++) {
//     console.log('hai looping',index++);
// }

// hasil looping
// hai looping 0
// hai looping 2
// hai looping 4
// hai looping 6
// hai looping 8

// for (let index = 0; index < 10; index++) {
//     console.log('hai looping',index+1);
// }
// hasilnya
// hai looping 1
// hai looping 2
// hai looping 3
// hai looping 4
// hai looping 5
// hai looping 6
// hai looping 7
// hai looping 8
// hai looping 9
// hai looping 10

// for (let index = 5; index > 0; index--) {
//     console.log('hai looping decrement');
// }

// hasil
// hai looping decrement (5 kali)

// rules buat for loop tampilkan ke layar angka 1-20, jika angkanya kelipatan 5, tampilkan ke layar boom

// for (let index = 1; index <= 20; index++) {
//     if(index %5==0){
//         console.log("boom")
//     }   
//     else{ 
//         console.log(index)
//     }
// }


// hasilnya

// 1
// 2
// 3
// 4
// boom
// 6
// 7
// 8
// 9
// boom
// 11
// 12
// 13
// 14
// boom
// 16
// 17
// 18
// 19
// boom

// rules dapatkan huruf vocal a pada sebuah string

// const nama = 'saf';
// console.log(nama.length);

// jawaban *ga paham*

// let count = 0;
// for (let i = 0;i < nama.length; i++) {
//     nama[i]=='a'? count++ : null;  
// }
// console.log(count);

// // output nya 1

// // safitri kalo ga paham lihat contoh yang lain :
// const nilaiUjian = 60
// const kkm = 75
// const lulus = nilaiUjian > kkm ? "Lulus" : "Tidak Lulus"
// console.log(lulus)

// let arr1 = [1,2,3,4,5,-6,-9];
// function reversevalue(arr1) {
//     for (let index = 0; index < arr1.length; index++) {
//         if(typeof arr1==NaN){
//             console.log("salah");
//         } 
        
//         else {  
//                 arr1[index] *=-1;
//             }
//         }
        
//         console.log(arr1)
//     }

// reversevalue(arr1);

var arr1 = [1,2,3];
var a = arr1[0]; //safitri ini maksudnya ngambil index ke 0 dari si array nya
console.log(arr1.toString()); //ini artinya convert array ke string ya
console.log(a);   