//Default Parameters

//tham số mặc đinh bằng gán tại vị trí khai báo function
// const sum = (a=0, b=0) =>{
// return a + b;
// }


//tham số mặc đinh bằng gán bên trong function
// const sum = (a, b) =>{
//     a=a || 0;
//     b=b || 0;
//     return a + b;
// }

// console.log(sum(10));


//Spread syntax

//vd của Array
// const array1= [1,2,3]
// const array2= [4,5,6]
// const array3= [1,2,3,4,5,6]
// const array4= [...array1, ...array2]
// const array5= [
//     {
//         id: 1,
//         name: "Phi",
//     },
//     {
//         id: 2,
//         name: "Nhựt",
//     },
// ]

// console.log(...array1);
// console.log(...array2);
// console.log(...array3);
// console.log(array4);
// console.log(...array4,...array5);

//vd của Object

// let inforUser= {
//     fullName: "Lê Nhựt Phi",
//     email:"jkj822925@gmail.com",
// }

// let inforUpdate ={
//     phone:"0386660509",
//     age: 24,
// }

// let inforFinal = {
//     ...inforUser,
//     ...inforUpdate
// }


// console.log(inforFinal);


// Rest Parameters

// const sum = (...numbers) => {
//     console.log(numbers);
//     const result = numbers.reduce((total,item) => {
//         return total + item
//     },0 )
//     return result
// }
// console.log(sum(10,20,30,40,50,60));


//Destructuring

// let inforUser= {
//         fullName: "Lê Nhựt Phi",
//         email:"jkj822925@gmail.com",
//     }

//     let array = ["chúng ta của hiện tại", "Chạy ngay đi", "Cơn mưa ngang qua"]
// //Cách thông thường
//     // console.log(inforUser.fullName);
//     // console.log(inforUser.fullName);
//     // console.log(inforUser.fullName);
//     // console.log(inforUser.fullName);
//     console.log(array);

// //Cách destructuring
// const [...rest] = array
// console.log(...rest);

// const {fullName, email} = inforUser ;
// console.log(fullName, email);
// console.log(email);


