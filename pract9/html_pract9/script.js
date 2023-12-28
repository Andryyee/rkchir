"use strict";

while (true){
    let answer = prompt("Хотите пройти решистрацию?");
    if (answer == "Да" || answer == "да"){
        alert("Круто!");
        break;
    }
    else{
        alert("Попробуйте ещё раз");
    }
}
var login = prompt("Введите логин");
if (login == "Админ"){
    while(true){
        let password = prompt("Введите пароль");
        if (password == "Я главный"){
            alert("Доступ разрешён");
            break;
        }
        else if (password == null || password == ""){
            alert("Отменено");
            break;
        }
        else{
            alert("Неверный пароль");
        }
    }
}
else if (login == null){
    alert("Отменено");
}
else{
    alert("Я вас не знаю");
}
var k = 0, default_content = heart.textContent;
heart.style.backgroundColor = 'burlywood';
heart.textContent = heart.textContent + " " + k;
heart.onclick = function(){
    if (heart.style.backgroundColor == 'burlywood'){
        k++;
        heart.style.backgroundColor = 'red';
        heart.textContent = default_content + " " + k;
    }
    else{
        k--;
        heart.style.backgroundColor = 'burlywood';
        heart.textContent = default_content + " " + k;
    }
}