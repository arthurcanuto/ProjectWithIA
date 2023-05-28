function users_modal_files(data_html) {
    
    let html = `<div class="modal fade" id="emergency-services-files-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h4 class="modal-title" id="myLargeModalLabel">Inserir Arquivo</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
                </div>
                <div class="modal-body" style="height: 260px; max-height: 600px;">
                    ${data_html}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light btn-sm" data-bs-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>`

    $('#emergency-services-files-lg').modal('hide');
    $('#emergency-services-files-lg').remove();
    $(".content-page").append(html);
    $('#emergency-services-files-lg').modal('show');
}

function reload_files() {
    $('div[data-iframe-files]').each(function( index ) {
        if($(this).attr('data-iframe-files')){
            let a = $(this);
            reload_files_html($(this).attr('data-iframe-files'), a)
        }
    });
}

function reload_files_html(url, a) {
    axios.get(url).then(function (res) {
        a.html(res.data);
    })
}

//modal new file
$(document).on('click', '.modal-new-file', function (e) {
    e.preventDefault()
    users_modal_files(`<iframe src="${$(this).attr('url')}" style="width: 100%; height: 100%;"></iframe>`)
})

$(document).on('hide.bs.modal', '#emergency-services-files-lg', function (e) {
    reload_files()
});
  