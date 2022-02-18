// console.js
// console.log('hello');
// console.log(true);
// console.log(123);
// console.log({a:2 , b: 3});
// console.log([1,2,3,4,5]);
// var name = 'Rashid Minhas';
// console.log(name);

// console.warn('Dont search this is a secure side');
// console.error('there are some error occore');
// console.table({a:2 , b: 3});
// function person(firstname , lastname){
//     this.firstname = firstname;
//     this.lastname =lastname;
// }





// next Day varaibles  var , let and constant
// var me = new person('Rashid', 'Minhas');
// console.table(me);

// console.clear();


// Var porpertie

// var name;
// name = 'Rashid Minhas';
// console.log(name);

// var Name = 'Rashid Minhas';
// console.log(Name);
// Name = 'Minhas Rashid';
// console.log(Name);



// let porpertie

// let name;
// name = 'Rashid Minhas';
// console.log(name);

// let Name = 'Minhas Rashid';
// console.log(Name);
// it will be reassign 
// Name = 'Rashid Minhas';
// console.log(Name);



// const porpertie

 
// const name = "Rashid Minhas";
// console.log(name);

// cont did not reassing
// example

// const name = 'Rashid Minhas';
// console.log(name);
// name = ' minhas';


// if we have to reassign the const than process
// example
// const name = 'Rashid Minhas';

 
// const person = {
//     name:'Alishar',
//     age: 20
// }
// person.name = 'malik';
// console.log(person);


// var x = 30;
// var y= 50;
// var result =x+y;
// console.log(result);


// const val1;
// const val1  = 5;
// const val2 = 6;
// const sum = val1+val2;

// console.log(sum);
// console.log(typeof sum);




// Next Day  string method and concatenation

// const firstname = 'Rashid';
// const lastname ='Minhas';
// const me = 'hello i am rashid minhas'

// let val;
// val = firstname + lastname;

 
// // concatencation
// val = firstname + ' ' + lastname;
 

// // Appened
// val = 'sara';
// val += 'malik';


// // Escaping
// // val = "that's awesome, i can't wait"; first solution
// val = "that's awesome, i can't wait";

// // change case
//  val = firstname.toUpperCase();
//  val += lastname.toLowerCase();

//replace
// val = firstname.replace('Rashid', 'alishar');
// val = me.replace('hello','Hi');


// split
// val = me.split(' ');
// val = me.split(',');

// include
// val = me.includes('minhas');


// console
// console.log(val);



// Next Template Literals


// const name = 'Rashid Minhas';
// const age = '20';
// const city = ' Gilgit';
// const job = 'web Developer'
// let main;
 

// without using string template (es6)

// main= '<ul>'+
//       '<li>Name:'+name+'</li>'+
//       '<li>Age:'+ age+'</li>'+
//       '<li>City:'+city +'</li>'+
//       '<li>Job:'+job+'</li>'+
//       '</ul>' ;

// second solution
// main = `
// <ul>
// <li>Name:${name}</li>
// <li>Age:${age}</li>
// <li>City:${city}</li>
// <li>Job:${job}</li>
// </ul>
// `;
// document.body.innerHTML = main;



// Array porpertie

// const number =[12,334,55,5,66,77];
// const friuts = ['apple','banana','mango'];
// const mixed = [ 'apple', 12,34,45 , true , null, undefined];
// let val;

// val = Array.isArray(friuts);

// // get single array
// val = mixed[0];

// // Mutating Array
// // add array on end
// number.push(230);
// mixed.push(234);
// // add array on front/first
// number.unshift(120);
// mixed.unshift('graps');
// // remove array from end
// number.pop();

// // remove array from front/first
// number.shift();

// //Concatenation marge number and friuts
// val = number.concat(friuts);

// //sort porpertie  form lower to uper
// val = number.sort(function(x, y){
//     return x-y;
//    });
//    //sort porpertie form upper to lower
//    val = number.sort(function(y, x){
//    return y-x;
//    });
   

// // console
// console.log(number);
// console.log(val);
// console.log(typeof number);
//end


//sort porperties


// const num = [1,2,3,4,5,6,7,8,9];
// const num1 = [9,8,7,6,5,4,3,2,1];

// let val;
//  //sort from lower lower to uper
// //  val = num1.sort(function(x, y){
// //  return x-y;
// //  });

// //sort from uper to lower
// val = num.sort(function(y, x){
//  return y-x;
// });
//  console.log(val);






// creat object

// let user ={
//     name :'Rashid Minhas',
//     age : 20,
//     email : 'www.rashidminhas37@gmail.com',
// };

// console.log(user);




