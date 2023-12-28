let arr = [];
let count = 1;

function item(name, price) {
    this.name = name;
    this.price = price;
}

function newitem(){
    var it = new item("item" + count, (Math.trunc(Math.random() * 10000) + 10000));
    count++;
    arr.push(it);
}

function sort() {
    var radios = document.getElementsByName('big');
    var selected = Array.from(radios).find(radio => radio.checked);
    if (selected != undefined)
    {
        var direction = (selected.value == '1') ? 1 : 0;
        if (direction == 1) {
            for (let i = 0; i < arr.length; i++){
                for (let j = i; j < arr.length; j++){
                    if (arr[j].price < arr[i].price){
                        [arr[j], arr[i]] = [arr[i], arr[j]];
                    }
                }
            }
        }
        else {
            for (let i = 0; i < arr.length; i++){
                for (let j = i; j < arr.length; j++){
                    if (arr[j].price > arr[i].price){
                        [arr[i], arr[j]] = [arr[j], arr[i]];
                    }
                }
            }
        }
    }
}

function busketupdate(){
    let s = '';
    let totalprice = 0;
    for (let elem of arr){
        s += elem.name + " cost: " + elem.price + '<br>';
        totalprice += elem.price;
    }
    document.getElementById("A").innerHTML = s;
    document.getElementById("price").innerHTML = "Total price: " + totalprice;
}

function del(){
    arr.splice((Math.random() * (arr.length)), 1);
}

function cl(){
    arr = [];
    count = 1;
}

function filt(a, b){
    let new_arr = [];
    for (let elem of arr){
        if (elem.price >= a && elem.price <= b){
            new_arr.push(elem);
        }
    }
    return new_arr;
}

function more(){
    let a = document.getElementById("more").value;
    let b = document.getElementById("less").value;
    let items = filt(a, b);
    let str = '';
    for (let elem of items){
        str += elem.name + " cost: " + elem.price + '<br>';
    }
    document.getElementById("B").innerHTML = str;
}