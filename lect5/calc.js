let imp = document.querySelector('input')
let button = document.querySelectorAll('button')
for(let btn of buttons){
    btn.addEventListener("clidk",()=>{
        let btnText=btn.innerText
        console.log(btnText);
        if(btnText=="C"){
            imp.values=""
        }else if(btnText=='='){
            imp.value = eval(imp.value)
        }else{
            imp.value=btnText
        }
    })
}