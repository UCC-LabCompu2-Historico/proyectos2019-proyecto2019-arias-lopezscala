
var canvas, ctx, x, y;

canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

x = 0;
y = 0;
w = 0;
h = 0;

setInterval(function() {

    ctx.clearRect(0, 0, 1000, 250);

    x = x >= 1000 ? 0 : x + 1;
    y = 125;

    ctx.fillRect(x, y, 100, 75);
}, 100 / 24);

setInterval(function() {

    ctx.clearRect(0, 250, 1000, 500);

    w = w >= 1000 ? 0 : w + 1;
    h = 375;

    ctx.fillRect(w, h, 100, 75);
}, 100 / 24);


/*
la idea de esta parte de la animacion es importar las fotos, tuvimos problemas importando las fotos y los datos, por lo que simulamos como se veria la carrera con dos rectangulos
negros a simple modo ilustrativo.
auto=new Image();
auto.src='formula_1.png';
                function dibujarauto()
                {
                  var canvas = document.getElementById("canvas");
                  var ctx = canvas.getContext("2d");
                  ctx.drawImage(auto,230,30,70,130);

                }

        function anim(){ //Esta es la misma funcion pero solo con el formula 1, la idea es que se pueda seleccionar la foto en base al auto elegido antes por el jugador
                    //tambien la idea es que las animaciones dependan de la aceleracion calculada antes, no sabemos como traer esos datos
          ctx.clearRect(0, 0, 600, 200);
          dibujarauto();
          if(pos_x  >170) {
            pos_x = 170;
            dibujarauto();
          setTimeout(anim, 10);
        }

*/