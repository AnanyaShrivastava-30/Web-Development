let box = document.querySelectorAll('button')
let turn0=true
for(let a of box){
    a.addEventListener("click",()=>{
        console.log("heheheh");
        if(turn0==true){
            a.innerText="0"
            true0=false
            a.disabled=true
        }else{
            a.innerText="X"
            
        }
    })
}