var turno=1;

function crearTablero()
{
	var tabla = document.createElement('table');
	tabla.style.width="100px";
	tabla.style.height="100px";
	tabla.style.border="1px solid black"
	for(indice_fila=0;indice_fila<3; indice_fila++)
	{
		var obj_fila=document.createElement("tr");
		for(indice_c=0;indice_c<3; indice_c++){
			var obj_col=document.createElement("td");
			obj_col.onclick=function(){marcar(this);}
			obj_col.style.border="1px solid black"
			obj_fila.appendChild(obj_col);
		}
		tabla.appendChild(obj_fila);
	}
	//
	document.getElementById('contenedor').appendChild(tabla);
}

function marcar(obj_celda){

if(turno==1){
	obj_celda.style.backgroundColor="red";
	turno=2;
	}
else{
	obj_celda.style.backgroundColor="yellow";
	turno=1;
	}
}