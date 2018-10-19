var pacientes = $('.paciente');

var tabela = $('#tabela-pacientes')[0];

$(tabela).dblclick( function(event){
    $(event.target.parentNode).addClass('fadeOut');
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 1000);
});