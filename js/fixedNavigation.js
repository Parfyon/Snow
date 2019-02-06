window.onload = function() {

	window.onscroll = handler;
	var fig = document.querySelector('.fig');
	var fixedNav = document.querySelector('.fig .container');

	function handler() {
		if (window.pageYOffset>100) {
			fig.style.display = 'block';
			fixedNav.style.display = 'flex';
		}else {
			fig.style.display = 'none';
			fixedNav.style.display = 'none';
		}
	}
}