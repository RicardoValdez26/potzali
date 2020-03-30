
	var piezas, total, precio;
		piezas = document.getElementById('Cantidad').value;
		total = (piezas * 13.00) + 1200;

		document.getElementById('Precio').innerHTML = "$" + total;
	document.getElementById('Cantidad').onclick = function(){
		piezas = document.getElementById('Cantidad').value;
			total = (piezas * 13.00) + 1200;
		document.getElementById('Precio').innerHTML = "$" + total;
	};
	

