function enableFields(form){
	
	//Coleta dados
	 var atual = getValue ("WKNumState")
	 
	 var inicio = "4";
	 var analisa_gestor = "5";
	 var analisa_financ = "9";
	 
	 //Arrays
	 var habilita = [];
	 
	 if (atual == inicio || atual == "0"){
		 habilita.push("solicitante")
		 habilita.push("desc_financ")
		 habilita.push("aprov_financ")
	 }
	 
	 if (atual == analisa_gestor || atual == "0"){
		 habilita.push("desc_financ")
		 habilita.push("aprov_financ")
		 habilita.push("solicitante")
		  
	 }
	 
	 if (atual == analisa_financ)
		 habilita.push("aprov_gestor")
		 habilita.push("desc_gestor")
		 habilita.push("solicitante")
		
	 	 
	 for (var i=0; i<habilita.length; i++){
		 form.setEnabled(habilita[i], false);
	 }
	 
}