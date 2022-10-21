var ary= [
    ['Saiful',22, 'Male' , "Diploma"],
    ['Sagor',16, 'Male' , "JSC"],
    ['Saiful Islam',18, 'Male' , "SSC"],
    ['Saiful Islam Sagor',15, 'Male' , "PSC"]
];
// console.log(ary[1][0]);
// for( var i=0; i<ary.length; i++){
//     for( var a=0; a< ary.length; a++){
//          console.log(ary[i][a]);  /* i = array number a= array er value */
        
//     }
//     // console.log(ary[i] +" ");
// }

// change and delete arry value to target position
// var arry=['Saiful',22, 'Male' , "Diploma"];
// console.log(arry);
// arry[0] ='Sagor';
// arry[1] =20;
// arry[3] ='SSC';
// delete arry[3];
// console.log(arry)

// Array method start 
var a=['Saiful' ,'Islam', 'Sagor',"PSC","ddd"];
var b=["Nasima" , "Ali"]
// a.sort() /* array value ke a-z onujaiye return kore*/
// a.reverse() /* array value ke reverse  kore*/
// a.pop() /* array last value delete kore*/
// a.push('Nasima') /* array te last e value add kore*/
// a.shift() /* delete first value of the array */
// a.unshift("Ali") /* add first value of the array */
// var c= a.concat(b) /* ekta array er sate r ekta array add kore  */
// var d=a.join("-") /* selected parameter add kore every value r sate*/

// slice start  [slice(a,b) . a= start , b=end]
// var e= a.slice(2,4) /* array er modde teke call kora positon teke suru kore call kora position porjonto array value return kore  1st paraM call position 2nd paraM end  positon total ,, end positon er value return kore na*/
// var e= a.slice(-4,-2);
// var f=e.join("?")
// console.log(e)


// splice start
// 1st practice
// var splicee=['Saiful' ,'Islam', 'Sagor','Nasima'];
// splicee.splice(3,1,"ALI","nasima");
// console.log(splicee)

// 2nd practice [splice(a,b,c) a=position to start operation, b= how many paraM U delete or Not delet call, c= add new value (you can add more value)]
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);


// isArray start
// let ar=['Saiful' ,'Islam', 'Sagor','Nasima']
// var isAr= Array.isArray(ar);
// console.log(isAr)

// 2n practice
// if(Array.isArray(ar) == true){
//     console.log('this is arrar')
// }else{
//     console.log('not an arry')
//}


// indexOf start indexOf(p1,p2) ; p1= searching name, p2= searching positon (na dile array er sob value searh korbe)
// let ar=['Saiful' ,'Islam', 'Sagor','Nasima'];
// let ar2=ar.indexOf('Islam'); /* index position return kore */
// // let ar2=ar.indexOf('Islam',3); /*ekane searching position index 3 dewa hoyece!  searching emty hole -1 value return kore*/
// if(ar2 == -1){
//     console.log("NO data found")
// }else{
//     console.log(ar2)
// }


// lastIndexOf() start eta indexOf er moto sob but eta right side teke operation start kore
// let ar=['Saiful' ,'Islam', 'Sagor','Nasima'];
// let arr2=ar.lastIndexOf("Islam");
// let arr2=ar.lastIndexOf("Nasima",2);
// console.log(arr2)


// include () search kora value mille  boolean value return kore 
// 1st practice
// let ar=['Saiful' ,'Islam', 'Sagor','Nasima'];
// let arr2 =ar.includes("Islam")
// console.log(arr2)

// 2nd practice
// let ar=['Saiful' ,'Islam', 'Sagor','Nasima'];
// let res= ar.includes('Saiful');
// if (res == true){
//     console.log('value is matching');
// }else{
//     console.log('value is not matching')
// }


// some () every() start 
// let ar= [23,12,4,15,33];
// let ar= [23,18,55,18,33]; /* for every */
// let sme=ar.some(checkAdult);/* array er modde jekono ekta value condition r modde porle e true return kore */
// let sme=ar.every(checkAdult) /* array er modde sob  value condition r modde porle e true return kore */
// function checkAdult(age){
//     return age >=18;
// }
// console.log(sme)


// find and findIndex () start
// let ar= [23,12,4,15,33];
// // let fnd=ar.find(chcekAdlt) /*value return kore. condition value peye gele operation off kore dai r porer value check kore na tai 23 e return korse 33 r kore nai */
// let fnd=ar.findIndex(chcekAdlt) /* similar to find but eta index number retun kore */
// function chcekAdlt(ar){
//     return ar  >=18 ;
// }
// console.log(fnd)


// filter () start
// let ar= [23,12,4,15,33];
// // let adult=ar.filter(ckAdult); /* condition e pore amn valu gula array akare return kore */
// function ckAdult(ar){
//          return ar  >=18 ;
//      }
// console.log(adult)


// toString ,valueOf, fill start 
// let ar=['Saiful' ,'Islam', 'Sagor','Nasima'];
// // let str=ar.toString(); /* eta array ke string kore dai */
// // let str=ar.valueOf() /* pura array ke return kore dai */
// let fil=ar.fill('The Rock') /* eta sob array ke ek e nam kore dai jeta dewa hoy */
// console.log(fil)


// foreach start
// let forech =['sai' ,'ful', 'sagor'];
// // forech.forEach(function(value,index){
// //     console.log(index + value)
// // })
// forech.forEach(function(value,index ) {
//     console.log(`${value}  ${index}`)
//     // console.log(value + index)
// });


