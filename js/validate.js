/*
Vallidação de formulário em JS exclusivamente para o projeto StormSecurity
14/02/2014 - Thiago Tito

www.thiagotito.com
contato@thiagotito.com
skype: thiagodash.tito
phone: 964366083
*/

function validaFF(){

//NOME
if( document.formFooter.nameFF.value=="" || document.formFooter.nameFF.value.length < 3 || document.formFooter.nameFF.value=="seu nome"){
	document.getElementById('nameFF').style.backgroundColor="#f00";
	document.formFooter.nameFF.focus();
	return false;
}else{
	document.getElementById('nameFF').style.backgroundColor="#e4f2fd";
}

//EMAIL
var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
if(!filter.test(document.getElementById("emailFF").value) || document.formFooter.emailFF.value=="seu email"){
	document.getElementById('emailFF').style.backgroundColor="#f00";
	document.formFooter.emailFF.focus();
	return false;
}else{
	document.getElementById('emailFF').style.backgroundColor="#e4f2fd";
}
//MENSAGEM
if( document.formFooter.messageFF.value=="" || document.formFooter.messageFF.value.length < 3 || document.formFooter.messageFF.value=="sua mensagem"){
	document.getElementById('messageFF').style.backgroundColor="#f00";
	document.formFooter.messageFF.focus();
	return false;
}else{
	document.getElementById('messageFF').style.backgroundColor="#e4f2fd";
}

return true;
}


/** Clear **/
//Campo Nome
function clearName(){
	nomeCampo = document.getElementById('nameFF').value;

	if (nomeCampo == "seu nome"){
		document.getElementById('nameFF').value = "";
	}else{
		document.getElementById('nameFF').value = nomeCampo;
	}
}
function fillName(){
	nomeCampo = document.getElementById('nameFF').value;

	if(nomeCampo == ""){
		document.getElementById('nameFF').value = "seu nome";
	}else if((nomeCampo != "seu nome") && (nomeCampo != "")){
		document.getElementById('nameFF').value = nomeCampo;
	}
}

//Campo E-mail
function clearEmail(){
	emailCampo = document.getElementById('emailFF').value;

	if (emailCampo == "seu email"){
		document.getElementById('emailFF').value = "";
	}else{
		document.getElementById('emailFF').value = emailCampo;
	}
}
function fillEmail(){
	emailCampo = document.getElementById('emailFF').value;

	if(emailCampo == ""){
		document.getElementById('emailFF').value = "seu email";
	}else if((emailCampo != "seu email") && (emailCampo != "")){
		document.getElementById('emailFF').value = emailCampo;
	}
}

//Campo Mensagem
function clearMessage(){
	mensagemCampo = document.getElementById('messageFF').value;

	if (mensagemCampo == "sua mensagem"){
		document.getElementById('messageFF').value = "";
	}else{
		document.getElementById('messageFF').value = mensagemCampo;
	}
}
function fillMessage(){
	mensagemCampo = document.getElementById('messageFF').value;

	if(mensagemCampo == ""){
		document.getElementById('messageFF').value = "sua mensagem";
	}else if((mensagemCampo != "sua mensagem") && (mensagemCampo != "")){
		document.getElementById('messageFF').value = mensagemCampo;
	}
}
//