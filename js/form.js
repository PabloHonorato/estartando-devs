//variações
var botaoAdicionar = document.querySelector('#adicionar-paciente');
		
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
    
    var form = document.querySelector('#form-adiciona');
    
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    var tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTr);

    form.reset();

    var mensagensErro = document.querySelector('#mensagens-erro');
    mensagensErro.innerHTML = "";

});
//função que exibe mensagens de erro
function exibeMensagensDeErro(erros){
    var ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement ('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}
//função do formulário
function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };

    return paciente;
}
//função montaTr
function montaTr(paciente){
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));
   
    return pacienteTr;
}
//função montaTd
function montaTd(dado, classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}
// função validação do paciente
function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome == 0){
        erros.push('campo nome não pode ser em branco');
    }

   if (!ValidaPeso(paciente.peso)){
       erros.push('Peso inválido')
      
   }
   if(!ValidaAltura(paciente.altura)){
        erros.push('Altura inválido')
   }

   if(paciente.peso == 0){
    erros.push('campo gordura não pode ser em branco');
   }

   if(paciente.altura == 0){
    erros.push('campo altura não pode ser em branco');
   } 

   if(paciente.gordura == 0){
    erros.push('campo gordura não pode ser em branco');
   }
    return erros;
}