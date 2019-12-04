function validateForm(form){
	
	///coleta de dados
	var atual = getValue("WKNumState");
	
	var inicio = "4";
	var analisar_gestor = "5";
	var analisar_financ = "9";
	
	//Arrays
	 var valida = [];
	 
	 if(atual == inicio || atual =="0"){
		 valida.push("dt_solicitacao");
	 }
	 
	 if(atual == inicio || atual =="0"){
		 valida.push("nome");
	 }
	 
	 	
	for (var i=0; i<valida.length; i++){
		if(form.getValue(valida[i])== null || form.getValue(valida[i]).trim()== ""){
			throw("O campo" +valida[i]+" precisa ser preenchido.");
		}
	}
}		