function reload() {
    
    let url = $('#historic-table').attr('url')

    axios.get(url).then(function(res) {
       
        const data = res.data
        if(data != null && data != ''){
            $('#historic-table').html(data.html_history)

            $('#name-call').html(data.name)
            $('#sala-call').html(data.sala)
            
            if(data.status == 'a'){
                alert_song()
                status_set(data.url_status)
            }
        }
    })
}

window.onload = function() {
    reload()

    setInterval(function() {
        reload()
    }, 5000);
}

function alert_song() {
    let url = $('#button-sound').attr('data-audio');
    let audio = new Audio(url);
    audio.play();
}

$(document).on('click', '#button-sound', function(e){
    $(this).addClass('hide')
    alert_song()
})

function status_set(url) {
    axios.get(url).then(function(res) {})
}

// cals time
$(document).ready(function() {
    // Atualiza a hora e a data imediatamente após a página carregar
    updateTimeAndDate();
    
    // Atualiza a hora e a data a cada minuto
    setInterval(updateTimeAndDate, 60000);
});
  
function updateTimeAndDate() {
    // Cria um objeto Date com a hora e a data atual
    let currentTime = new Date();
    
    // Formata a hora como "hh:mm"
    let hours = addLeadingZero(currentTime.getHours());
    let minutes = addLeadingZero(currentTime.getMinutes());
    let formattedTime = `${hours}:${minutes}`;
    
    // Formata a data como "dd/mm"
    let day = addLeadingZero(currentTime.getDate());
    let month = addLeadingZero(currentTime.getMonth() + 1); // Precisamos adicionar 1 porque o mês começa em zero (janeiro)
    let formattedDate = `${day}/${month}`;
    
    // Atualiza o conteúdo das spans com a hora e a data formatadas
    $("#current-time").text(formattedTime);
    $("#current-date").text(formattedDate);
}
  
function addLeadingZero(number) {
    // Adiciona um zero à esquerda para números menores que 10
    return number < 10 ? `0${number}` : number;
}
  