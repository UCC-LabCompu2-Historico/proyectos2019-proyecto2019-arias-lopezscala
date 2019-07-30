/* LOPEZ SCALA Facundo, ARIAS Lucas - Laboratorio de computacion 2 */

//declaro variables
var posX1=45, posX2=45, ctx, auto1, auto2, precioC1, precioM1, precioT1, precio1, precioC2, precioM2, precioT2, precio2;
let a1, a2, vf1, vf2, t1, t2, velf1, velf2;

//Se declaran las imagenes del fondo a utilizar
pasto1 = new Image;
pasto1.src = "imagenes/pasto.jpg";
meta = new Image;
meta.src = "imagenes/meta.jpg";
pasto3 = new Image;
pasto3.src = "imagenes/pasto.jpg";
centro = new Image;
centro.src = "imagenes/centro.jpg";
lineainf = new Image;
lineainf.src = "imagenes/lineainf.jpg";
lineasup = new Image;
lineasup.src = "imagenes/lineasup.jpg";
marco = new Image;
marco.src = "imagenes/marcoo.png";
pl1wins= new Image;
pl1wins.src= "imagenes/pl1wins.png";
pl2wins= new Image;
pl2wins.src= "imagenes/pl2wins.png";

/**
 * Funcion que calcula los valores de aceleracion, tiempo, precio y velocidad final del auto 1. Tambien selecciona
 * que el auto mostrado en pantalla coincide con la carroceria elegida. Alerta cuando superamos el precio limite.
 * @function calcula1
 * @param carroc1
 * @param motor1
 * @param transmision1
 * @return 
 */
    function calcula1() {
    var carroc1 = document.getElementById("carroceria1").value;
    var motor1 = document.getElementById("motor1").value;
    var transmision1 = document.getElementById("transmision1").value;
    if (carroc1 == 0 || motor1 == 0 || transmision1 == 0) {
        alert("Recuerde que se deben seleccionar los 3 componentes. Vuelva a cargar los datos");
        location.reload();
    } else{
        var carroc1 = document.getElementById("carroceria1").value;
        var motor1 = document.getElementById("motor1").value;
        var transmision1 = document.getElementById("transmision1").value;
        precioC1 = 10000000 / carroc1;
        precioM1 = motor1 / 0.03;
        precioT1 = transmision1 * 10000;
        precio1 = precioC1 + precioM1 + precioT1;
        if (precio1 > 18000) {
            alert("Recuerde que el valor total del auto no puede superar los $18000, seleccione componentes mas baratos");
        } else {
            a1 = (9.8 * ((motor1 * 7) / carroc1 * 0.8)) * transmision1;
            t1 = Math.sqrt((2 * 400) / a1);
            vf1 = a1 * t1;
            velf1 = vf1 * 3.6;
            alert("La aceleracion del auto 1 es: " + a1.toFixed(2) + " [m/s^2], llega a la meta a " + velf1.toFixed(2) + " [km/h] y tarda " + t1.toFixed(2) + " segundos. El precio del auto es de: $" + precio1.toFixed());
        }
        if (carroc1 == 1000) {
            auto1 = new Image;
            auto1.src = "imagenes/formula_1.png";
        }
        if (carroc1 == 1200) {
            auto1 = new Image;
            auto1.src = "imagenes/bugatti.png";
        }
        if (carroc1 == 1400) {
            auto1 = new Image;
            auto1.src = "imagenes/porsche.png";
        }
        if (carroc1 == 1600) {
            auto1 = new Image;
            auto1.src = "imagenes/masseratti.png";
        }
        if (carroc1 == 1800) {
            auto1 = new Image;
            auto1.src = "imagenes/rally.png";
        }
        if (carroc1 == 2000) {
            auto1 = new Image;
            auto1.src = "imagenes/cabriolet.png";
        }
        if (carroc1 == 2200) {
            auto1 = new Image;
            auto1.src = "imagenes/muscle.png";
        }
        if (carroc1 == 2400) {
            auto1 = new Image;
            auto1.src = "imagenes/pontiac.png";
        }
        if (carroc1 == 2600) {
            auto1 = new Image;
            auto1.src = "imagenes/x3.png";
        }
        if (carroc1 == 2800) {
            auto1 = new Image;
            auto1.src = "imagenes/hummer.png";
        }
        if (carroc1 == 3000) {
            auto1 = new Image;
            auto1.src = "imagenes/flete.png";
        }

    }
}
/**
 * Funcion que calcula los valores de aceleracion, tiempo, precio y velocidad final del auto 2. Tambien selecciona
 * que el auto mostrado en pantalla coincide con la carroceria elegida. Alerta cuando superamos el precio limite
 * @function calcula2
 * @param carroc2
 * @param motor2
 * @param transmision2
 * @return 
 */
    function calcula2() {
    var carroc2 = document.getElementById("carroceria2").value;
    var motor2 = document.getElementById("motor2").value;
    var transmision2 = document.getElementById("transmision2").value;
    if (carroc2 == 0 || motor2 == 0 || transmision2 == 0) {
        alert("Recuerde que se deben seleccionar los 3 componentes. Vuelva a cargar los datos");
        location.reload();
    } else {
        var carroc2 = document.getElementById("carroceria2").value;
        var motor2 = document.getElementById("motor2").value;
        var transmision2 = document.getElementById("transmision2").value;
        precioC2 = 10000000 / carroc2;
        precioM2 = motor2 / 0.03;
        precioT2 = transmision2 * 10000;
        precio2 = precioC2 + precioM2 + precioT2;
        if (precio2 > 18000) {
            alert("Recuerde que el valor total del auto no puede superar los $18000, seleccione componentes mas baratos");
        } else {
            a2 = (9.8 * ((motor2 * 7) / carroc2 * 0.8)) * transmision2;
            t2 = Math.sqrt((2 * 400) / a2);
            vf2 = a2 * t2;
            velf2 = vf2 * 3.6;
            alert("La aceleracion del auto 2 es: " + a2.toFixed(2) + " [m/s^2], llega a la meta a " + velf2.toFixed(2) + " [km/h] y tarda " + t2.toFixed(2) + " segundos. El precio del auto es de: $" + precio2.toFixed());
        }

        if (carroc2 == 1000) {
            auto2 = new Image;
            auto2.src = "imagenes/formula_1.png";
        }
        if (carroc2 == 1200) {
            auto2 = new Image;
            auto2.src = "imagenes/bugatti.png";
        }
        if (carroc2 == 1400) {
            auto2 = new Image;
            auto2.src = "imagenes/porsche.png";
        }
        if (carroc2 == 1600) {
            auto2 = new Image;
            auto2.src = "imagenes/masseratti.png";
        }
        if (carroc2 == 1800) {
            auto2 = new Image;
            auto2.src = "imagenes/rally.png";
        }
        if (carroc2 == 2000) {
            auto2 = new Image;
            auto2.src = "imagenes/cabriolet.png";
        }
        if (carroc2 == 2200) {
            auto2 = new Image;
            auto2.src = "imagenes/muscle.png";
        }
        if (carroc2 == 2400) {
            auto2 = new Image;
            auto2.src = "imagenes/pontiac.png";
        }
        if (carroc2 == 2600) {
            auto2 = new Image;
            auto2.src = "imagenes/x3.png";
        }
        if (carroc2 == 2800) {
            auto2 = new Image;
            auto2.src = "imagenes/hummer.png";
        }
        if (carroc2 == 3000) {
            auto2 = new Image;
            auto2.src = "imagenes/flete.png";
        }
    }
}
/**
 * Funcion que selecciona que funcion dibujadora del auto llama en base a su acelereacion, para que en el canvas
 * llegue primero el auto con mas aceleracion, o lleguen juntos en caso de empate
 * @function selecciona
 * @param a1{number}
 * @param a2{number}
 * @return
 */
    function selecciona(){

        if(a1>=a2){ 
            dibujaauto1();
            dibujaauto2();

        }
        if(a1<=a2){
            dibujaauto1a();
            dibujaauto2a();
        }


}

/**
 * Funcion animadora
 * @function anim
 * @param
 * @return
 */
    function anim() {
    ctx.clearRect(0,0, 1000, 500);
        selecciona();
        dibujafondo();
        setTimeout(anim, 20);
    }

/**
 * Funcion que dibuja el auto 1 en caso de que tenga mas aceleracion
 * @function dibujaauto1
 * @param
 * @return
 */
    function dibujaauto1() {
            ctx.drawImage(auto1, posX1, 150, 160, 60);
            if (posX1 >= 750)
                posX1 = 750;
            else
                posX1 += 3;
     }

/**
 * Funcion que dibuja el auto 2 en caso de que tenga menos aceleracion
 * @function dibujaauto2
 * @param
 * @return
 */
    function dibujaauto2(){
            ctx.drawImage(auto2, posX2, 275, 160, 60);
            if (posX2 >= 750)
                posX2 = 750;
            else
                posX2 += 2;
     }

/**
 * Funcion que dibuja el auto 1 en caso de que tenga menos aceleracion
 * @function dibujaauto1a
 * @param
 * @return
 */
    function dibujaauto1a() {
        ctx.drawImage(auto1, posX1, 150, 160, 60);
        if (posX1 >= 750)
            posX1 = 750;
        else
            posX1 += 2;
        }

/**
 * Funcion que dibuja el auto 2 en caso de que tenga mas aceleracion
 * @function dibujaauto2a
 * @param
 * @return
 */
    function dibujaauto2a(){
        ctx.drawImage(auto2, posX2, 275, 160, 60);
        if (posX2 >= 750)
            posX2 = 750;
        else
            posX2 += 3;
        }





/**
 * Funcion que dibuja el cesped en el fondo
 * @function dibujafondo
 * @para
 * @return
 */
    function dibujafondo(){
        ctx.drawImage(pasto1, 5, 5, 1000, 110);
        ctx.drawImage(meta, 910, 115, 60, 255);
        ctx.drawImage(centro, 5, 225, 995, 30);
        ctx.drawImage(pasto3, 5, 370, 998, 100);
        ctx.drawImage(lineasup, 0, 100, 995, 15);
        ctx.drawImage(lineainf, 0, 370, 995, 15);
        ctx.drawImage(marco, 0, 0, 1000, 500);
        if(a1>a2) ctx.drawImage(pl1wins, 250, 15, 500, 200);
        if(a1<a2) ctx.drawImage(pl2wins, 250, 10, 500, 200);
        }

    window.onload = function() {
        ctx = document.getElementById("canvas").getContext("2d");
        anim();
        };



