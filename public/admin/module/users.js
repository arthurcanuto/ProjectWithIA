function list_cbo_specialties() {
    const code = $('#code_cbo_specialties_filter').val();
    const title = $('#title_cbo_specialties_filter').val();
    const IdCboSpecialties = $('#IdCboSpecialties').val();
  
    if (code !== undefined && title !== undefined && IdCboSpecialties !== undefined && (code.length > 0 || title.length > 0 || IdCboSpecialties.length > 0)) {
        axios.get($('#IdCboSpecialties').attr('url-query'), {params: {code, title, IdCboSpecialties}}).then(res => {
            const data = res.data;
            let optionsHtml = "";

            if (data.length > 0) {
            for (let i in data) {
                optionsHtml += `<option value='${data[i].IdCboSpecialties}'>${data[i].code} • ${data[i].title}</option>`;
            }
            } else {
            optionsHtml = '<option value="">...</option>';
            }
            $('#IdCboSpecialties').html(optionsHtml);
        }).catch(error => console.log(error));
    }
}
  
list_cbo_specialties()

$(document).on('keyup', '#code_cbo_specialties_filter', function(){
    list_cbo_specialties()
})

$(document).on('keyup', '#title_cbo_specialties_filter', function(){
    list_cbo_specialties()
})