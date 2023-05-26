//classification
function updateClassification() {
    const classificationInput = $('#classification');
    const classificationValue = classificationInput.val();

    const colors = {
        0: "rgba(0,0,255)",
        1: "rgba(0,128,0)",
        2: "rgba(255,255,0)",
        3: "rgba(255,165,0)",
        4: "rgba(255,0,0)"
    };
    
    const texts = {
        0: `<span class="badge not_urgent">Não Urgente</span>`,
        1: `<span class="badge little_urgent">Pouco Urgente</span>`,
        2: `<span class="badge urgent">Urgente</span>`,
        3: `<span class="badge very_urgent">Muito Urgente</span>`,
        4: `<span class="badge emergency">Emergência</span>`
    };

    const color = colors[classificationValue] || colors[1];
    const text = texts[classificationValue] || texts[1];

    $("label[for='classification'] span").html(text);
    inject_css(`#classification::-webkit-slider-thumb {-webkit-appearance: none; border: 3px solid ${color};background: ${color};}`);
}

updateClassification();
$(document).on('change', '#classification', updateClassification);

// remove options
$(document).on("click", ".button-question-close", function() {
    $(this).closest('h5').remove();
    show_hide_card_IdProcedures();
    show_hide_card_IdCid10();
});

// cid10 - start
function show_hide_card_IdCid10() {
    let input_card = $('input[name="IdCid10[]"]')
    $('#IdCid10-custom-card').addClass('hide')

    if(input_card.length > 0){
        $('#IdCid10-custom-card').removeClass('hide')
    }
}
show_hide_card_IdCid10()

$(document).on('click', '.add-cid-10', function(){

    let IdCid10 = $('#IdCid10_view').find("option:selected").val()
    let title =  $('#IdCid10_view').find("option:selected").text()
    
    $('#select2-IdCid10_view-container').css({"border": "0px solid red"});

    if(!IdCid10){
        $('#select2-IdCid10_view-container').css({"border": "1px solid red"});
        return 0;
    }

    let IdCid10_card_html = $('#IdCid10-card').html()

    let IdCid10_html = `
    <h5>
        <span class="badge bg-primary" style="text-align:left;">
            <button type="button" class="button-question-close">x</button>
            ${title}
        </span>
        <input type="hidden" name="IdCid10[]" value="${IdCid10}">
    </h5>`

    $('#IdCid10-card').html(IdCid10_card_html + IdCid10_html)
    show_hide_card_IdCid10()

    $('#IdCid10_view').val('').trigger('change');
})
// cid10 - end

// procedures
function show_hide_card_IdProcedures() {
    let input_card = $('input[name="IdProcedures[]"]')
    $('#IdProcedures-custom-card').addClass('hide')

    if(input_card.length > 0){
        $('#IdProcedures-custom-card').removeClass('hide')
    }
}
show_hide_card_IdProcedures()

$(document).on('click', '.add-procedures', function(){

    let error = false;
    let IdProcedures = $('#IdProcedures_view').find("option:selected").val()
    let note_procedures = $('#note_procedures').val()
    let date_procedures_view = $('#date_procedures_view').val()
    let IdUsersResponsibleProcedures_view = $('#IdUsersResponsibleProcedures_view').find("option:selected").val()
    let usernameprocedure = $('#IdUsersResponsibleProcedures_view').find("option:selected").text()
    let title =  $('#IdProcedures_view').find("option:selected").text()

    $('#select2-IdProcedures_view-container').css({"border": "0px solid red"});
    $('#select2-IdUsersResponsibleProcedures_view-container').css({"border": "0px solid red"});
    $('#note_procedures').removeClass('is-invalid')
    $("#date_procedures_view").removeClass('is-invalid')

    if((!IdProcedures) && (!note_procedures)){
        $('#select2-IdProcedures_view-container').css({"border": "1px solid red"});
        $('#note_procedures').addClass('is-invalid')
        error = true
    }

    if(!IdUsersResponsibleProcedures_view){
        $('#select2-IdUsersResponsibleProcedures_view-container').css({"border": "1px solid red"});
    }

    if(!date_procedures_view){
        $("#date_procedures_view").addClass('is-invalid');
        error = true
    }

    if(error){
        return 0;
    }

    let IdProcedures_card_html = $('#IdProcedures-card').html()

    if(IdProcedures && note_procedures){
        note_procedures = ` <br> ${note_procedures}`
    }

    if(!IdProcedures){
        title = ''
    }

    let IdProcedures_html = `
    <h5>
        <span class="badge bg-primary" style="text-align:left;">
            <div class="row">
                <div class="col-1">
                    <button type="button" class="button-question-close">x</button>
                </div>

                <div class="col-auto text-left">
                    Responsavel: ${usernameprocedure} • Data: ${date_procedures_view}<br>
                    ${title} ${note_procedures}
                </div>
            </div>
        </span>
        <input type="hidden" name="IdProcedures[]" value="${IdProcedures}">
        <input type="hidden" name="IdUsersResponsibleProcedures[]" value="${IdUsersResponsibleProcedures_view}">
        <input type="hidden" name="date_procedures[]" value="${date_procedures_view}">
        <input type="hidden" name="note_procedures[]" value="${note_procedures}">
    </h5>`

    $('#IdProcedures-card').html(IdProcedures_card_html + IdProcedures_html)
    show_hide_card_IdProcedures()

    $('#IdProcedures_view').val('').trigger('change');
    $('#note_procedures').val('')
})
// procedures - end

// prescrition - start
function show_hide_card_prescription() {
    let input_card = $('input[name="prescription[]"]')
    $('#prescription-custom-card').addClass('hide')

    if(input_card.length > 0){
        $('#prescription-custom-card').removeClass('hide')
    }
}
show_hide_card_prescription()

$(document).on('click', '.add-prescription', function(){

    let error = false;
    let note_prescription = $('#note_prescription').val()
    let date_pescription_view = $('#date_pescription_view').val()
    let IdUsersResponsiblePescription_view = $('#IdUsersResponsiblePescription_view').find("option:selected").val()
    let usernameprocedure = $('#IdUsersResponsiblePescription_view').find("option:selected").text()

    $('#select2-IdUsersResponsiblePescription_view-container').css({"border": "0px solid red"});
    $('#note_prescription').removeClass('is-invalid')
    $("#date_pescription_view").removeClass('is-invalid')

    if((!note_prescription)){
        $('#note_prescription').addClass('is-invalid')
        error = true
    }

    if(!IdUsersResponsiblePescription_view){
        $('#select2-IdUsersResponsiblePescription_view-container').css({"border": "1px solid red"});
    }

    if(!date_pescription_view){
        $("#date_pescription_view").addClass('is-invalid');
        error = true
    }

    if(error){
        return 0;
    }

    let prescription_card_html = $('#prescription-card').html()

    let prescription_html = `
    <h5>
        <span class="badge bg-primary" style="text-align:left;">
            <div class="row">
                <div class="col-1">
                    <button type="button" class="button-question-close">x</button>
                </div>

                <div class="col-auto">
                    Responsavel: ${usernameprocedure} • Data: ${date_pescription_view}<br>
                    ${note_prescription}
                </div>
            </div>
        </span>
        <input type="hidden" name="prescription[]" value="${note_prescription}">
        <input type="hidden" name="IdUsersResponsiblePescription[]" value="${IdUsersResponsiblePescription_view}">
        <input type="hidden" name="date_pescription[]" value="${date_pescription_view}">
    </h5>`

    $('#prescription-card').html(prescription_card_html + prescription_html)
    show_hide_card_prescription()

    $('#note_prescription').val('')
})
// prescrition - end

// patient discharge - start
function patient_discharge_show_hide() {
        
    let patient_discharge = $('#patient_discharge').val()
    $('.patient-discharge-card').addClass('hide')

    if(patient_discharge == 'y'){
        $('.patient-discharge-card').removeClass('hide')
    }
}
patient_discharge_show_hide()
$(document).on('change', '#patient_discharge', patient_discharge_show_hide)
// patient discharge - end

window.onload = function() {
    window.initializeSelect2('#IdUsersResponsible', $('#IdUsersResponsible-id').val(), $('#IdUsersResponsible-title').val(), $('select[data-select-url]').attr('data-select-url'));
    window.initializeSelect2('#IdUsersResponsibleScreenings', $('#IdUsersResponsibleScreenings-id').val(), $('#IdUsersResponsibleScreenings-title').val(), $('select[data-select-url]').attr('data-select-url'));
    window.initializeSelect2('#IdUsersResponsibleAppointments', $('#IdUsersResponsibleAppointments-id').val(), $('#IdUsersResponsibleAppointments-title').val(), $('select[data-select-url]').attr('data-select-url'));
    window.initializeSelect2('#IdUsersResponsiblePatientDischarge', $('#IdUsersResponsiblePatientDischarge-id').val(), $('#IdUsersResponsiblePatientDischarge-title').val(), $('select[data-select-url]').attr('data-select-url'));
    window.initializeSelect2('#IdUsersResponsibleProcedures_view', $('#IdUsersResponsibleProcedures_view-id').val(), $('#IdUsersResponsibleProcedures_view-title').val(), $('select[data-select-url]').attr('data-select-url'));
    window.initializeSelect2('#IdUsersResponsiblePescription_view', $('#IdUsersResponsiblePescription_view-id').val(), $('#IdUsersResponsiblePescription_view-title').val(), $('select[data-select-url]').attr('data-select-url'));
    window.initializeSelect2('#IdCid10_view', $('#IdCid10_view-id').val(), $('#IdCid10_view-title').val(), $('select[data-select-cid10-url]').attr('data-select-cid10-url'));
    window.initializeSelect2('#IdProcedures_view', $('#IdProcedures_view-id').val(), $('#IdProcedures_view-title').val(), $('select[data-select-procedures-url]').attr('data-select-procedures-url'));
}