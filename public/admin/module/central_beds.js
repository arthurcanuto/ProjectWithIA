$(document).on('change', '.central-beds', function(){
    
    let url = $(this).attr('data-url')
    let IdBeds = $(this).val()

    console.log(IdBeds)

    axios.post(url, {IdBeds}).then(function(res) {
        modal_info('Sucesso', '', 'Ação realizada com sucesso', 'bg-primary')
        window.reload_iframe()
        window.count_total_menu()
    })

})