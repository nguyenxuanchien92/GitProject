// // bài 1
// let f = 20.5
// let b = true
// let s = 'Hà Nội'
//
// document.write("bài 1:");
// document.write('<br/>');
// document.write('f = ' + f);
// document.write('<br/>');
// document.write('b = ' + b);
// document.write('<br/>');
// document.write('s = ' + s);
// document.write('<br/>');
//
// document.write("bài 2:");
// let width = 20
// let height = 10
// let area = width * height
// document.write('<br/>');
// document.write('Area = ' + area)
// document.write('<br/>');

// bài 3
let a;
let b;

a = prompt("Enter a:");
b = prompt("Enter b:");

result = a % b;

if(result == 0){
    alert("a chia hết cho b");
}else {
    alert(" a không chia hết cho b")
}