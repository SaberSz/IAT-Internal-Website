
$('body').on('click','a[href^="#"]',function(event){
    event.preventDefault();
    var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
    //change this number to create the additional off set        
    var customoffset = 112;
    $('html, body').animate({scrollTop:target_offset - customoffset}, 500);
});

(function($) {
    
    $('.multilevel .dropdown-menu > *').on('mouseenter click', function(e) {
        
        var elem = $(this);
        
        // Hide all other dropdowns
        
        elem.parent().find('.dropdown-menu').removeClass('show');
        
        // Show the corresponding menu
        
        let menu = elem.find('.dropdown-menu').first();
        
        if (menu.length) {
            // This is a dropdown menu toggle. Show the menu
            // and prevent it from closing on click.
            menu.addClass('show');
            e.stopPropagation();
        }
        
    });
    
    $('body').click( function() {
        // When the body is clicked, hide all multilevel dropdowns.
        $('.multilevel .dropdown-menu').removeClass('show');
    });
    
})(jQuery);