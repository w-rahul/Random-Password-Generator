var input = document.getElementById("pass")
var bttn = document.getElementById("btn")

Randgenerate = (x) => { 
    let box = ''
    var charcters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+"
    var length = charcters.length
    var count = 0
    while(count < x){
        box += charcters.charAt(Math.random()*length)
        count += 1
    } 
   
    input.value = box
}

DEL = () => {
    input.value = ''
}

// console.log(Randgenerate(10))

// bttn.addEventListener( "click" , Randgenerate(10))
// input.appendChild("btn")