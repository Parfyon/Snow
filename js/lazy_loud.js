var target  = document.querySelector('.blocks');

var options = {
	root: null,
	rootMargin: '0px',
	treshold: 1.0
}

var callback = function(entries, observer) { 
  entries.forEach(entry => {
  	alert('df');
  });
};

var observer = new IntersectionObserver(callback, options);
observer.observe(target);