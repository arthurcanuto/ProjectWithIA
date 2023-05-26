// This function checks if a tab is locked (i.e., disabled) based on whether the textarea in that tab has any content
function is_lock() {
    
    $('a[data-wizard-step]').removeClass('done')
    $('a[data-wizard-step]').removeClass('active-wizard')

    // Loop through each anchor tag with a 'data-wizard-step' attribute
    $('a[data-wizard-step]').each(function(index) {
        index = index + 1
        var textarea = $('#bootstrap-wizard-validation-tab'+index+' textarea')
        var textarea_val = textarea.val()

        // If the textarea is empty, disable the tab
        if(textarea_val.length == 0){
            $(this).attr('disabled', true);
        }else{
            // Otherwise, enable the tab
            $(this).removeAttr('disabled')
            $(this).addClass('done')

            if($(this).hasClass('active')) {
                $(this).removeClass('active')
                $(this).addClass('active')
                $(this).removeClass('done')
            }
        }
    });
}

// Call the is_lock function to initialize the locked tabs when the page loads
is_lock()

// This function handles navigating to the next or previous tab based on the 'operator' parameter (+ for next, - for previous)
function tap_position(operator) {

    // Call the is_lock function to update the locked tabs before navigating
    is_lock()

    // Get the current tab position and textarea content
    var current_position = parseInt($('.service-care.active').attr('tab-position'));
    var current_tab = $('.service-care.active')
    var current_textarea = $(current_tab.attr('href')+' textarea')
    var textarea_val = current_textarea.val()

    // Calculate the new position based on the operator (+ or -)
    var new_position = operator === '+' ? current_position + 1 : current_position - 1;
    var next_position = operator === '+' ? new_position + 1 : new_position - 1;

    var $new_tab = $('a[tab-position="' + new_position + '"]');
    var $next_tab = $('a[tab-position="' + next_position + '"]');

    // Remove any validation error styling from all textareas
    $('.tab-pane textarea').removeClass('is-invalid')
    $('.nav-link.service-care').removeClass('is-invalid-wizard')
    $('.nav-link.service-care').removeClass('is-invalid-wizard-all')

    // If the current tab is locked and the textarea is empty, prevent navigation to the next tab
    if(current_tab.attr("disabled", true) && (textarea_val.length == 0) && (operator === '+')){
        current_textarea.addClass('is-invalid')
        $('.service-care.active').addClass('is-invalid-wizard')
        return false;
    }

    if ($new_tab.length) {
        $('a.active[data-wizard-step="data-wizard-step"]').removeClass('active');
        $('.tab-pane.service-tab').removeClass('active');

        var tab_card = $new_tab.attr('href')
        $(tab_card).addClass('active');

        $new_tab.addClass('active');
    } else {
        if (operator === '+') {
            $('#next-wizard').hide();
        } else if (operator === '-') {
            $('#prev-wizard').hide();
        }
    }

    // If there is a next tab, show the 'previous' and 'next' buttons
    if ($next_tab.length) {
        $('#prev-wizard').show();
        $('#next-wizard').show();
    } else {
        if (operator === '+') {
            $('#next-wizard').hide();
        } else if (operator === '-') {
            $('#prev-wizard').hide();
        }
    }

    is_lock()
}

function validation_wizard() {
    is_lock()
    $('.nav-link.service-care').removeClass('is-invalid-wizard-all')
    $('a[data-wizard-step="data-wizard-step"][disabled]').addClass('is-invalid-wizard-all')
    $('.service-care.active').addClass('is-invalid-wizard')
}

$(document).on('click', 'a[data-wizard-step="data-wizard-step"]', function(){
    is_lock()
})