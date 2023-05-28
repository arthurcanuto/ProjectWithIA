var available = false;

//users query - start 
$(".query_users_patient").on('click', function(e){

    axios.post($(this).attr('url'), {
        user_letter:$('#user_letter').val(),
        user_name:$('#user_name').val(),
        user_cpf_cnpj:$('#user_cpf_cnpj').val(),
        user_cns:$('#user_cns').val(),
        user_mother:$('#user_mother').val(),
        user_date_birth:$('#user_date_birth').val(),
        active_attendance:'y',
    })
    .then(function(res) {
        $(`#IdUsers`).html(res.data);
        enable_edit();
        users_atual_reload($(`#IdUsers`).val());
    })
});
//users query - end

function enable_edit() {

    if($('#IdUsers').val()){
        $('.edit-patient-users').prop("disabled", false)
    }else{
        $('.edit-patient-users').prop("disabled", true)
    }
}

function users_atual_reload(id) {
    let url = $('#IdUsers').attr('url-query');
    $('#allergies-diseases-card').addClass('hide')
    $('#users-allergies-diseases').removeAttr('data-iframe')

    if (url && id) {
        axios.post(url, { id: id, active_attendance: 'y' }).then(function(res) {
            res = res.data;
            color_users_data(res[0]);
        })
        .catch(function(error) {
            console.log(error);
        });
    } else {
        color_users_data();
    }
}

window.onload = function() {

    if($('#IdEmergencyServices').val()){
        reload_files()
    }

    if($('#IdUsers').val()){
        users_atual_reload($('#IdUsers').val())
    }
}

function color_users_data(a) {
 
    let html = null;

    if(a['route'] != undefined){
        $('#allergies-diseases-card').removeClass('hide')
        $('#users-allergies-diseases').attr('data-iframe', a['route'].list)
        $('#users-allergies-diseases-button').attr('iframe-form', a['route'].form)
        $('#users-allergies-diseases-button').attr('iframe-create', a['route'].create)

        window.reload_iframe()
    }

    if(a){
        html = `
        <div class="card border-${use_weight_color(a)} border">
            <div class="card-body">
                <h5 class="card-title text-${use_weight_color(a)}">${not_null(a['name'], ' • ')} ${not_null(a['cpf_cnpj'], ' • ')} ${not_null(a['date_birth'], '', '')}</h5>
                <p class="card-text">
                    <span><strong>Mãe: ${not_null(a['mother'])}</strong></span><br/>
                    <span><strong>CNS: ${not_null(a['cns'])}</strong></span><br/>
                    <span><strong>Email: ${not_null(a['email'])}</strong></span><br/>
                    <span><strong>Telefone: ${not_null(a['phone'])}</strong></span><br/>
                    <span><strong>Celular: ${not_null(a['cell'])}</strong></span><br/>
                    <span><strong>Endereço: ${not_null(a['address'], ' • ')} ${not_null(a['number'], ' • ')} ${not_null(a['complement'])} ${not_null(a['district'], ' • ')} ${not_null(a['city'], ' • ')} ${not_null(a['uf'])}</strong></span>
                </p>
                
            </div>
        </div>`;

        $(`#IdUsers option[value='${a['IdUsers']}']`).each(function() {
            $(this).remove();
        });

        $('#IdUsers').html(` <option value="${a['IdUsers']}">${a['name']}</option>` + $('#IdUsers').html())
    }

    $('.users-data-view').html(html)
}

function use_weight_color(a) {
    
    let w = 0;

    if(!a['mother']){
        w = w + 3;
    }

    if(!a['cpf_cnpj']){
        w = w + 3;
    }

    if(!a['cns']){
        w = w + 3;
    }

    if(!a['phone']  && !a['cell']){
        w = w + 1;
    }

    if(!a['date_birth']){
        w = w + 2;
    }

    if(!a['address'] || !a['zip_code'] || !a['number']){
        w = w + 2;
    }

    if(w < 2){
        return "success";
    }

    if(w == 2){
        return "primary";
    }

    if(w <= 6){
        return "warning";
    }

    return "danger";
}

function not_null(a, b = "", c = "") {
    if(a != undefined && a != null){
        return `${a}${b}${c}`
    }
    return "";
}

//enabled - edit - start
$(document).on('change', '#IdUsers', function(e){
    e.preventDefault()
    enable_edit()
    users_atual_reload($(this).val())
})
//enabled - edit - end

// save new-patient
$(".new-patient").on('click', function(e){

    e.preventDefault();
    let title = $(this).attr('title')
    let url_insert = $(this).attr('iframe-patient-form');
    let url = $(this).attr('iframe-patient-create');

    if(url){
        axios.get(url_insert).then(function (res) {
            modal_create(title, res.data, url, 'primary', 'modal-full-width', `<button type="submit" class="btn btn-primary btn-sm"><i class="mdi mdi-cloud-upload"></i> Salvar</button>`, 'form_patient_modal')
        })
    }
})

// edit new-patient
$(".edit-patient-users").on('click', function(e){

    e.preventDefault();

    if($('#IdUsers').val()){
       
        let title = $(this).attr('title')
        let url_insert = $(this).attr('iframe-patient-form');
        let url = $(this).attr('iframe-patient-create');

        url_insert = `${url_insert}/${btoa($('#IdUsers').val())}`
        url = `${url}/${btoa($('#IdUsers').val())}`

        if(url){
            axios.get(url_insert).then(function (res) {
                modal_create(title, res.data, url, 'primary', 'modal-full-width', `<button type="submit" class="btn btn-primary btn-sm"><i class="mdi mdi-cloud-upload"></i> Salvar</button>`, 'form_patient_modal')
            })
        }
    }
})

$(document).on("submit","#form_patient_modal",function(e) {
    e.preventDefault()
    
    let url = $(this).attr('action');
    let form = $('#form_patient_modal')[0]
    let data = new FormData(form);
    let title = $('#modal_create_label').text();

    $('#modal_create').modal('hide')
    $('#modal_create').remove();

    axios.post(url, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then(function (response) {

        if (typeof response.data === 'object') {
            $('#IdUsers').html(`<option value="${response.data.IdUsers}">${response.data.name}</option>`)
            enable_edit()
            users_atual_reload(response.data.IdUsers)
        }else{
            modal_create(title, response.data, url, 'primary', 'modal-full-width', `<button type="submit" class="btn btn-primary btn-sm"><i class="mdi mdi-cloud-upload"></i> Salvar</button>`, 'form_patient_modal')
        }
    })
    .catch(function (error) {
        modal_info("ERRO", "Desculpe, ocorreu um erro ao tentar realizar essa ação","", "bg-warning")
        console.log(error);
    })
})

// forwarding hide show
function forwarding_show_hide() {
    $('#forwarding-hide').addClass('hide')
    if($('#forwarding').val() == 'y'){
        $('#forwarding-hide').removeClass('hide')
    }
}
forwarding_show_hide()

$(document).on('change', '#forwarding', function(){
    forwarding_show_hide()
})

// available form
function available_form() {
   
    let IdUsers = $('#IdUsers').val()
    console.log(available)
    
    axios.post($('#available').val(), {IdUsers}).then(function (res) {
    
        const data = res.data
        if(data == 0){
            available = true
            $('#form').submit()
        }else{
            modal_info("Atenção", "Paciente já se encontra em atendimento","Se continuar o atendimento anterior ser finalizado.", "bg-warning", '<button type="button" class="btn btn-primary btn-sm" id="start-button">Continuar</button>')
        }
    })
}

$(document).on('click', '#start-button', function(e){
    e.preventDefault()
    available = true
    $('#form').submit()
})