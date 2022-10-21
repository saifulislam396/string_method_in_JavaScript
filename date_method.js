// date method start
// rules how to call ====== var name= new Date() 
var now= new Date();
var nowD=now.toDateString(); /* you can show day  month date year*/
var todayDate= now.getDate() /* you can show only date */
var fullyear=now.getFullYear() /* you can show only year */
var month=now.getMonth() /* you can show only month  note: index start 0 */
var day=now.getDay()

// time method
var hours=now.getHours()
var min=now.getMinutes()
var sec=now.getSeconds()
var milS=now.getMilliseconds()

// set date method
// now.setDate(23)
// now.setFullYear(2020)
// now.setMonth(4)
// now.setHours(4)

var res=now.getDate() + '/' + now.getMonth() + '/' + now.getFullYear();
console.log(res)
