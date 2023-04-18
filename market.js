function ficha(){
   
    let nombreProducto,lineap,cantiEquipos,versiones,valor,vt,compu,valorcompu,totalcompu,impre,valorimpre,totalimpre,laser,valorlaser,totallaser,tv,valortv,totaltv,nevera,valornevera,totalnevera,conge,valorconge,totalconge,vitrina,valorvitrina,totalvitrina,camara,valorcamara,totalcamara,totaltodo

    nombreProducto = document.getElementById("nomProducto").value 
    lineap = document.getElementById("linea").value
    cantiEquipos = document.getElementById("cantidad").value 
    valor = document.getElementById("valor").value 
    versiones = document.getElementById("versiones").value 
    console.log(versiones)
    vt = cantiEquipos * valor
    console.log(vt)
    compu=document.getElementById("compu").value 
    valorcompu=document.getElementById("vcompu").value 
    totalcompu = compu * valorcompu
    impre=document.getElementById("impresora").value 
    valorimpre = document.getElementById("vimpre").value
    totalimpre = impre * valorimpre
    laser=document.getElementById("laser").value 
    valorlaser = document.getElementById("vlaser").value
    totallaser = laser * valorlaser
    tv = document.getElementById("tv").value 
    valortv=document.getElementById("vtv").value
    totaltv = tv * valortv
    nevera = document.getElementById("neveras").value 
    valornevera=document.getElementById("vneve").value
    totalnevera = nevera * valornevera
    conge = document.getElementById("conge").value 
    valorconge=document.getElementById("vconge").value
    totalconge = conge * valorconge
    vitrina = document.getElementById("vitrinas").value 
    valorvitrina=document.getElementById("vvitrinas").value
    totalvitrina = vitrina * valorvitrina
    camara = document.getElementById("camara").value 
    valorcamara=document.getElementById("vcamara").value
    totalcamara = camara * valorcamara

    totaltodo= totalcompu + totalimpre + totallaser + totaltv + totalnevera + totalconge + totalvitrina + totalcamara

    document.getElementById("rtpro").innerHTML= "<h2><b>Nombre del Producto: " +nombreProducto+ "</b></h2>"
    document.getElementById("lineapro").innerHTML= "<h2><b>Linea de Produccion: "+lineap+ "</b></h2>"
    document.getElementById("cantiequi").innerHTML= "<h2><b>Cantidad de Equipos: "+cantiEquipos+ "</b></h2>"
    document.getElementById("total").innerHTML= "<h2><b>Valor Total de Equipos: "+vt+ "</b></h2>"
    document.getElementById("versionante").innerHTML= "<h2><b>Versiones Anteriores: "+versiones+ "</b></h2>"
    document.getElementById("comput").innerHTML= "<h2><b>Computadoras: "+compu+ "</b></h2>"
    document.getElementById("tcompu").innerHTML= "<h2><b>Valor Total Computadoras: "+totalcompu+ "</b></h2>"
    document.getElementById("impreso").innerHTML= "<h2><b>Impresoras: "+impre+ "</b></h2>"
    document.getElementById("timpre").innerHTML= "<h2><b>Valor Total Impresoras: "+totalimpre+ "</b></h2>"
    document.getElementById("las").innerHTML= "<h2><b>Lasers: "+laser+ "</b></h2>"
    document.getElementById("tlaser").innerHTML="<h2><b>Valor Total Lasers: "+totallaser+ "</b></h2>"
    document.getElementById("tele").innerHTML="<h2><b>Televisores: "+tv+ "</b></h2>"
    document.getElementById("ttv").innerHTML="<h2><b>Valor Total de Televisores: "+totaltv+ "</b></h2>"
    document.getElementById("never").innerHTML="<h2><b>Neveras: "+nevera+ "</b></h2>"
    document.getElementById("tneve").innerHTML="<h2><b>Valor Total de Neveras: "+totalnevera+ "</b></h2>"
    document.getElementById("congela").innerHTML="<h2><b>Congeladores: "+conge+ "</b></h2>"
    document.getElementById("tcongela").innerHTML="<h2><b>Valor Total de Congeladores: "+totalconge+ "</b></h2>"
    document.getElementById("vitri").innerHTML="<h2><b>Vitrinas: "+vitrina+ "</b></h2>"
    document.getElementById("tvitri").innerHTML="<h2><b>Valor Total de Vitrinas: "+totalvitrina+ "</b></h2>"
    document.getElementById("cama").innerHTML="<h2><b>Camaras de Seguridad: "+camara+ "</b></h2>"
    document.getElementById("tcama").innerHTML="<h2><b>Valor Total de Camaras de Seguridad: "+totalcamara+ "</b></h2>"

    document.getElementById("totaldetodo").innerHTML="<h1><b> Total de Todo: "+totaltodo+ "</b></h1>"
}
function imprimir(){
    window.print();
}