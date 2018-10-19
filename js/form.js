// Variavel do botão
var botaoAdicionar = $('#adicionar-paciente')[0];

// Determinando função do botão
$(botaoAdicionar).click(function (event) {
    event.preventDefault();

    // Coletando form para pegar informações dele
    var form = $('#form-adiciona')[0];
    
    // Determinando variaveis
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibirMensagensDeErro(erros);
        return;
    }

    //Pegando tabela
    var tabela = $('#tabela-pacientes');

    // Criando tr
    $(tabela).append(pacienteTr);

    form.reset();

    var mensagensErro = $("#mensagens-erro")[0];
    mensagensErro.innerHTML = "";
});

function exibirMensagensDeErro(erros) {
    var ul = $("#mensagens-erro")[0];
    ul.innerHTML = "";
    erros.forEach(function(erros){
        var li = document.createElement("li");
        $(li).text(erros);
        $(ul).append(li);
    });
}

//pegando valores do formulario
function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };

    return paciente;

}

// Montando Tr
function montaTr(paciente) {
    var pacienteTr = document.createElement('tr');
    $(pacienteTr).addClass("paciente");

    $(pacienteTr).append(montaTd(paciente.nome, 'info-nome'));
    $(pacienteTr).append(montaTd(paciente.peso, 'info-peso'));
    $(pacienteTr).append(montaTd(paciente.altura, 'info-altura'));
    $(pacienteTr).append(montaTd(paciente.gordura, 'info-gordura'));
    $(pacienteTr).append(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

// Montando Td
function montaTd(dado, classe) {
    var td = document.createElement('td');
    $(td).text(dado);
    $(td).addClass(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if(paciente.nome == 0) {
        erros.push("Campo nome não pode ser em branco")
    }
    if (!ValidaPeso(paciente.peso)) {
        erros.push("Peso Inválido");
    }
    if (!ValidaAltura(paciente.altura)){
        erros.push("Altura Inválida")
    }
    if(paciente.peso == 0){
        erros.push("Campo peso nao pode ser em branco")
    }
    if(paciente.altura == 0){
        erros.push("Campo altura nao pode ser em branco")
    }
    if(paciente.gordura == 0) {
        erros.push("Campo gordura não pode ser em branco")
    }
    return erros;
}