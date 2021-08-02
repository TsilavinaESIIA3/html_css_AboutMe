function take_id(element){
	return document.getElementById(element);
}
window.addEventListener('load',function(a){
	var case1 = take_id("case1");
	case1.addEventListener('mousemove',function (b){
		if(!take_id("division1")){
			var div1 = document.createElement('div');
			case1.appendChild(div1);
			div1.id = "division1";
			var tableP = document.createElement('table');
			div1.appendChild(tableP);
			tableP.id = "tabP";
				var tr1 = document.createElement('tr');
				tableP.appendChild(tr1);
				var td11 = document.createElement('td');
				tr1.appendChild(td11);
				var labNomP = document.createElement('p');
				td11.appendChild(labNomP);
				labNomP.setAttribute('class','labbelInfo');
				labNomP.innerHTML = "Nom du père";

						var td12 = document.createElement('td');
						tr1.appendChild(td12);
						var nomP = document.createElement('p');
						td12.appendChild(nomP);
						nomP.innerHTML = "RAKOTOMANGA Heritiana A.";
				
				var tr2 = document.createElement('tr');
				tableP.appendChild(tr2);
				var td21 = document.createElement('td');
				tr2.appendChild(td21);
				var labproffP = document.createElement('p');
				td21.appendChild(labproffP);
				labproffP.setAttribute('class','labbelInfo');
				labproffP.innerHTML = "Profession:";
					
						var td22 = document.createElement('td');
						tr2.appendChild(td22);
						var proffP = document.createElement('p');
						td22.appendChild(proffP);
						proffP.innerHTML = "Chauffeur à l'ONN";
				
				var tr3 = document.createElement('tr');
				tableP.appendChild(tr3);
				var td31 = document.createElement('td');
				tr3.appendChild(td31);
				var labnomM = document.createElement('p');
				td31.appendChild(labnomM);
				labnomM.setAttribute('class','labbelInfo');
				labnomM.innerHTML = "Nom de la mère:";
					
						var td32 = document.createElement('td');
						tr3.appendChild(td32);
						var nomM = document.createElement('p');
						td32.appendChild(nomM);
						nomM.innerHTML = "RAMANGASON Vazoly H. H.";
						
				var tr4 = document.createElement('tr');
				tableP.appendChild(tr4);
				var td41 = document.createElement('td');
				tr4.appendChild(td41);
				var labproffM = document.createElement('p');
				td41.appendChild(labproffM);
				labproffM.setAttribute('class','labbelInfo');
				labproffM.innerHTML = "Profession:";
					
						var td42 = document.createElement('td');
						tr4.appendChild(td42);
						var proffM = document.createElement('p');
						td42.appendChild(proffM);
						proffM.innerHTML = "Couturière";
		}
		
	});
	case1.addEventListener('mouseout',function (b){
		var div1 = take_id("division1");
		if(div1){
			case1.removeChild(div1);
		}
	});
	var case2 = take_id("case2");
	case2.addEventListener('mousemove',function (b){
		if(!take_id("division2")){
			var div2 = document.createElement('div');
			case2.appendChild(div2);
			div2.id = "division2";
			var tableE = document.createElement('table');
			div2.appendChild(tableE);
			tableE.id = "tabE";
				var tr1 = document.createElement('tr');
				tableE.appendChild(tr1);
				var td11 = document.createElement('td');
				tr1.appendChild(td11);
				var labNomP = document.createElement('p');
				td11.appendChild(labNomP);
				labNomP.setAttribute('class','labbelInfo');
				labNomP.innerHTML = "Primaire:";

						var td12 = document.createElement('td');
						tr1.appendChild(td12);
						var nomP = document.createElement('p');
						td12.appendChild(nomP);
						nomP.innerHTML = "Ecole JOUJOU Manakambahiny";
				
				var tr2 = document.createElement('tr');
				tableE.appendChild(tr2);
				var td21 = document.createElement('td');
				tr2.appendChild(td21);
				var labproffP = document.createElement('p');
				td21.appendChild(labproffP);
				labproffP.setAttribute('class','labbelInfo');
				labproffP.innerHTML = "Collège(6ème-4ème):";
					
						var td22 = document.createElement('td');
						tr2.appendChild(td22);
						var proffP = document.createElement('p');
						td22.appendChild(proffP);
						proffP.innerHTML = "Collège Sainte Chantale Soanierana";
				
				var tr3 = document.createElement('tr');
				tableE.appendChild(tr3);
				var td31 = document.createElement('td');
				tr3.appendChild(td31);
				var labnomM = document.createElement('p');
				td31.appendChild(labnomM);
				labnomM.setAttribute('class','labbelInfo');
				labnomM.innerHTML = "Collège(3ème):";
					
						var td32 = document.createElement('td');
						tr3.appendChild(td32);
						var nomM = document.createElement('p');
						td32.appendChild(nomM);
						nomM.innerHTML = "Collège Masina Maria Mpanampy Soanierana";
						
				var tr4 = document.createElement('tr');
				tableE.appendChild(tr4);
				var td41 = document.createElement('td');
				tr4.appendChild(td41);
				var labLy = document.createElement('p');
				td41.appendChild(labLy);
				labLy.setAttribute('class','labbelInfo');
				labLy.innerHTML = "Lycée:";
					
						var td42 = document.createElement('td');
						tr4.appendChild(td42);
						var ly = document.createElement('p');
						td42.appendChild(ly);
						ly.innerHTML = "Lycée Jules Ferry Faravohitra";
		}
		
	});
	case2.addEventListener('mouseout',function (b){
		var div2 = take_id("division2");
		if(div2){
			case2.removeChild(div2);
		}
	});
	var case3 = take_id("case3");
	case3.addEventListener('mousemove',function (b){
		if(!take_id("division3")){
			var div3 = document.createElement('div');
			case3.appendChild(div3);
			div3.id = "division3";
			var tableA = document.createElement('table');
			div3.appendChild(tableA);
			tableA.id = "tabE";
				var tr1 = document.createElement('tr');
				tableA.appendChild(tr1);
				var td11 = document.createElement('td');
				tr1.appendChild(td11);
				var labNomP = document.createElement('p');
				td11.appendChild(labNomP);
				labNomP.setAttribute('class','labbelInfo');
				labNomP.innerHTML = "Chorale:";

						var td12 = document.createElement('td');
						tr1.appendChild(td12);
						var nomP = document.createElement('p');
						td12.appendChild(nomP);
						nomP.innerHTML = "Tsantan'ny Fitiavana";
				
				var tr2 = document.createElement('tr');
				tableA.appendChild(tr2);
				var td21 = document.createElement('td');
				tr2.appendChild(td21);
				var labproffP = document.createElement('p');
				td21.appendChild(labproffP);
				labproffP.setAttribute('class','labbelInfo');
				labproffP.innerHTML = "Lead vocal:";
					
						var td22 = document.createElement('td');
						tr2.appendChild(td22);
						var proffP = document.createElement('p');
						td22.appendChild(proffP);
						proffP.innerHTML = "FJKM Isotry Fitiavana";

		}
		
	});
	case3.addEventListener('mouseout',function (b){
		var div3 = take_id("division3");
		if(div3){
			case3.removeChild(div3);
		}
	});
} );