let a = prompt('������� ������ �����:');
let b = prompt('������� ������ �����:');
let operator = prompt('������� ����');

 if (operator == '+') {
     prompt(+a + +b);
}   else if (operator == '-') {
     alert(+a - +b);
}   else if (operator == '*') {
     alert(+a * +b);
}   else if (operator == '/') {
     alert(+a / +b);
}   else{
     alert('������� ������ ��������!');
}
