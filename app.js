// Contador i
let cont = 0 
// Variavel de ambiente
const valor = document.querySelector('#value')  
const btns = document.querySelectorAll('.btn')
 
btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        // listando as classes
        const styles = e.currentTarget.classList;
       if(styles.contains('decrease')){
        cont --;
        }else if(styles.contains('increase')){
            cont ++
        }else{
            cont=0;
        } 
        if(cont > 0){
            value.style.color = 'green'
        }  
        if(cont < 0){
            value.style.color='red'
        }     
        valor.textContent = cont
    } )
})