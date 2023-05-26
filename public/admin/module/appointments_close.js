$(document).on('click', '.appointments-close', function(e){
    e.preventDefault()
    let title = $(this).attr('title')
    let id = $(this).attr('data-id')

    modal_create(title, `
        <textarea data-toggle="maxlength" class="form-control" maxlength="3000" rows="3" placeholder="Motivo encerramento" id="closing_attendance_note" name="closing_attendance_note"></textarea>
        
        `, '', 'danger', 'modal-lg', `<button type="button" url="${$(this).attr('href')}" data-id="${id}" class="btn btn-danger btn-sm" id="save-closing-attendance"><i class="mdi mdi-cloud-upload"></i> Salvar</button>
    `)
})

$(document).on('click', '#save-closing-attendance', function(e){

    e.preventDefault()
    let note = $('#closing_attendance_note').val()
    let url = $(this).attr('url')
    let id = $(this).attr('data-id')

    if(note == null || note == ''){
        $('#closing_attendance_note').addClass('is-invalid')
        return 0;
    }

    $(`#${id}`).remove()
    $('#modal_create').modal('hide');
    $('#modal_create').remove();
    modal_info('Sucesso', '', 'Ação realizada com sucesso', 'bg-primary')
    
    axios.post(url, {note}).then(function (res) {})
})

$(document).on('click', '.appointments-open', function(e){
    e.preventDefault()

    let id = $(this).attr('data-id')

    modal_info('ABRIR FICHA', '', `Reabrir ficha paciente do paciente <strong>${$(this).attr('name')}</strong>.`, 'bg-primary', `
        <button class="btn btn-primary btn-sm open-services" url="${$(this).attr('href')}" data-id="${id}" id="save-open-attendance"><i class="mdi mdi-exit-to-app me-1"></i>Abrir Atendimento</a>
    `)

})

$(document).on('click', '#save-open-attendance', function(e){

    e.preventDefault()
    let url = $(this).attr('url')
    let id = $(this).attr('data-id')

    $(`#${id}`).remove()
    $('#modal_info').modal('hide');
    $('#modal_info').remove();
    modal_info('Sucesso', '', 'Ação realizada com sucesso', 'bg-primary')

    axios.get(url).then(function (res) {
        window.count_total_menu()
    })
})

$(document).on('click', '.screenings-re-triage', function(e){
    e.preventDefault()

    let id = $(this).attr('data-id')

    modal_info($(this).attr('title'), '', `Fazer uma nova triagem para <strong>${$(this).attr('name')}</strong>.`, 'bg-primary', `
        <button class="btn btn-primary btn-sm open-services" url="${$(this).attr('href')}" data-id="${id}" id="save-open-attendance"><i class="mdi mdi-exit-to-app me-1"></i>Reclassificar</a>
    `)
})