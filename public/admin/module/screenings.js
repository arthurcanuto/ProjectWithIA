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
        $('#classification').val('0')
        $('#rule_of_pain').val('0')
        scale_pain()
        scale_classification()
    })
    .catch(function(error) {
        console.log(error);
    });
}

function scale_pain() {
    let pain = $('#rule_of_pain').val()
    let a = "rgba(26,380,50,255)";
    let text = `<span class="badge pain_zero">${pain}</span>`

    if(pain == 1){
        a = 'rgba(102,350,34,255)'
        text = `<span class="badge pain_one">${pain}</span>`
    }else if(pain == 2){
        a = 'rgba(126,320,13,255)'
        text = `<span class="badge pain_two">${pain}</span>`
    }else if(pain == 3){
        a = 'rgba(191,260,7,255)'
        text = `<span class="badge pain_three">${pain}</span>`
    }else if(pain == 4){
        a = 'rgba(255,230,1,255)'
        text = `<span class="badge pain_four">${pain}</span>`
    }else if(pain == 5){
        a = 'rgba(255,200,0,255)'
        text = `<span class="badge pain_five">${pain}</span>`
    }else if(pain == 6){
        a = 'rgba(254,153,0,255)'
        text = `<span class="badge pain_six">${pain}</span>`
    }else if(pain == 7){
        a = 'rgba(254,120,11,255)'
        text = `<span class="badge pain_seven">${pain}</span>`
    }else if(pain == 8){
        a = 'rgba(251,90,22,255)'
        text = `<span class="badge pain_eight">${pain}</span>`
    }else if(pain == 9){
        a = 'rgba(247,75,29,255)'
        text = `<span class="badge pain_nine">${pain}</span>`
    }else if(pain == 10){
        a = 'rgba(247,7,29,255)'
        text = `<span class="badge pain_ten">${pain}</span>`
    }

    $("label[for='rule_of_pain'] span").html(text)
    inject_css(`#rule_of_pain::-webkit-slider-thumb {-webkit-appearance: none; border: 3px solid ${a};background: ${a};}`)
}
scale_pain()

$(document).on('change', '#rule_of_pain', function () {
    scale_pain()
})

//Pregnant
$(document).on('change', '#condition_pregnant', function () {
    is_pregnant()
})

function is_pregnant() {
    let a = $('#condition_pregnant').is(':checked')
    if(a){
        $('.gestational-block').removeClass('hide')
    }else{
        $('.gestational-block input').val('')
        $('.gestational-block').addClass('hide')
    }
}
is_pregnant()

//classification
function scale_classification() {
    
    let a = $('#classification').val()
    let b = "rgba(0,0,255)";
    let text = `<span class="badge not_urgent">Não urgente</span>`

    if(a == 4){
        b = "rgba(255,0,0)"
        text = `<span class="badge emergency">Emergência</span>`
    }else if(a == 3){
        b = "rgba(255,165,0)"
        text = `<span class="badge very_urgent">Muito Urgente</span>`
    }else if(a == 2){
        b = "rgba(255,255,0)"
        text = `<span class="badge urgent">Urgente</span>`
    }else if(a == 1){
        b = "rgba(0,128,0)"
        text = `<span class="badge little_urgent">Pouco Urgente</span>`
    }

    $("label[for='classification'] span").html(text)
    inject_css(`#classification::-webkit-slider-thumb {-webkit-appearance: none; border: 3px solid ${b};background: ${b};}`)
}
scale_classification()

$(document).on('change', '#classification', function (e) {  
    scale_classification()
})

$(document).on('change', '#classification', function (e) {  
    scale_classification()
})

//start screenings
$(document).on('click', '.start-screenings', function (e) {  
    e.preventDefault()
    start_screenings($(this).attr('href'))
})

// open url screenings
$(document).on('click', 'button[open-screenings-url]', function(e){
    e.preventDefault()

    $('#modal_info').modal('hide')
    $('#modal_info').remove()

    $('div[url-from').attr('url-from', $(this).attr('open-screenings-url'))
    load_form()
})

// release screenings
$(document).on('click', '.release-screenings', function(e){
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

// skip-screenings
$(document).on('click', '.skip-screenings', function(e){
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

// force-attendance users
$(document).on('click', 'button[force-attendance-url]', function(e){
    e.preventDefault()

    $('#modal_info').modal('hide')
    $('#modal_info').remove()

    let url = $(this).attr('force-attendance-url')
    start_screenings(url, {force_service:'yes'})
})

// start screenings
function start_screenings(url, params = {}) {

    axios.post(url, params).then(function(res) {
       
        const data = res.data

        if(data.status == "not-available"){
            modal_info(data.title, '', data.message, data.color)
        }

        if(data.status == "service-open"){
            modal_info(data.title, '', data.message, data.color, `<button type="submit" class="btn btn-primary btn-sm" open-screenings-url="${data.url}"><i class="mdi mdi-exit-to-app me-1"></i>Acessar Atendimento</button>`)
        }

        if(data.status == "in-attendance"){
            modal_info(data.title, '', data.message, data.color, `<button type="submit" class="btn btn-primary btn-sm" force-attendance-url="${url}"><i class="mdi mdi-exit-to-app me-1"></i>Iniciar</button>`)
        }

        if(data.status == "order-queue"){
            modal_info(data.title, '', data.message, data.color, `
                <button type="submit" class="btn btn-primary btn-sm" force-attendance-url="${url}">
                    <i class="mdi mdi-exit-to-app me-1"></i>Iniciar
                </button>

                <button type="submit" class="btn btn-primary btn-sm" open-screenings-url="${data.url}">
                    <i class="mdi mdi-exit-to-app me-1"></i>Acessar Atendimento
                </button>
            `)
        }
        
        $.NotificationApp.send("Aguarde", "Carregando..", "top-right", "rgba(0,0,0,0.2)", "info");
        load_form()
    })
    .catch(function(error) {
        console.log(error);
    });
}

// save form screenings
function form_screenings() {
    let url = $('#form_screenings').attr('action');
    let form = $('#form_screenings')[0]
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
       
        $('div[url-from').attr('url-from', data.url)
        load_form()

    })
    .catch(function (error) {
        modal_info("ERRO", "Desculpe, ocorreu um erro ao tentar realizar essa ação","", "bg-warning")
        console.log(error);
    });
}

$(document).on('click', '.button-disabled', function (e) {  
    $(this).prop('disabled', true)
    $(this).attr('href', '#')
    $(this).addClass('btn-secondary')
    $(this).removeClass('btn-danger')
})

$(document).on('click', '.link-disabled', function (e) { 
    $(this).prop('disabled', true)
    $(this).attr('href', '#')
    $(this).removeClass('btn-danger')
    $(this).addClass('btn-secondary')
})