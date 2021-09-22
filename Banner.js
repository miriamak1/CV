// Obtener el botón de la página
var leftBtn = document.getElementById('leftBtn');
var rightBtn = document.getElementById('rightBtn');
// Monte el evento de clic
leftBtn.onclick = function(){
	alert("1");
}
rightBtn.onclick = function(){
	alert("1");
}
var banner = document.getElementById('banner1');
var imgArr = ['Multimedia/F3.jpg','Multimedia/Feyes.jpg','Multimedia/SKZ.jpg','Multimedia/SKZ2.jpg']
count = 0;
function change(count){
	banner.style.backgroundImage=`url(${imgArr[count]})`;
}
// Controla la imagen para deslizar a la izquierda a la página anterior
leftBtn.onclick = function(){
	count --;
	// Si el recuento es el primero, salta al último
	if(count == -1){
		count = imgArr.length-1;
	}
	change(count);
}
// Controla la imagen para deslizarla directamente a la página siguiente
rightBtn.onclick = function(){
	count ++;
	// Si la imagen es la última, empieza desde el principio
	if(count == imgArr.length){
		count = 0;
	}
	change(count);
}
