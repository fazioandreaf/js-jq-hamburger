function openHM() {
    $('.fa-bars').click(function(){
        // $('.hamburger-menu').css('display','block'); Stesso risultato
        $('.hamburger-menu').show();
    }
    )
}function closeHM() {
    $('.fa-times').click(function(){
        $('.hamburger-menu').hide(); 
    }
    )
}

openHM()
closeHM()
