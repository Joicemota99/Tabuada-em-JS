function gerar(){
    var tabuada = document.getElementById('txtab')
    var tab = Number(tabuada.value)
    var res = document.getElementById('seltab')
    var t = ""
    
    if(tabuada.value.length == 0){
        alert('[ERRO] Selecione um número válido!')
    } else {
        res.innerHTML = ``
    for(var c = 1; c <= 10; c++){
        let item = document.createElement('option')
        
        t = tab*c 

        item.text = `${tab} X ${c} = ${t}`
        res.appendChild(item)
        
           
     }   
    }
}
