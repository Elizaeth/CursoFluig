function displayFields(form,customHTML){
	
	customHTML.append('<script type="text/javascript">'+ '$(document).ready(function(){'); //carregar informações após o HTML carregar
	customHTML.append('console.log("USANDO CUSTOMHTML")'); // Acesso à console de depuração do navegador
	customHTML.append('});'+'</script>') //Função para carregar dados na tela  
	
	function api_usuarioCorrente (){
		return fluigAPI.getUserService().getCurrent();
	}
	
	log.info("###########" + api_usuarioCorrente());
	
	//coleta de dados
	var atual = getValue ("WKNumState");
	var user =api_usuarioCorrente().getFullName();
	var email =api_usuarioCorrente().getEmail();
	
	//Atividades
	var inicio = "4";
	var analisar_gestor = "22";
	var analisar_financ = "19";
	
	//Arrays
	var esconder =[];
	
	if(atual == inicio || atual == "0"){
		form.setValue ("solicitante", email)
	}
			
	for (var i=0; i<esconder.length; i++){
		form.setVisibleById(esconder[i], false);
			
	}
	
	
	
	
}