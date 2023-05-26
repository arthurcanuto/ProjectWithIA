$(document).on('click', '.hospitalization-approve-reprove', function(e){
    e.preventDefault();
    let title = $(this).attr('title')
    let color = $(this).attr('color')

    let del = $(this).attr('data-id-delete');

    modal_info(title, '', `Realmente deseja ${title.toLowerCase()} o registro de codigo: <strong>${$(this).attr('data-id')}</strong>`, `bg-${color}`, `<button type="button" class="btn btn-${color} btn-sm action-hospitalization" data-id-delete="${del}" id="${$(this).attr('data-id')}" url="${$(this).attr('href')}">${title}</button>`)
})

$(document).on('click', ".action-hospitalization", function(e) {
    e.preventDefault()
    let del = $(this).attr('data-id-delete')
    $(`#${del}`).addClass('hide')

    $('#modal_info').modal('hide')
    $('#modal_info').remove();

    axios.post($(this).attr('url')).then(function(res) {
        if(res.data == "success"){
            $(`#${del}`).remove()
            modal_info("SUCESSO", '', `Registro deletado com sucesso.`, 'bg-primary')
            window.count_total_menu()
        }else{
            $(`#${del}`).removeClass('hide')
            modal_info("ERROR", '', `Não foi possível deletar o registro.`, 'bg-warning')
        }
    })
});