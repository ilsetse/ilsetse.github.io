// masonry
// external js:
var grid = $('.grid');
grid.imagesLoaded()
	.done(function(){
		$('.grid').masonry({
			itemSelector: '.grid-item',
			isFitWidth: true // fill page width
		});
	});


/*
// pdfobject
var options = {
  pdfOpenParams: {
    navpanes: 1,
    view: "FitH",
    pagemode: "thumbs"
  }
};

PDFObject.embed("assets/cv.pdf", "#cv", options);
*/
