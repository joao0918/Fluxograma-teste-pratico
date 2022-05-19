var p1 = document.querySelector('#p1')
var p2 = document.querySelector('#p2')
var p3 = document.querySelector('#p3')
var result = document.querySelector('span')

function media(){
    result.innerHTML = p1.value + p2.value + p3.value/3
};