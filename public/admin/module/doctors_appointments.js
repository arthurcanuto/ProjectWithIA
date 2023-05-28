window.onload = function() {
    load_form()
}

function load_form() {
    let url = $('div[url-from]').attr('url-from')
    axios.get(url).then(function(res) {
        const data = res.data
        $('div[url-from]').html(data.html)
        $('.code-emergency_services').text(`Código Atendimento: ${data.IdEmergencyServices}`)
        window.history.pushState(null, null, data.form_url)
        window.count_total_menu()
        window.reload_iframe()
    })
    .catch(function(error) {
        console.log(error);
    });
}

//start doctors_appointments
$(document).on('click', '.start-doctors_appointments', function (e) {  
    e.preventDefault()
    doctors_appointments($(this).attr('href'))
})

// force-attendance users
$(document).on('click', 'button[force-attendance-url]', function(e){
    e.preventDefault()

    $('#modal_info').modal('hide')
    $('#modal_info').remove()

    let url = $(this).attr('force-attendance-url')
    doctors_appointments(url, {force_service:'yes'})
})

// start doctors_appointments
function doctors_appointments(url, params = {}) {

    axios.post(url, params).then(function(res) {
       
        const data = res.data

        if(data.status == "not-available"){
            modal_info(data.title, '', data.message, data.color)
        }

        if(data.status == "service-open"){
            modal_info(data.title, '', data.message, data.color, `<button type="submit" class="btn btn-primary btn-sm" open-doctors_appointments-url="${data.url}"><i class="mdi mdi-exit-to-app me-1"></i>Acessar Atendimento</button>`)
        }

        if(data.status == "in-attendance"){
            modal_info(data.title, '', data.message, data.color, `<button type="submit" class="btn btn-primary btn-sm" force-attendance-url="${url}"><i class="mdi mdi-exit-to-app me-1"></i>Iniciar</button>`)
        }

        if(data.status == "order-queue"){
            modal_info(data.title, '', data.message, data.color, `
                <button type="submit" class="btn btn-primary btn-sm" force-attendance-url="${url}">
                    <i class="mdi mdi-exit-to-app me-1"></i>Iniciar
                </button>

                <button type="submit" class="btn btn-primary btn-sm" open-doctors_appointments-url="${data.url}">
                    <i class="mdi mdi-exit-to-app me-1"></i>Acessar Atendimento
                </button>
            `)
        }
        
        load_form()
    })
    .catch(function(error) {
        console.log(error);
    });
}

// open url doctors_appointments
$(document).on('click', 'button[open-doctors_appointments-url]', function(e){
    e.preventDefault()

    $('#modal_info').modal('hide')
    $('#modal_info').remove()

    $('div[url-from').attr('url-from', $(this).attr('open-doctors_appointments-url'))
    load_form()
})

// release doctors_appointments
$(document).on('click', '.release-doctors_appointments', function(e){
    e.preventDefault()

    axios.post($(this).attr('href')).then(function(res) {

        const data = res.data
        if(data == 'success'){
            modal_info('Sucesso', '', 'Ação realizada com sucesso', 'bg-primary')
        }else{
            modal_info('Atenção', '', 'Esse atendimento não está disponível.', 'bg-danger')
        }

        load_form()

    }).catch(function(error) {
        console.log(error);
    });
})

// skip-doctors_appointments
$(document).on('click', '.skip-doctors_appointments', function(e){
    e.preventDefault()

    axios.post($(this).attr('href')).then(function(res) {

        const data = res.data
        if(data.status == 'back'){
            location.assign(data.url);
            return 0;
        }
       
        $('div[url-from').attr('url-from', data.url)
        load_form()

    }).catch(function(error) {
        console.log(error);
    });    
})

// save form screenings
function form_doctors_appointments() {
    let url = $('#form_doctors_appointments').attr('action');
    let form = $('#form_doctors_appointments')[0]
    let data = new FormData(form);

    axios.post(url, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then(function (response) {
       
        const data = response.data

        if(data.status == "not-available"){
            modal_info(data.title, '', data.message, data.color)
        }

        if(data.status == 'back'){
            location.assign(data.url);
            return 0;
        }
       
        //$('div[url-from').attr('url-from', data.url)
        //load_form()

    })
    .catch(function (error) {
        modal_info("ERRO", "Desculpe, ocorreu um erro ao tentar realizar essa ação","", "bg-warning")
        console.log(error);
    });
}

$(document).on('click', '.button-disabled', function (e) {  
    e.preventDefault()
    $(this).prop('disabled', true)
    $(this).attr('href', '#')
    $(this).addClass('btn-secondary')
    $(this).removeClass('btn-danger')
})

$(document).on('click', '.link-disabled', function (e) { 
    e.preventDefault()
    $(this).prop('disabled', true)
    $(this).attr('href', '#')
    $(this).removeClass('btn-danger')
    $(this).addClass('btn-secondary')
})