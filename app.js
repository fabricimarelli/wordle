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
    
    pintarTablero()
    
    //Recorro la matriz con for anidado y coloreo los input (segun sea)
    function pintarTablero(){
        for(let fila = 0; fila < 6; fila++){
            for(let celda = 0; celda < 5; celda++){
                var input=document.getElementById('f'+fila+'c'+celda)
                console.log(input)

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

