function enviar(){
    let valorp1

    valorp1 = document.getElementById("t1").value
    
    //guardar localmente
    localStorage.setItem("t1",valorp1)
    //enviar al archivo respuesta.html   
   
    let valorp2
    valorp2 = document.getElementById("t2").value
    
    //guardar localmente
    localStorage.setItem("t2",valorp2)
    //enviar al archivo respuesta.html   
   
    let valorp3
    valorp3 = document.getElementById("t3").value
    
    //guardar localmente
    localStorage.setItem("t3",valorp3)
    //enviar al archivo respuesta.html   

    let valorp4
    valorp4 = document.getElementById("t4").value
    
    //guardar localmente
    localStorage.setItem("t4",valorp4)
    //enviar al archivo respuesta.html 

    let valorp5
    valorp5 = document.getElementById("t5").value
    
    //guardar localmente
    localStorage.setItem("t5",valorp5)
    //enviar al archivo respuesta.html 

    let valorp6
    valorp6 = document.getElementById("t6").value
    
    //guardar localmente
    localStorage.setItem("t6",valorp6)
    //enviar al archivo respuesta.html 

    window.location="compra.html"
}