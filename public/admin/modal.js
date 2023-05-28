
function modal_info(a,b, c, d, button = '') {
    
    let html = `<div id="modal_info" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="primary-header-modalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header modal-colored-header ${d}">
                    <h4 class="modal-title" id="primary-header-modalLabel">${a}</h4>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-hidden="true"></button>
                </div>
                <div class="modal-body">
                    <h6 class="text-secondary">${b}</h6>
                    <p class="text-secondary">${c}</p>
                </div>
                <div class="modal-footer">
                    ${button}
                    <button type="button" class="btn btn-light btn-sm" data-bs-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>`;

    $('#modal_info').modal('hide');
    $('#modal_info').remove();
    $(".content-page").append(html);
    $('#modal_info').modal('show');
}

function modal_create(title, html_form, url, color='primary', size='modal-lg', button = `<button type="submit" class="btn btn-${color} btn-sm"><i class="mdi mdi-cloud-upload"></i> Salvar</button>`, id_form = 'form_modal') {
    
    let html = `<div class="modal fade" id="modal_create" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog ${size} modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-${color} text-white">
                    <h4 class="modal-title" id="myLargeModalLabel">${title}</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
                </div>

                <form class="needs-validation" id="${id_form}" size="${size}" name="form_modal" method="POST" enctype="multipart/form-data" action="${url}" novalidate="">
                    <div class="modal-body" style="max-height: 900px; overflow-y: scroll;">${html_form}</div>
                    <div class="modal-footer">
                        ${button}
                        <button type="button" class="btn btn-light btn-sm" data-bs-dismiss="modal">Fechar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>`;

    $('#modal_create').modal('hide');
    $('#modal_create').remove();
    $(".content-page").append(html);
    $('#modal_create').modal('show');
}

function modal_iframe(a, url, button) {
    
    let html = `<div class="modal fade" id="modal_iframe" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document" style="max-width: 90%; max-height: 90%;">
            <div class="modal-content position-relative">
                <div class="position-absolute top-0 end-0 mt-2 me-2 z-index-1">
                    <button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body p-0">
                    <div class="rounded-top-lg py-3 ps-4 pe-6 bg-primary">
                        <h5 class="mb-1 text-light" id="modal_iframe_label">${a}</h5>
                    </div>
                    <div class="p-4 mb-2 pb-0 container_iframe">
                        <iframe class="responsive-iframe" name="iframe_modal" id="iframe_modal" src="${url}"></iframe>
                    </div>
                </div>
                
                <div class="modal-footer mt-2">
                    ${button}
                    <button class="btn btn-secondary btn-sm" type="button" data-bs-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>`;

    $('#modal_iframe').modal('hide')
    $('#modal_iframe').remove();
    $("#top").append(html);
    $('#modal_iframe').modal('show')
}

window.close_modal = function(id){
    $(id).modal('hide')
    $(id).remove();
};

function inject_css(a, b) {
    $("<style></style>").appendTo("head").html(a);
}

//modal info
$(document).on('click', 'a[modal-alert]', function(e){

    e.preventDefault()
    let button;
    let modal = $('a[modal-alert]').attr('modal-alert')
    let url = $(this).attr('href')
    modal = modal.split(",")

    if(url){
        button = `<a href='${url}'><button class="btn btn-primary submit-form-iframe btn-sm" type="button">Sim</button></a>`
    }

    modal_info(modal[0], '', modal[1], 'bg-primary', button)
})