// javascript string  method
var str= "JavaScript is a is great Language";
var str1= "    Php is a is great Language"; /* for trim */
var a=str.length; /* return all the sentence word number , space also count */
var b=str.toLowerCase();
var c=str.toUpperCase()
var d=str.includes('is');/* if word is matching return boolean value ; note: it's case sensetive */
var e=str.startsWith('Java') /* if word is matching return boolean value  ; note:start search in begeaining, it's case sensetive */
var f=str.endsWith('uage') /* if word is matching return boolean value  ; note:start search in the end, it's case sensetive */
var g=str.search('is') ;/* if word is matching return word position value and if no one is matching return -1 ; note:start search in begeaining, it's case sensetive */
var h=str.match(/is/g);/* if word is matching  return word value all the matchign word show in a array ; note:start search in begeaining, it's case sensetive */
var i=str.indexOf('isss')/* if word is matching return word position value and if no one is matching return -1 ; note:start search in begeaining, it's case sensetive */
var j=str.lastIndexOf('is')/* if word is matching return word position value and if no one is matching return -1 ; note:start search in the end, it's case sensetive */
var k=str.replace('JavaScript', "php")/* replace selected word */
var k=str.replace(/is/g, "are")/* replace selected word */
var l=str1.trim()/* remove starting space */
var m=str.charAt(12) /* return selected positon's word */
var n=str.charCodeAt(11) /* return selected positon's word  er ascii decimal */
var o=String.fromCharCode(33) /*return ascii decimal to char */
var p=str.concat(str1) /* add other var's string */
// var q=str.split(" ")
var q=str.split('i') /* return array selected word er por teke count kore */
var r=str.repeat(5) /* string repat kore */
var s=str.slice(4,10) /* return selected positon word , it's retrun seletecd to select positon . you can cumtom call start end  */
var t=str.substr(4,10) /* return selected positon's word ,similar  to slice but it's retrn start to selected positon */
var u=str.substring(4,10) /* similar to slice*/
var str2=24
var v=str2.toString()
var w=str.valueOf() /* it's default */
console.log(v +23)
// console.log(w)