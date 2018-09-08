

			//instanciando os pacientes da tabela
			var pacientes = document.querySelectorAll(".paciente");
			 
		//loop que percorre os pacientes da tabela e calcula o IMC	 
		for( var i =0; i <pacientes.length; i=i + 1){

			//variavel referente ao indice do paciente
			 var paciente = pacientes[i];


			//variaveis elementos TD
			var tdPeso = paciente.querySelector(".info-peso");
			var tdAltura = paciente.querySelector(".info-altura");
			var tdImc = paciente.querySelector(".info-imc")

			//variaveis dados da tabela
			var peso = tdPeso.textContent;
			var altura = tdAltura.textContent;
			
			//variaveis de validação
			var pesoEhValido = true;
			var alturaEhValido = true;

			//validação altura e peso
			if(peso >= 200 || peso <=0) {
				pesoEhValido = false;
				tdImc.textContent = "Peso inválido";
				paciente.classList.add('paciente-invalido');
				}

			if(altura >= 3.00 || altura <=0){
				alturaEhValido = false;
				tdImc.textContent = "Altura inválido";
				paciente.classList.add('paciente-invalido');
			}

			// calculo imc
			if(pesoEhValido && alturaEhValido){
			tdImc.textContent = calculaImc(peso, altura);
			}
		}
	

		function calculaImc(peso, altura){
			var imc = 0;
			imc = peso / (altura * altura);
			return imc.toFixed(2);
		}