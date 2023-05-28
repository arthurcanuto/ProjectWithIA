let show = true

$(document).on('click', '.patient-discharge-histories', function(e) {
    e.preventDefault()
    show = true
    loading_html_modal($(this).attr('title'), $(this).attr('href'), $(this).attr('iframe-create'), $(this).attr('data-id'))
})

$(document).on('click', '#open-service-button', function(e){
    e.preventDefault()

    if(show == true){
        show = false
        $('#save-patient-discharge').removeClass('hide')
    }else{
        show = true
        $('#save-patient-discharge').addClass('hide')
    }
})

$(document).on('click', '#save-patient-discharge', function(e){
    e.preventDefault()

    let note = $('#note_open_service').val()
    let url = $('#open-service').attr('action')
    let id = $(this).attr('data-id')
    $('#note_open_service').removeClass('is-invalid')

    if(note == null || note == ''){
        setTimeout(function(){$('#note_open_service').addClass('is-invalid')}, 100)
        return 0
    }

    $(`#${id}`).remove()
    $('#modal_create').modal('hide');
    $('#modal_create').remove();
    modal_info('Sucesso', '', 'Ação realizada com sucesso', 'bg-primary')

    axios.post(url, {note}).then(function(res) {
        window.count_total_menu()
    });
})

function loading_html_modal(title, url, url_create, data_id) {
    
    let loading = `<div class="alert alert-primary mb-0 d-flex align-items-center" role="alert"><div class="spinner-border text-primary me-2" style="height: 20px; width: 20px;" role="status"></div><strong class="my-auto">Carregando...</strong></div>`

    modal_create(title, loading, url_create, 'primary', 'modal-xl', `<button type="button" class="btn btn-primary btn-sm hide" data-id="${data_id}" id="save-patient-discharge"><i class="mdi mdi-cloud-upload"></i> Salvar</button>`, 'open-service')

    axios.get(url).then(function (res) {
       $('#open-service > div.modal-body').html(res.data)
    })
}