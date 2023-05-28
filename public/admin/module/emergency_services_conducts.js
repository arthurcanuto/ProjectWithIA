window.onload = function() {
    load_form()
}

function load_form() {
    let url = $('div[url-from]').attr('url-from')
    $('div[url-from]').html(`<div class="alert alert-primary mb-0 d-flex align-items-center" role="alert"><div class="spinner-border text-primary me-2" role="status"></div><strong class="my-auto">Carregando...</strong></div>`)
    axios.get(url).then(function(res) {
        const data = res.data
        $('div[url-from]').html(data.html)
        window.reload_iframe()
        death_certificate_number_show_hide()
        medical_certificate_type()
        medical_type_certificate()
    })
    .catch(function(error) {
        console.log(error);
    });
}

// forms-modal
$(document).on('click', '.forms-modal', function (e) {
    e.preventDefault()
    let title = $(this).attr('title')
    let url = $(this).attr('href')
    load_html_modal(url, title)
})

function modal_forms(data_html, title, url, button = '') {
    
    let html = `<div class="modal fade" id="modal-forms-conducts-lg" tabindex="-1" role="dialog" aria-labelledby="modal-forms-conducts-label" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h4 class="modal-title" id="modal-forms-conducts-label">${title}</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
                </div>
                <div class="modal-body" id="body-html-forms" style="height: 520px; max-height: 900px; overflow-y: scroll;">
                    ${data_html}
                </div>
                <div class="modal-footer">
                    ${button}
                    <button type="button" class="btn btn-light btn-sm " data-bs-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>`

    $('#modal-forms-conducts-lg').modal('hide');
    $('#modal-forms-conducts-lg').remove();
    $(".content-page").append(html);
    $('#modal-forms-conducts-lg').modal('show');
}

function send_modal_forms() {
    $('#modal-forms-send-button').click()
}

function modal_form_send(){
    let url = $('#modal-form-send').attr('action');
    let form = $('#modal-form-send')[0]
    let data = new FormData(form);

    $('#code_filter').val('')
    $('#title_filter').val('')

    axios.post(url, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then(function (res) {
        const data = res.data
        load_html_body(data)
    })
    .catch(function (error) {
        modal_info("ERRO", "Desculpe, ocorreu um erro ao tentar realizar essa ação","", "bg-warning")
        console.log(error);
    });
}

function load_html_body(url){
    axios.get(url).then(function(res) {
        const data = res.data
        $('#body-html-forms').html(data)
        window.reload_iframe()
    })
    .catch(function(error) {
        console.log(error);
    });
}

function load_html_modal(url, title) {
    axios.get(url).then(function(res) {
        const data = res.data
        modal_forms(data, title, url, `<button type="button" class="btn btn-primary btn-sm" onclick="send_modal_forms()"><i class="mdi mdi-cloud-upload"></i> Salvar</button>`)
        window.reload_iframe()
    })
    .catch(function(error) {
        console.log(error);
    });
}

function list_procedures() {
    const code = $('#code_filter').val();
    const title = $('#title_filter').val();
    const IdProcedures = $('#IdProcedures').val();
  
    if (code !== undefined && title !== undefined && IdProcedures !== undefined && (code.length > 0 || title.length > 0 || IdProcedures.length > 0)) {
        axios.get($('#IdProcedures').attr('url-query'), {params: {code, title, IdProcedures}}).then(res => {
            const data = res.data;
            let optionsHtml = "";
            if (data.length > 0) {
            for (let i in data) {
                optionsHtml += `<option value='${data[i].IdProcedures}'>${data[i].code} • ${data[i].title}</option>`;
            }
            } else {
            optionsHtml = '<option value="">...</option>';
            }
            $('#IdProcedures').html(optionsHtml);
        }).catch(error => console.log(error));
    }
}

$(document).on('keyup', '#code_filter', function(){
    list_procedures()
})

$(document).on('keyup', '#title_filter', function(){
    list_procedures()
})

$(document).on('hide.bs.modal', '#modal-forms-conducts-lg', function (e) {
    window.reload_iframe()
});

function list_prescriptions() {
    const title = $('#title_prescriptions_filter').val();
    const IdMedicationPrescriptions = $('#IdMedicationPrescriptions').val();
  
    if (title !== undefined && IdMedicationPrescriptions !== undefined &&  (title.length > 0 || IdMedicationPrescriptions.length > 0)) {
        axios.get($('#IdMedicationPrescriptions').attr('url-query'), {params: {title, IdMedicationPrescriptions}}).then(res => {
            const data = res.data;
            let optionsHtml = "";
            if (data.length > 0) {
            for (let i in data) {
                optionsHtml += `<option value='${data[i].IdMedicationPrescriptions}'>${data[i].title}</option>`;
            }
            } else {
            optionsHtml = '<option value="">...</option>';
            }
            $('#IdMedicationPrescriptions').html(optionsHtml);
        }).catch(error => console.log(error));
    }
}

$(document).on('keyup', '#title_prescriptions_filter', function(){
    list_prescriptions()
})

$(document).on('click', '#save-prescriptions-title', function(){
    
    let title = $('#title_prescriptions_filter').val()
    let url = $(this).attr('url')

    axios.get(url, {params: {title}}).then(res => { 
        list_prescriptions()
    }).catch(function (error) {
        modal_info("ERRO", "Desculpe, ocorreu um erro ao tentar realizar essa ação","", "bg-warning")
        console.log(error);
    });
})

// medications 
function list_medications() {
    const title = $('#title_medications_filter').val();
    const IdMedications = $('#IdMedications').val();
    const IdGroupInternalPrescriptions = $('#IdGroupInternalPrescriptions').val();
  
    $('#medications-fields').addClass('hide')
    $('#IdMedicationAdministrations_fields').addClass('hide')
    $('#IdMedicationDilutions_fields').addClass('hide')

    $('#IdMedicationAdministrations').val('')
    $('#IdMedicationDilutions').val('')

    $('#IdMedicationDilutions').removeAttr('required')
    $('#IdMedicationAdministrations').removeAttr('required')

    if (title !== undefined && IdMedications !== undefined &&  (title.length > 0 || IdMedications.length > 0)) {
        axios.get($('#IdMedications').attr('url-query'), {params: {title, IdMedications, IdGroupInternalPrescriptions}}).then(res => {
            const data = res.data;
            let optionsHtml = "";
            if (data.length > 0) {
                for (let i in data) {
                    optionsHtml += `<option value='${data[i].IdMedications}'> ${data[i].title} • ${data[i].units}</option>`;
                }
            } else {
                optionsHtml = '<option value="">...</option>';
            }
            $('#IdMedications').html(optionsHtml);
            list_medications_selected()

        }).catch(error => console.log(error));
    }
}

function list_medications_selected() {

    let IdMedications = $('#IdMedications').val()
    $('#alert-medications').addClass('hide')

    if(IdMedications != null && IdMedications != ''){

        axios.get($('#IdMedications').attr('url-selected-query'), {params: {IdMedications}}).then(res => { 

            const data = res.data
            if(data['administrations'] != null){
                $('#IdMedicationAdministrations').html(option_select(data['administrations'], 'IdMedicationAdministrations'));
                $('#IdMedicationAdministrations_fields').removeClass('hide')
                $('#IdMedicationAdministrations').removeAttr('required')
            }

            if(data['dilutions'] != null){
                $('#IdMedicationDilutions').html('<option value="">...</option>'+ option_select(data['dilutions'], 'IdMedicationDilutions'));
                $('#IdMedicationDilutions_fields').removeClass('hide')
                $('#IdMedicationDilutions').removeAttr('required')
            }

            if(data['allergies'] != null){
                $('#alert-medications').html(`<strong>Atenção</strong> Pacente possui alergia a esse medicamento <strong>(${data['allergies']})</strong>.`)
                $('#alert-medications').removeClass('hide')
            }

            $('#medications-fields').removeClass('hide')

        }).catch(error => console.log(error));
    }

}
$(document).on('keyup', '#title_medications_filter', function(){
    list_medications()
})

$(document).on('change', '#IdMedications', function(){
    list_medications_selected()
})

function option_select(res, id) {
    let data = ""

    if(res.length > 0){
        for(i in res){

            let a = ""
            if(i == 0){
                a = "selected" 
            }
            data += `<option value='${res[i][`${id}`]}' ${a}>${res[i].title}</option>`
        }
    }else{
        data = '<option value="">...</option>'
    }

    return data;
}

function show_hide_type() {

    if($('#type_prescription').val() != undefined ){
        $('#interval_prescription_fields').addClass('hide')
        if($('#type_prescription').val() == "f"){
            $('#interval_prescription_fields').removeClass('hide')
        }else{
            $('#interval_prescription_fields').val('')
        }
    }
}
show_hide_type()

$(document).on('change', '#type_prescription', function(){
    show_hide_type()
})

$(document).on('change', '#type_main_prescription', function(){
    show_hide_type_main()
})

function show_hide_type_main() {
    let type = $('#type_main_prescription').val()
    $('.single-diet-fields').addClass('hide')
    $('.vital-signs').addClass('hide')
    $('.card-medications').addClass('hide')
    $('.glycemia-correction').addClass('hide')
    $('.glycemia-correction').addClass('hide')
    $('.guidelines-card').addClass('hide')

    if(type == 'd'){
        $('.single-diet-fields').removeClass('hide')
    }else if(type == 'sv'){
        $('.vital-signs').removeClass('hide')
    }else if(type == 'cg'){
        $('.glycemia-correction').removeClass('hide')
    }else if(type == 'm'){
        $('.card-medications').removeClass('hide')
    }else if(type == 'o'){
        $('.guidelines-card').removeClass('hide')
    }
}

// finalize prescriptions
$(document).on('click', '.finalize-prescriptions', function(e){
    e.preventDefault()
    let url = $(this).attr('href')
    let title = 'Finalizar Prescrição'

    modal_info(title, '', `Realmente deseja ${title.toLowerCase()} o registro de codigo: <strong>${$(this).attr('data-id')}</strong>`, 'bg-danger', `<button type="button" class="btn btn-danger action-finalize-prescriptions" url="${url}">${title}</button>`)
})

$(document).on('click', '.action-finalize-prescriptions', function(e){
    e.preventDefault()
    let url = $(this).attr('url')

    $('#modal_info').modal('hide')
    $('#modal_info').remove();

    axios.get(url).then(res => { 
        const data = res.data
        load_html_body(data)
    }).catch(function (error) {
        modal_info("ERRO", "Desculpe, ocorreu um erro ao tentar realizar essa ação","", "bg-warning")
        console.log(error);
    });
})

//modal-save-group
$(document).on('click', '.modal-save-group', function(e){

    e.preventDefault()
    let url = $(this).attr('url')
    let title = $(this).attr('title-modal')

    axios.post(url).then(res => { 
        const data = res.data
        load_html_modal(data, title)

    }).catch(function (error) {
        modal_info("ERRO", "Desculpe, ocorreu um erro ao tentar realizar essa ação","", "bg-warning")
        console.log(error);
    });

})

// observation - save
$(document).on('click', '#observation-button-save', function(e){
    e.preventDefault()

    let url = $(this).attr('url')
    let note = $('#note-observation').val()

    if(note == '' || note == null){
        $('#note-observation').addClass('is-invalid')
        return 0
    }

    axios.get(url, {params: {note}}).then(res => {
    
        modal_info("SUCESSO", '', `Ação realizada com sucesso.`, 'bg-primary')
        let url = $('#condutc-card').attr('url-new-from')
        let params = {'tab':'conduct', 'tab-sub':'observation-one'}
        url += '?' + $.param(params);
        $('#condutc-card').attr('url-from', url)
        load_form()
        window.count_total_menu()

    }).catch(function (error) {
        modal_info("ERRO", "Desculpe, ocorreu um erro ao tentar realizar essa ação","", "bg-warning")
        console.log(error);
    });
})

// hospitalization-observation hospitalization
$(document).on('click', '.hospitalization-button-save', function(e){
    e.preventDefault()

    let url = $(this).attr('url')
    let validate = false;

    $('#main_signs').removeClass('is-invalid')
    $('#conditions_justify').removeClass('is-invalid')
    $('#diagnostic_tests').removeClass('is-invalid')
    $('#IdCid10Main').removeClass('is-invalid')

    // main signs
    let main_signs = $('#main_signs').val()
    if(main_signs == '' || main_signs == null){
        $('#main_signs').addClass('is-invalid')
        validate = true
    }

    // conditions justify
    let conditions_justify = $('#conditions_justify').val()
    if(conditions_justify == '' || conditions_justify == null){
        $('#conditions_justify').addClass('is-invalid')
        validate = true
    }

    // main signs
    let diagnostic_tests = $('#diagnostic_tests').val()
    if(diagnostic_tests == '' || diagnostic_tests == null){
        $('#diagnostic_tests').addClass('is-invalid')
        validate = true
    }

    // main signs
    let IdCid10Main = $('#IdCid10Main').val()
    if(IdCid10Main == '' || IdCid10Main == null){
        $('#IdCid10Main').addClass('is-invalid')
        validate = true
    }

    if(validate){
        return 0
    }

    let symptoms_onset_date = $('#symptoms_onset_date').val()
    let IdCid10Secondary = $('#IdCid10Secondary').val()
    let IdCid10AssociatedCauses = $('#IdCid10AssociatedCauses').val()
    let accident = $('#accident').val()
    let cnpj_security = $('#cnpj_security').val()
    let ticket = $('#ticket').val()
    let series = $('#series').val()
    let cnpj_company = $('#cnpj_company').val()
    let cnae_company = $('#cnae_company').val()
    let cbor = $('#cbor').val()
    let social_security = $('#social_security').val()

    axios.get(url, {params: {
        main_signs,
        conditions_justify,
        diagnostic_tests,
        symptoms_onset_date,
        IdCid10Main,
        IdCid10Secondary,
        IdCid10AssociatedCauses,
        accident,
        cnpj_security,
        ticket,
        series,
        cnpj_company,
        cnae_company,
        cbor,
        social_security,
    }}).then(res => {

        modal_info("SUCESSO", '', `Ação realizada com sucesso.`, 'bg-primary')
        let url = $('#condutc-card').attr('url-new-from')
        let params = {'tab':'conduct', 'tab-sub':'hospitalization-one'}
        url += '?' + $.param(params);
        $('#condutc-card').attr('url-from', url)

        load_form()
        window.count_total_menu()

    }).catch(function (error) {
        modal_info("ERRO", "Desculpe, ocorreu um erro ao tentar realizar essa ação","", "bg-warning")
        console.log(error);
    });
})

// note medical report
$(document).on('click', '#button-medical-report', function(e){
    e.preventDefault()

    let url = $(this).attr('url')
    let note_medical_report = $('#note_medical_report').val()
    $('#note_medical_report').removeClass('is-invalid')

    if(note_medical_report == '' || note_medical_report == null){
        $('#note_medical_report').addClass('is-invalid')
        return 0
    }

    axios.get(url, {params: {note_medical_report}}).then(res => {
    
        modal_info("SUCESSO", '', `Ação realizada com sucesso.`, 'bg-primary')
        let url = $('#condutc-card').attr('url-new-from')
        let params = {'tab':'medical-report'}
        url += '?' + $.param(params);
        $('#condutc-card').attr('url-from', url)
        load_form()
        window.count_total_menu()

    }).catch(function (error) {
        modal_info("ERRO", "Desculpe, ocorreu um erro ao tentar realizar essa ação","", "bg-warning")
        console.log(error);
    });
})

// medical certificate
$(document).on('click', '#button-medical-certificate', function(e){
    e.preventDefault()

    let url = $(this).attr('url')
    let validate = false;

    $('#IdCid10MedicalCertificate').removeClass('is-invalid')
    $('#date_medical_certificate_start').removeClass('is-invalid')
    $('#date_medical_certificate_end').removeClass('is-invalid')
    $('#medical_certificate_type').removeClass('is-invalid')
    $('#medical_certificate').removeClass('is-invalid')
    $('#date_medical_certificate_time_start').removeClass('is-invalid')
    $('#date_medical_certificate_time_end').removeClass('is-invalid')
    $('#number_days').removeClass('is-invalid')

    let IdCid10MedicalCertificate = $('#IdCid10MedicalCertificate').val()
    let date_medical_certificate_start = $('#date_medical_certificate_start').val()
    let date_medical_certificate_end = $('#date_medical_certificate_end').val()
    let medical_certificate_type = $('#medical_certificate_type').val()
    let escort_name = $('#escort_name').val()
    let medical_certificate = $('#medical_certificate').val()
    let date_medical_certificate_time_start = $('#date_medical_certificate_time_start').val()
    let date_medical_certificate_time_end = $('#date_medical_certificate_time_end').val()
    let number_days = $('#number_days').val()
    let medical_type_certificate = $('#medical_type_certificate').val()

    if(medical_certificate == '' || medical_certificate == null){
        $('#medical_certificate').addClass('is-invalid')
        validate = true
    }

    if(date_medical_certificate_start == '' || date_medical_certificate_start == null && (medical_type_certificate == 'atc')){
        $('#date_medical_certificate_start').addClass('is-invalid')
        validate = true
    }

    if(date_medical_certificate_end == '' || date_medical_certificate_end == null && (medical_type_certificate == 'atc')){
        $('#date_medical_certificate_end').addClass('is-invalid')
        validate = true
    }

    if((escort_name == null || escort_name == '') && medical_certificate_type == 'ac'){
        $('#escort_name').addClass('is-invalid')
        validate = true
    }

    if((number_days == '' || number_days == null) && (medical_type_certificate == 'atm')){
        $('#number_days').addClass('is-invalid')
        validate = true
    }

    if(validate){
        return 0
    }

    axios.get(url, {params: {
        IdCid10MedicalCertificate,
        date_medical_certificate_start,
        date_medical_certificate_end,
        medical_certificate_type,
        escort_name,
        medical_certificate,
        date_medical_certificate_time_start,
        date_medical_certificate_time_end,
        medical_type_certificate,
        number_days
    }}).then(res => {
    
        modal_info("SUCESSO", '', `Ação realizada com sucesso.`, 'bg-primary')
        let url = $('#condutc-card').attr('url-new-from')
        let params = {'tab':'certificate'}
        url += '?' + $.param(params);
        $('#condutc-card').attr('url-from', url)
        load_form()
        window.count_total_menu()

    }).catch(function (error) {
        modal_info("ERRO", "Desculpe, ocorreu um erro ao tentar realizar essa ação","", "bg-warning")
        console.log(error);
    });
})

// death certificate number hide/show
function death_certificate_number_show_hide() {
    
    let type = $('#type_patient_discharge').val()
    $('#death_certificate_number_field').addClass('hide')

    if(type == 'ob'){
        $('#death_certificate_number_field').removeClass('hide')
    }
}
death_certificate_number_show_hide()

$(document).on('change', '#type_patient_discharge', function(e){
    death_certificate_number_show_hide()
})

// patient discharge note
$(document).on('click', '#patient-discharge-button', function(e){
    e.preventDefault()

    let url = $(this).attr('url')
    let validate = false;

    $('#death_certificate_number').removeClass('is-invalid')
    $('#type_patient_discharge').removeClass('is-invalid')
    $('#patient_discharge_note').removeClass('is-invalid')

    let death_certificate_number = $('#death_certificate_number').val()
    let type_patient_discharge = $('#type_patient_discharge').val()
    let patient_discharge_note = $('#patient_discharge_note').val()

    if(type_patient_discharge == '' || type_patient_discharge == null){
        $('#type_patient_discharge').addClass('is-invalid')
        validate = true
    }

    if(patient_discharge_note == '' || patient_discharge_note == null){
        $('#patient_discharge_note').addClass('is-invalid')
        validate = true
    }

    if((death_certificate_number == '' || death_certificate_number == null) && type_patient_discharge == 'ob'){
        $('#death_certificate_number').addClass('is-invalid')
        validate = true
    }

    if(validate){
        return 0
    }

    axios.get(url, {params: {
        death_certificate_number,
        type_patient_discharge,
        patient_discharge_note
    }}).then(res => {
    
        modal_info("SUCESSO", '', `Ação realizada com sucesso.`, 'bg-primary')
        let url = $('#condutc-card').attr('url-new-from')
        let params = {'tab':'patient-discharge'}
        url += '?' + $.param(params);
        $('#condutc-card').attr('url-from', url)
        load_form()
        window.count_total_menu()

    }).catch(function (error) {
        modal_info("ERRO", "Desculpe, ocorreu um erro ao tentar realizar essa ação","", "bg-warning")
        console.log(error);
    });
})

// medical certificate type
$(document).on('change', '#medical_certificate_type', function(){
    medical_certificate_type()
})

function medical_certificate_type() {

    let type = $('#medical_certificate_type').val()
    $('#cid-10-card').addClass('hide')
    $('#accompany-patient').addClass('hide')

    if(type == 'p'){
        $('#cid-10-card').removeClass('hide')
    }else{
        $('#accompany-patient').removeClass('hide')
    }
}

$(document).on('change', '#medical_type_certificate', function(){
    medical_type_certificate()
})

function medical_type_certificate() {
 
    let type = $('#medical_type_certificate').val()
    $('.date-card').addClass('hide')
    $('.number-days-card').addClass('hide')

    if(type == 'atc'){
        $('.date-card').removeClass('hide')
    }else{
        $('.number-days-card').removeClass('hide')
    }
}

$(document).on('click', '#save-evolutions', function(e) {
    e.preventDefault()

    let error = false;
    let url = $(this).attr('url')

    let easy_sus = $('input[name="easy_sus"]:checked').val()
    let note_evolution_text = note_evolution.options.previewRender(note_evolution.value());


    $('#note-evolution-requerid').addClass('hide')

    if(note_evolution_text == null || note_evolution_text == ''){
        $('#note-evolution-requerid').removeClass('hide')
        error = true;
    }


    if(error){
        return 0;
    }

    note_evolution.value("");
    $('#evolution-collapse').removeClass('show')

    axios.post(url, {
        easy_sus,
        note_evolution_text,
    }).then(res => { 
        
        modal_info('Sucesso', '', 'Ação realizada com sucesso', 'bg-primary')
        window.reload_iframe()

    }).catch(function (error) {
        modal_info("ERRO", "Desculpe, ocorreu um erro ao tentar realizar essa ação","", "bg-warning")
        console.log(error);
    });

})