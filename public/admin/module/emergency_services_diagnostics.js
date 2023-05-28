function list_cid() {
    const code = $('#code_filter').val();
    const title = $('#title_filter').val();
    const IdCid10 = $('#IdCid10').val();
  
    if (code !== undefined && title !== undefined && IdCid10 !== undefined && (code.length > 0 || title.length > 0 || IdCid10.length > 0)) {
        axios.get($('#IdCid10').attr('url-query'), {params: {code, title, IdCid10}}).then(res => {
            const data = res.data;
            let optionsHtml = "";

            if (data.length > 0) {
            for (let i in data) {
                optionsHtml += `<option value='${data[i].IdCid10}'>${data[i].code} • ${data[i].title}</option>`;
            }
            } else {
            optionsHtml = '<option value="">...</option>';
            }
            $('#IdCid10').html(optionsHtml);
        }).catch(error => console.log(error));
    }
}
  
list_cid()

$(document).on('keyup', '#code_filter', function(){
    list_cid()
})

$(document).on('keyup', '#title_filter', function(){
    list_cid()
})