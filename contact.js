const renderContact = (data) => {
  $('.content').empty();
  var myDiv = document.getElementById('content');
  myDiv.innerHTML = (
  	'<a id="contact"></a>'+
	'<div class="contact-body">'+
		'<h1>' + data.title + '</h1>'+
		'<p>'+ data.titleComment  +'</p>'+
		'<div id="contact-form">'+
			'<div class="form-row">'+
				'<input type="text" class="input-text" id="contact-name" placeholder="name" />'+
				'<label class="label-helper" for="input">name</label>'+
			'</div>'+
			'<div class="form-row">'+
				'<input type="email" class="input-text" id="contact-email" placeholder="email" />'+
				'<label class="label-helper" for="input">email</label>'+
			'</div>'+
			'<div class="form-row">'+
				'<textarea type="paragraph" class="input-text" id="contact-message" placeholder="message" ></textarea>'+
				'<label class="label-helper" for="input">message</label>'+
			'</div>'+
			'<div id="contact-button"> Submit</div>'+
		'<div>'+
	'</div>'
  );

}

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