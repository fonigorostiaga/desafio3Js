let nombreUsuario=prompt("Bienvenido, por favor ingresa tu nombre o apodo");
while(nombreUsuario==""){
    nombreUsuario=prompt("No ingresaste ningun nombre, nos gustaria poder llamarte como quieras, por favor ingresa tu nombre");
}

alert("hola "+nombreUsuario+", esta es una tienda especial, todas las prendas tienen el mismo precio, pero OJO!\nPor cada prenda adicional que lleves tenes un 5% ACUMULADO de descuento!")
let cantidadPrendas=prompt(nombreUsuario +" cuantas prendas va a necesitar?")
const pedido=[];

for(i=0;i<cantidadPrendas;i++){
    pedido[i]=[{
        producto:i,tipo:prompt("Cual va a ser tu Prenda "+(i+1)+"? \nPantalon $"+(2500-(2500*(i*0.05)))+"\nRemera $"+(2500-(2500*(i*0.05)))+"\nBuzo $"+(2500-(2500*(i*0.05)))+"\nCampera $"+(2500-(2500*(i*0.05)))),color:prompt("de que color buscas tu prenda "+(i+1)+"?\nBlanco, Rojo, Azul, Verde, Gris"),talle:prompt("De que talle buscas tu prenda "+(i+1)+"?\nXL\nL\nM\nS\nXS"),especificacion:prompt("Tenes alguna especificacion para tu prenda "+(i+1)+"?\nManga larga, Manga corta, Buzo canguro, Buzo con capucha, Remera con estampado"),precio:"x"
    },2500-(2500*(i*0.05))]
}
document.write("Muchas gracias por tu compra, debajo encontraras en detalle el contenido de tu pedido"+ "<br>")
for(prenda of pedido){
    for(item in prenda){
        if(typeof prenda[item]==='object'){
            document.write("Item: "+(prenda[item].producto+1)+ "<br>"+"Tipo: "+prenda[item].tipo+ "<br>" + "Color: "+prenda[item].color+ "<br>" + "\nTalle: "+prenda[item].talle+ "<br>"+"Especificacion: "+prenda[item].especificacion+ "<br>")
        }else if(prenda[item]==2500){
            document.write("Precio: $"+prenda[item]+ "<br>")
        }else{
            document.write("Precio: $"+prenda[item]+ " - En esta prenda obtuviste $"+(2500-prenda[item])+" de descuento!<br>")
        }
    }
}
let precioacumulado=0
for(prenda in pedido){
    precioacumulado=pedido[prenda][1]+precioacumulado
}
document.write("El precio final del pedido es $"+precioacumulado + " y tu descuento fue de: $"+((cantidadPrendas*2500)-precioacumulado))

