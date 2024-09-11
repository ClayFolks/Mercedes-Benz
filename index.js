$(document).ready(function(){

var nav_height = $('#nav').height();

// Toggle visibility of the NAV boxes on button click
//vehicles
$("#vehicles").click(function(){
    $('#vehicle_box').css('top' , $('#nav').position().top + nav_height + 20);
    $("#vehicle_box").toggle('slow');
});
//shopping
$("#shopping").click(function(){
    $('#shopping_box').css('top' , $('#nav').position().top + nav_height + 20);
    $("#shopping_box").toggle('slow');
});
//electric
$("#electric").click(function(){
    $('#electric_box').css('top' , $('#nav').position().top + nav_height + 20);
    $("#electric_box").toggle('slow');
});
//search_box
$("#magnifier").click(function(){
    $('#search_box').css('top' , $('#nav').position().top + nav_height + 20);
    $("#search_box").toggle('slow');
});
//dealer_box
$("#find_dealer").click(function(){
    $('#dealer_box').css('top' , $('#nav').position().top + nav_height + 20);
    $("#dealer_box").toggle('slow');
});
//account_box
$("#my_account").click(function(){
    $('#account_box').css('top' , $('#nav').position().top + nav_height + 20);
    $("#account_box").toggle('slow');
});

// Hide the boxes if clicked outside
$(document).click(function(event) {
    // Hide electric box if clicked outside
    if (!$(event.target).closest("#electric_box, #electric").length) {
        $("#electric_box").hide('slow');
    }
    // Hide electric box if clicked outside
    if (!$(event.target).closest("#shopping_box, #shopping").length) {
        $("#shopping_box").hide('slow');
    }
    // Hide electric box if clicked outside
    if (!$(event.target).closest("#vehicle_box, #vehicles").length) {
        $("#vehicle_box").hide('slow');
    }
    // Hide search box if clicked outside
    if (!$(event.target).closest("#search_box, #magnifier").length) {
        $("#search_box").hide('slow');
    }
    // Hide dealer box if clicked outside
    if (!$(event.target).closest("#dealer_box, #find_dealer").length) {
        $("#dealer_box").hide('slow');
    }
    // Hide account box if clicked outside
    if (!$(event.target).closest("#account_box, #my_account").length) {
        $("#account_box").hide('slow');
    }
});

// Prevent event from bubbling up when clicking on the boxes
$("#search_box, #dealer_box, #account_box").click(function(event){
    event.stopPropagation();
});


//_________Scroll Event_______________

var position = 0; //global variable
var slide_height = $('.slide').eq(0).height(); // prevent to using constant value as slide height

$(window).on('scroll' , (event)=>{

    var current_pos = $(window).scrollTop();
    //Scroll UP
    if(current_pos - position < 0){
        $('#nav').show();   
        
    }

    //Scroll Down
    else{
        $('#nav').hide();
        $('.menu_boxes').hide('slow');
    }

    position = current_pos; //update latest value of position.

    //__________Handle Slider Indicators______________

    var activated_indicator = Math.floor(position / (slide_height - 100)); //the result is the index of indicator (0,1,2)
    $('.nested_indicator_sign').css('background-color' , 'white');
    $('.nested_indicator_sign').eq(activated_indicator).css('background-color' , 'dodgerblue');
    
})

//______________body-slider Handling__________________
    let currentIndex = 0;

    function showSlide(index) {
        const images = document.querySelectorAll('.images img');
        const texts = document.querySelectorAll('.article');

        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });

        texts.forEach((text, i) => {
            text.classList.toggle('blur', i !== index);
            text.classList.toggle('active', i === index);
        });

        currentIndex = index;
    }

    function nextSlide() {
        const images = document.querySelectorAll('.images img');
        showSlide((currentIndex + 1) % images.length);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Initial display
    showSlide(currentIndex);



}); //document.ready END