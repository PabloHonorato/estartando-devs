			//instanciando os pacientes da tabela
			var pacientes = $(".paciente");
			 
		//loop que percorre os pacientes da tabela e calcula o IMC	 
		for( var i =0; i <pacientes.length; i=i + 1){

			//variavel referente ao indice do paciente
			 var paciente = pacientes[i];


			//variaveis elementos TD
			var tdPeso = $(".info-peso")[i];
			var tdAltura = $(".info-altura")[i];
			var tdImc = $(".info-imc")[i];

			//variaveis dados da tabela
			var peso = tdPeso.textContent;
			var altura = tdAltura.textContent;
			
			//variaveis de validação
			var pesoEhValido = ValidaPeso(peso);
			var alturaEhValido = ValidaAltura(altura);

			//validação altura e peso
			if(!pesoEhValido) {
				pesoEhValido = false;
				$(tdImc).text ("Peso inválido");
				$(paciente).addClass('paciente-invalido');
				}

			if(!alturaEhValido){
				alturaEhValido = false;
				$(tdImc).text("Altura inválido");
				$(paciente).addClass('paciente-invalido');
			}

			// calculo imc
			if(pesoEhValido && alturaEhValido){
			$(tdImc).text(calculaImc(peso, altura));
			}

		}
		function ValidaPeso(peso){
			if (peso <= 200 && peso >= 0) {
				return true;
			}else {
				return false;
			}
		}
		function ValidaAltura(altura){
			if(altura <= 3.00 && altura >= 0 ){
				return true;
			}else{
				return false;
			}
		}

		function calculaImc(peso, altura){
			var imc = 0;
			imc = peso / (altura * altura);
			return imc.toFixed(2);
		}