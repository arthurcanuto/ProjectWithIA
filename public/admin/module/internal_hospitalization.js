// main
function list_main_cid() {
    const code = $('#code_main_filter').val();
    const title = $('#title_main_filter').val();
    const IdCid10 = $('#IdCid10Main').val();
  
    if (code !== undefined && title !== undefined && IdCid10 !== undefined && (code.length > 0 || title.length > 0 || IdCid10.length > 0)) {
        axios.get($('#IdCid10Main').attr('url-query'), {params: {code, title, IdCid10}}).then(res => {
            const data = res.data;
            let optionsHtml = "";

            if (data.length > 0) {
            for (let i in data) {
                optionsHtml += `<option value='${data[i].IdCid10}'>${data[i].code} • ${data[i].title}</option>`;
            }
            } else {
            optionsHtml = '<option value="">...</option>';
            }
            $('#IdCid10Main').html(optionsHtml);
        }).catch(error => console.log(error));
    }
}
  
list_main_cid()

$(document).on('keyup', '#code_main_filter', function(){
    list_main_cid()
})

$(document).on('keyup', '#title_main_filter', function(){
    list_main_cid()
})

// Secondary
function list_secondary_cid() {
    const code = $('#code_secondary_filter').val();
    const title = $('#title_secondary_filter').val();
    const IdCid10 = $('#IdCid10Secondary').val();
  
    if (code !== undefined && title !== undefined && IdCid10 !== undefined && (code.length > 0 || title.length > 0 || IdCid10.length > 0)) {
        axios.get($('#IdCid10Secondary').attr('url-query'), {params: {code, title, IdCid10}}).then(res => {
            const data = res.data;
            let optionsHtml = "";

            if (data.length > 0) {
            for (let i in data) {
                optionsHtml += `<option value='${data[i].IdCid10}'>${data[i].code} • ${data[i].title}</option>`;
            }
            } else {
            optionsHtml = '<option value="">...</option>';
            }
            $('#IdCid10Secondary').html(optionsHtml);
        }).catch(error => console.log(error));
    }
}
  
list_secondary_cid()

$(document).on('keyup', '#code_secondary_filter', function(){
    list_secondary_cid()
})

$(document).on('keyup', '#title_secondary_filter', function(){
    list_secondary_cid()
})

// associated causes
function list_associated_causes_cid() {
    const code = $('#code_associated_causes_filter').val();
    const title = $('#title_associated_causes_filter').val();
    const IdCid10 = $('#IdCid10AssociatedCauses').val();

    if (code !== undefined && title !== undefined && IdCid10 !== undefined && (code.length > 0 || title.length > 0 || IdCid10.length > 0)) {
        axios.get($('#IdCid10AssociatedCauses').attr('url-query'), {params: {code, title, IdCid10}}).then(res => {
            const data = res.data;
            let optionsHtml = "";

            if (data.length > 0) {
            for (let i in data) {
                optionsHtml += `<option value='${data[i].IdCid10}'>${data[i].code} • ${data[i].title}</option>`;
            }
            } else {
            optionsHtml = '<option value="">...</option>';
            }
            $('#IdCid10AssociatedCauses').html(optionsHtml);
        }).catch(error => console.log(error));
    }
}
  
list_associated_causes_cid()

$(document).on('keyup', '#code_associated_causes_filter', function(){
    list_associated_causes_cid()
})

$(document).on('keyup', '#title_associated_causes_filter', function(){
    list_associated_causes_cid()
})

// medical certificate
function list_medical_certificate_cid() {
    const code = $('#code_medical_certificate_filter').val();
    const title = $('#title_medical_certificate_filter').val();
    const IdCid10 = $('#IdCid10MedicalCertificate').val();
  
    if (code !== undefined && title !== undefined && IdCid10 !== undefined && (code.length > 0 || title.length > 0 || IdCid10.length > 0)) {
        axios.get($('#IdCid10MedicalCertificate').attr('url-query'), {params: {code, title, IdCid10}}).then(res => {
            const data = res.data;
            let optionsHtml = "";

            if (data.length > 0) {
                for (let i in data) {
                    optionsHtml += `<option value='${data[i].IdCid10}'>${data[i].code} • ${data[i].title}</option>`;
                }

            } else {
                optionsHtml = '<option value="">...</option>';
            }

            optionsHtml = `${optionsHtml} <option value="">...</option>`;

            $('#IdCid10MedicalCertificate').html(optionsHtml);
        }).catch(error => console.log(error));
    }
}
  
list_medical_certificate_cid()

$(document).on('keyup', '#code_medical_certificate_filter', function(){
    list_medical_certificate_cid()
})

$(document).on('keyup', '#title_medical_certificate_filter', function(){
    list_medical_certificate_cid()
})