/******************************************

	Filmbyen font and masonry setup | v.0.1

*******************************************/


//init masonry if webfonts have been loaded
var grid;
function triggerMasonry() {
  if (!grid) { 
  	return; 
  }
  grid.masonry({
    columnWidth: '.grid-sizer',
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  transitionDuration: '0'
  });
}

//setup webfont and trigger masonry
WebFontConfig = {
  google: { families: [ 'Francois+One::latin' ] },
  active: triggerMasonry
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();