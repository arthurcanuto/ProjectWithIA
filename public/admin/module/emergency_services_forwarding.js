
function list_procedures_forwarding() {
    const code = $('#code_procedures_filter').val();
    const title = $('#title_procedures_filter').val();
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

$(document).on('keyup', '#title_procedures_filter', function(){
    list_procedures_forwarding()
})

$(document).on('keyup', '#code_procedures_filter', function(){
    list_procedures_forwarding()
})

// specialties categories
function list_specialties_categories_forwarding() {

    const title = $('#title_specialties_categories_filter').val();
    const IdSpecialtiesCategories = $('#IdSpecialtiesCategories').val();
  
    if (title !== undefined && IdSpecialtiesCategories !== undefined && (title.length > 0 || IdSpecialtiesCategories.length > 0)) {
        axios.get($('#IdSpecialtiesCategories').attr('url-query'), {params: {title, IdSpecialtiesCategories}}).then(res => {
            const data = res.data;
            let optionsHtml = "";
            if (data.length > 0) {
            for (let i in data) {
                optionsHtml += `<option value='${data[i].IdSpecialtiesCategories}'>${data[i].title}</option>`;
            }
            } else {
            optionsHtml = '<option value="">...</option>';
            }
            $('#IdSpecialtiesCategories').html(optionsHtml);
        }).catch(error => console.log(error));
    }
}

$(document).on('keyup', '#title_specialties_categories_filter', function(){
    list_specialties_categories_forwarding()
})