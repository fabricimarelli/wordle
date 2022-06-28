window.onload=function(){

//Declaro la matriz de 6 filas, con 5 celdas en cada fila
    var color = [
        [1,2,0,0,1],
        [1,1,3,1,1],
        [1,3,1,3,1],
        [1,3,2,3,1],
        [1,1,2,0,1],
        [1,0,3,0,1],
    ]

    var letras = [
        [ , , , , ],
        [ , , , , ],
        [ , , , , ],
        [ , , , , ],
        [ , , , , ],
        [ , , , , ],
    ]
/*Crear una nueva matriz llamada “letras” que tenga la misma dimensión del tablero del juego, en donde en cada 
posición se debe guardar una letra o un string vacío. Luego se deberá crear una función llamada “inicio” que recorra 
dicha matriz y le asigne una función al evento onInput de input HTML del tablero, correspondiente a la posición de la 
matriz. La función debe obtener el valor del input y guardarlo en la matriz “letras” respetando la posición 
del input en el tablero.*/
    
    pintarTablero()
    inicio()
var input
    function inicio(){
        for(let fila = 0; fila < 6; fila++){
            for(let celda = 0; celda < 5; celda++){
                var input=document.getElementById('f'+fila+'c'+celda)
                input.oninput=function(event){
                    letras[fila][celda]=event.target.value;
                    console.log(letras[fila][celda])
                }
            }

        }

    }
    
    //Recorro la matriz con for anidado y coloreo los input (segun sea)
    function pintarTablero(){
        for(let fila = 0; fila < 6; fila++){
            for(let celda = 0; celda < 5; celda++){
                var input=document.getElementById('f'+fila+'c'+celda)
                //console.log(input)

                switch (color[fila][celda]) {
                    case 0:
                        input.classList.add('white')
                        break;
                    case 1:
                        input.classList.add('green')
                        break;
                    case 2:
                        input.classList.add('yellow')
                        break;
                    case 3:
                        input.classList.add('grey')
                        break;    
                    
                    default:
                        input.classList.add('white')
                    break;
                }
            }
        }
    }

}

