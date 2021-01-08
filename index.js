// 1. უმცირესი რიცხვი ( ვარიანტი 1)

function smallest(x, y) {
  console.log(Math.min (x, y));
}

smallest (15, 5);

// 1. უმცირესი რიცხვი ( ვარიანტი 2)

function calcsmallest (x, y) {
  return Math.min (x, y)
}

const result = calcsmallest(15, 29);
console.log(result);


// 2. რიცხვთა ჯამი 80-მდე

function calcFullNum(num=80) {
let sum = 0;
for(let i=0; i<=num; i++) {
sum+=i;}
return console.log(sum);
}

calcFullNum();

// 2. ლუწ რიცხვთა ჯამი

function calcEvenNum(num=80) {
let sum = 0;
for(let i=0; i<=num; i++){
if(i % 2===0) {
    sum+=i;}}
return console.log(sum);}

calcEvenNum();

// 2. კენტ რიცხვთა ჯამი

function calcOddNum(num=80) {
let sum = 0;
for(let i=0; i<=num; i++){
if(!(i % 2===0)) {
    sum+=i;}}
return console.log(sum);}

calcOddNum();

// 3. ხარისხში აყვანა

function calcValue(x, n) {
  return x**=n;
}
console.log (calcValue ( 12, 2 ));

// 4. translate

let en = "hello";
let ka = "გამარჯობა";

function translate(lang) {
  if (lang == ka) 
  return alert ("გამარჯობა");
  else (lang == en)
  return alert ("hello");
}

translate(ka);