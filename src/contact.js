const sanitize = (input) => {
		var output = input.replace(/<script[^>]*?>.*?<\/script>/gi, '').
					 replace(/<[\/\!]*?[^<>]*?>/gi, '').
					 replace(/<style[^>]*?>.*?<\/style>/gi, '').
					 replace(/<![\s\S]*?--[ \t\n\r]*>/gi, '');
	    return output;
	};
const contactData = {};

$(document).on('keyup', '#contact-name, #contact-email, #contact-message', () => {
	contactData.name = sanitize($('#contact-name').val());
	contactData.email = sanitize($('#contact-email').val());
	contactData.message = sanitize($('#contact-message').val());

	
})

$(document).on('click','#contact-button', ()=>{
		let data = new URLSearchParams();
    data.append('data', JSON.stringify(contactData));
    axios.post("https://script.google.com/macros/s/AKfycbwRCybkl-pagFutTaDWiudhQ_wsEbWg_b84FNJ6XomdNbHEcFI/exec",data).then((response) => {
	    $('#contact-name').val('');
		  $('#contact-email').val('');
		  $('#contact-message').val('');
    })
})

$(document).on('click', '#about-btn', function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 1500);
});

$(document).on('click', '#portfolio-btn', function() {
    $('html, body').animate({
        scrollTop: $("#portfolio-header").offset().top
    }, 1500);
});

$(document).on('click', '#contact-btn', function() {
    $('html, body').animate({
        scrollTop: $(".contact-body").offset().top
    }, 1500);
});