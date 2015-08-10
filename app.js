var app = angular.module('gallery', [])

app.controller('PanelCtrl', function(){
	this.tab = 1
	this.selectTab = function(tab){
		this.tab = tab
	}
	this.isSelected = function(checkTab){
		return this.tab === checkTab
	}
	this.categories = categories
	this.current = 0
	this.setCurrent = function(num){
		this.current = num || 0
	}
	this.isCurrent = function(num){
		return this.current === num
	}
})

// app.controller('PaintingCtrl', function(){
// 	this.
// })


var categories = [
	{category: "paintings", paintings: []},
	{category: "mixed media", paintings: [
		{name: "Flower and Memory", img: "public/Mixed-Media/FLOWER AND MEMORY 15x20in.jpg"},
		// {name: "Generative Green", img: "public/Mixed-Media/Generative Green    on panel   15x16in.tif"},
		{name: "Shower", img: "public/Mixed-Media/SHOWER  panel   12x12in.JPG"},
		{name: "Young Woman in Feathered Hat", img: "public/Mixed-Media/YOUNG WOMAN IN FEATHERED HAT 48x48in.JPG"}
	]},
	{category: "pastels", paintings: [
		{name: "Hydrangeas Canvas", img: "public/Pastel/HYDRANGEAS    canvas   10x10in.JPG"},
		{name: "Hydrangeas (Mixed Color)", img: "public/Pastel/HYDRANGEAS (mixed color) 10x10in.JPG"},
		{name: "Morning with Book", img: "public/Pastel/MORNING WITH BOOK pastel on paper.JPG"}
	]},
	{category: "monotypes", paintings: [
		{name: "Landscape with Tree", img: "public/Monotype/Landscape with Tree   monotype.Jpg"},
		{name: "Race", img: "public/Monotype/Race (monotype on paper) 12.5x5.75 image.jpg"},
		{name: "Undressing", img: "public/Monotype/UNDRESSING     13x 10in.JPG"},
		{name: "Yellow Roses", img: "public/Monotype/YELLOW ROSES monotype 14x16.5in.jpg"}
	]},
	{category: "drawings", paintings: [
		{name: "Conversation", img: "public/Drawings/CONVERSATION  charcoal and  red chalk   48x24in  1979.jpg"},
		{name: "Geranium (Brown Chalk)", img: "public/Drawings/Geranium (brown chalk).jpg"},
		{name: "Geranium Re-Potted", img: "public/Drawings/Geranium Re-potted    brown chalk on white paper.JPG"},
		{name: "Goodbye to Sodom (Homage to Akmatova)", img: "public/Drawings/Goodbye to Sodom (Homage to Akmatova) lithograph 16.5x11in.JPG"}
	]},
	{category: "flowers", paintings: [
		{name: "Anemone Triptych", img: "public/Flowers/ANEMONE TRIPTYCH   48''x48''.JPG"},
		{name: "Anemones", img: "public/Flowers/ANEMONES 44x44in.JPG"},
		{name: "Daffodils and Vase", img: "public/Flowers/Daffodils and Vase   chalk pencil paint  9x12in.JPG"},
		{name: "Geraniums out of Florence", img: "public/Flowers/Geraniums out of Florence 24x48in.jpg"},
		{name: "Pink and Blue Hydrangeas", img: "public/Flowers/PINK AND BLUE HYDRANGEAS    8x10 in.jpg"},
		{name: "Postcard from Lucca", img: "public/Flowers/POSTCARD FROM LUCCA 24x32in.tif"}
	]},
	{category: "trees", paintings: [
		{name: "Green View", img: "public/Tree/GREEN VIEW.jpg"},
		{name: "Grove", img: "public/Tree/GROVE  9 x 12 in.jpg"},
		{name: "Spring on the Hill", img: "public/Tree/Spring on the hill    pastel.JPG"},
		{name: "Trees", img: "public/Tree/TREES  oil   60x24in.JPG"}
	]},
	{category: "landscapes", paintings: []},
	{category: "urban landscapes", paintings: [
		{name: "City", img: "public/Urban-Landscape/CITY   12x9in.jpg"}
	]},
	{category: "history, philosophy, etc.", paintings: [
		{name: "Corsage", img: "public/History-Philosophy/CORSAGE  27.75x47in.JPG"},
		{name: "Dance of the Oospheres", img: "public/History-Philosophy/Dance of the oospheres.JPG"},
		{name: "Freud's London Library", img: "public/History-Philosophy/FREUDS LONDON LIBRARY  16x23 in.JPG"},
		{name: "Introspection is no Longer Epistemically Privileged", img: "public/History-Philosophy/Introspection is no longer Epistemically Privileged 16x23 in 001 (931x1280) (2).jpg"}
	]},
	{category: "people", paintings: [
		{name: "Book and Coffee", img: "public/People/BOOK AND COFFE   triptych  48x48in.JPG"},
		{name: "Hart", img: "public/People/HART   9 x11in.jpg"},
		{name: "Hart in Black Jacket", img: "public/People/HART IN BLACK JACKET  48x48in.Jpg"},
		{name: "Mika", img: "public/People/MIKA  red chalk.jpg"},
		{name: "Painter's Sister", img: "public/People/Painter's Sister  monotype.JPG"},
		{name: "Rose Eisenberg Wool, Painter's Mother", img: "public/People/Rose Eisenberg Wool, Painter's Mother.JPG"},
		{name: "Self Portrait", img: "public/People/SELF-PORTRAIT.jpg"}
	]},
	{category: "horses", paintings: [
		{name: "After the ball", img: "public/Horses/AFTER THE BALL.jpg"}, 
		{name: "Blondie and Tcherepnine", img: "public/Horses/BLONDIE AND TCHEREPNINE  9x20in.jpg"}, 
		{name: "Chukker", img: "public/Horses/CHUKKER  12x16in.JPG"},
		{name: "Chukker 2", img: "public/Horses/CHUKKER 2  12x16in.JPG"},
		{name: "Match", img: "public/Horses/MATCH      8x10in.JPG"},
		{name: "Mika Transported", img: "public/Horses/MIKA TRANSPORTED     60x96in.JPG"},
		{name: "Present Time Transported", img: "public/Horses/PRESENT TIME TRANSPORTED  (6' x 7' - 1985).JPG"},
		{name: "Riders", img: "public/Horses/RIDERS (monotype)11.75x10.5 in.JPG"},
		{name: "The Hunt", img: "public/Horses/THE HUNT   16x20in.JPG"},
		{name: "Yes, my Darling Jumps", img: "public/Horses/Yes, my Darling Jumps   9x16in.JPG"}
	]},
	{category: "prints", paintings: [
		{name: "Dressing", img: "public/Print/DRESSING , diazo print  10x14in  1988.jpg"},
		{name: "Joy of Dolphins and More Joy of Dolphins", img: "public/Print/THE JOY OF DOLPHINS AND MORE JOY OF DOLPHINS   serigraph    29.5zx38in  image.JPG"}
	]},
	{category: "mural sketches", paintings: [
		{name: "Goodbye to Sheba", img: "public/Mural-Sketches/Goodbye to Sheba  60x84in.jpg"},
		{name: "Goodbye to Solomon", img: "public/Mural-Sketches/Goodbye to Solomon 60x84in.jpg"},
		{name: "Grove Mural Proposal", img: "public/Mural-Sketches/GROVE   mural proposal for 30 Crosby.JPG"},
		{name: "Study for the Guide to the Later Crises of Life ", img: "public/Mural-Sketches/Study for the Guide to the Later Crises of Life (26'' x 38'', 1972 -  chalk and oil).jpg"}
	]},
	{category: "books", paintings: []},
	{category: "early paintings", paintings: [
		{name: "Test to the Meaning", img: "public/Early Painting/Test to the Meaning 72 x96in.JPG"},
		{name: "The Leisure Time Graces", img: "public/Early Painting/THE LEISURE TIME GRACES   oil.Jpg"},
		{name: "Tiger Tiger Burning Bright", img: "public/Early Painting/Tiger tiger burning Bright   oil     8x10in.JPG"},
		{name: "Younger Girls at Baalbec", img: "public/Early Painting/YOUNGER GIRLS AT BAALBEC  48inx48in.jpg"}
	]},
	{category: "Shakespeare, Bible, etc.", paintings: []}]


