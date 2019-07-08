// document.write("<h2>Hello JavaScript</h2>");
// alert("Hello");
// console.log("Hello console");

/*let price = 100;
document.write(price);
let text = "<h2>Hello Javascript<h2>";
document.write("<br>"+text+"<br>"); // можно и так оформлять (`<br> ${text} <br>`)
let textPrice = "100.5";
document.write(price + parseFloat(textPrice));
price += 50;
document.write("<br>"+price);
const myconst = 5;
let a = 5;
a++;
document.write(`<br> ${a}`);*/

let zapros = prompt("Input your age");
document.write(`Your age ${zapros} <br>`);
if(zapros > 20){
	document.write("Старичок <br>");
}
else {
	document.write("Рано еще <br>");
}

let ans = confirm("Продолжить далее?");
if(ans){
	document.write("Продолжаем...");
}
else {
	document.write("Заканчиваем");
}