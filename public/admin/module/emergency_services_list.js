$(document).on('click', '.print-patient-etiquette', function(e){
    e.preventDefault()

    modal_info('Sucesso', '', 'Imprimir ficha pacientes.', 'bg-primary', `
    
        <a class="btn btn-primary btn-sm" href="${$(this).attr('href')}" target="_blank"><i class="mdi mdi-exit-to-app me-1"></i>Paciente</a>
        <a class="btn btn-primary btn-sm" href="${$(this).attr('href-escort')}" target="_blank"><i class="mdi mdi-exit-to-app me-1"></i>Acompanhante</a>
    
    `)

})