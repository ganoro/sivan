function faq_showQuestion(id) {
	if(document.getElementById('faq-question-'+id).style.display == "none") {
		document.getElementById('faq-question-'+id).style.display="block";
	} else {
		document.getElementById('faq-question-'+id).style.display="none";
	}
}