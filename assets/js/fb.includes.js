/**
 * Filmbyen includes: setup google font and masonry
 * Version: 0.1
 */

var grid;
document.documentElement.className += ' wf-loading'; //insert loading-class to avoid FOUT

function triggerMasonry() {
  if (!grid) { 
  	return; 
  }
  grid.masonry({
    columnWidth: '.grid-sizer',
	  itemSelector: '.grid-item',
	  percentPosition: true,
    isResizeBound: false,
	  transitionDuration: '0'
  });
}

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