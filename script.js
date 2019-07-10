let a = prompt('¬ведите первое число:');
let b = prompt('¬ведите второе число:');
let operator = prompt('¬ведите знак');

 if (operator == '+') {
     prompt(+a + +b);
}   else if (operator == '-') {
     alert(+a - +b);
}   else if (operator == '*') {
     alert(+a * +b);
}   else if (operator == '/') {
     alert(+a / +b);
}   else{
     alert('¬ведите нужную операцию!');
}
