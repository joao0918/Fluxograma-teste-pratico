function login(){
    var user = document.getElementById('email').value;
    user = user.toLowerCase()
    var password = document.getElementById('senha').value
    console.log(user, password)
    
}
// conta das notas
function media(){
    p1 = +document.getElementById('p1').value;
    p2 = +document.getElementById('p2').value;
    p3 = +document.getElementById('p3').value;
    
    if(p1 == "" || p2 == "" || p3 == ""){
        alert("Dados informados estão inválidos")
        location.reload();
    }
    var media = ((p1 + p2 + p3)/3);
    var media = media.toFixed(1)
    if (media >10 || media < 0){
        if (media > 10){
            alert("media maior que 10");
            location.reload();
        }if (media < 0) {
            alert("media menor que 0");
            location.reload();
        }    
    }else{
        if(media < 4.0){
            var valor = "E"
        }else if(media >= 4.0 && media < 6.0){
            var valor = "D"
        }else if(media >= 6.0 && media < 7.5){
            var valor = "C"
        }else if(media >= 7.5 && media < 9.0){
            var valor = "B"
        }else if(media > 9.0){
            var valor = "A"
        }
        var result = document.querySelector('span');
        result.innerHTML = (media + " e o conceito é " + valor);
    };
};
