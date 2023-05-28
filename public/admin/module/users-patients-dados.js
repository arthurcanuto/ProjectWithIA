function users_modal_patients(data_html, title) {

    let html = `<div class="modal fade" id="dados-users-patients-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h4 class="modal-title" id="myLargeModalLabel">${title}</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
                </div>
                <div class="modal-body">
                    ${data_html}
                </div>
            </div>
        </div>
    </div>`

    $('#dados-users-patients-lg').modal('hide');
    $('#dados-users-patients-lg').remove();
    $(".content-page").append(html);
    $('#dados-users-patients-lg').modal('show');
}

$(document).on('click', '.users-modal-patients', function(e){
    e.preventDefault()

    let title = $(this).attr('name')

    axios.get($(this).attr('href')).then(function(res) {
        users_modal_patients(res.data, title);
    })
    .catch(function(error) {
        console.log(error);
    });
})