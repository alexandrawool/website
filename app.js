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


var categories = [
	{category: "paintings", paintings: []},
	{category: "mixed media", paintings: [
		{name: "flower and memory", img: "public/Mixed-Media/FLOWER AND MEMORY 15x20in.jpg"},
		{name: "generative green", img: "public/Mixed-Media/Generative_Green_on_panel_15x16in.jpg"},
		{name: "shower", img: "public/Mixed-Media/SHOWER  panel   12x12in.JPG"},
		{name: "young woman in feathered hat", img: "public/Mixed-Media/YOUNG WOMAN IN FEATHERED HAT 48x48in.JPG"}
	]},
	{category: "pastels", paintings: [
		{name: "hydrangeas canvas", img: "public/Pastel/HYDRANGEAS    canvas   10x10in.JPG"},
		{name: "hydrangeas (mixed color)", img: "public/Pastel/HYDRANGEAS (mixed color) 10x10in.JPG"},
		{name: "morning with book", img: "public/Pastel/MORNING WITH BOOK pastel on paper.JPG"}
	]},
	{category: "monotypes", paintings: [
		{name: "landscape with tree", img: "public/Monotype/Landscape with Tree   monotype.Jpg"},
		{name: "race", img: "public/Monotype/Race (monotype on paper) 12.5x5.75 image.jpg"},
		{name: "undressing", img: "public/Monotype/UNDRESSING     13x 10in.JPG"},
		{name: "yellow roses", img: "public/Monotype/YELLOW ROSES monotype 14x16.5in.jpg"}
	]},
	{category: "drawings", paintings: [
		{name: "conversation", img: "public/Drawings/CONVERSATION  charcoal and  red chalk   48x24in  1979.jpg"},
		{name: "geranium (brown chalk)", img: "public/Drawings/Geranium (brown chalk).jpg"},
		{name: "geranium re-potted", img: "public/Drawings/Geranium Re-potted    brown chalk on white paper.JPG"},
		{name: "goodbye to sodom (homage to akmatova)", img: "public/Drawings/Goodbye to Sodom (Homage to Akmatova) lithograph 16.5x11in.JPG"}
	]},
	{category: "flowers", paintings: [
		{name: "anemone triptych", img: "public/Flowers/ANEMONE TRIPTYCH   48''x48''.JPG"},
		{name: "anemones", img: "public/Flowers/ANEMONES 44x44in.JPG"},
		{name: "daffodils and vase", img: "public/Flowers/Daffodils and Vase   chalk pencil paint  9x12in.JPG"},
		{name: "geraniums out of florence", img: "public/Flowers/Geraniums out of Florence 24x48in.jpg"},
		{name: "pink and blue hydrangeas", img: "public/Flowers/PINK AND BLUE HYDRANGEAS    8x10 in.jpg"},
		{name: "postcard from lucca", img: "public/Flowers/POSTCARD_FROM_LUCCA_24x32in.jpg"}
	]},
	{category: "trees", paintings: [
		{name: "green view", img: "public/Tree/GREEN VIEW.jpg"},
		{name: "grove", img: "public/Tree/GROVE  9 x 12 in.jpg"},
		{name: "spring on the hill", img: "public/Tree/Spring on the hill    pastel.JPG"},
		{name: "trees", img: "public/Tree/TREES  oil   60x24in.JPG"}
	]},
	{category: "landscapes", paintings: []},
	{category: "urban landscapes", paintings: [
		{name: "city", img: "public/Urban-Landscape/CITY   12x9in.jpg"}
	]},
	{category: "history, philosophy, etc.", paintings: [
		{name: "corsage", img: "public/History-Philosophy/CORSAGE  27.75x47in.JPG"},
		{name: "dance of the oospheres", img: "public/History-Philosophy/Dance of the oospheres.JPG"},
		{name: "freud's london library", img: "public/History-Philosophy/FREUDS LONDON LIBRARY  16x23 in.JPG"},
		{name: "introspection is no longer epistemically privileged", img: "public/History-Philosophy/Introspection is no longer Epistemically Privileged 16x23 in 001 (931x1280) (2).jpg"}
	]},
	{category: "people", paintings: [
		{name: "book and coffee", img: "public/People/BOOK AND COFFE   triptych  48x48in.JPG"},
		{name: "hart", img: "public/People/HART   9 x11in.jpg"},
		{name: "hart in black jacket", img: "public/People/HART IN BLACK JACKET  48x48in.Jpg"},
		{name: "mika", img: "public/People/MIKA  red chalk.jpg"},
		{name: "painter's sister", img: "public/People/Painter's Sister  monotype.JPG"},
		{name: "rose eisenberg wool, painter's mother", img: "public/People/Rose Eisenberg Wool, Painter's Mother.JPG"},
		{name: "self portrait", img: "public/People/SELF-PORTRAIT.jpg"}
	]},
	{category: "horses", paintings: [
		{name: "after the ball", img: "public/Horses/AFTER THE BALL.jpg"}, 
		{name: "blondie and tcherepnine", img: "public/Horses/BLONDIE AND TCHEREPNINE  9x20in.jpg"}, 
		{name: "chukker", img: "public/Horses/CHUKKER  12x16in.JPG"},
		{name: "chukker 2", img: "public/Horses/CHUKKER 2  12x16in.JPG"},
		{name: "match", img: "public/Horses/MATCH      8x10in.JPG"},
		{name: "mika transported", img: "public/Horses/MIKA TRANSPORTED     60x96in.JPG"},
		{name: "present time transported", img: "public/Horses/PRESENT TIME TRANSPORTED  (6' x 7' - 1985).JPG"},
		{name: "riders", img: "public/Horses/RIDERS (monotype)11.75x10.5 in.JPG"},
		{name: "the hunt", img: "public/Horses/THE HUNT   16x20in.JPG"},
		{name: "yes, my darling jumps", img: "public/Horses/Yes, my Darling Jumps   9x16in.JPG"}
	]},
	{category: "prints", paintings: [
		{name: "dressing", img: "public/Print/DRESSING , diazo print  10x14in  1988.jpg"},
		{name: "joy of dolphins and more joy of dolphins", img: "public/Print/THE JOY OF DOLPHINS AND MORE JOY OF DOLPHINS   serigraph    29.5zx38in  image.JPG"}
	]},
	{category: "mural sketches", paintings: [
		{name: "goodbye to sheba", img: "public/Mural-Sketches/Goodbye to Sheba  60x84in.jpg"},
		{name: "goodbye to solomon", img: "public/Mural-Sketches/Goodbye to Solomon 60x84in.jpg"},
		{name: "grove mural proposal", img: "public/Mural-Sketches/GROVE   mural proposal for 30 Crosby.JPG"},
		{name: "study for the guide to the later crises of life ", img: "public/Mural-Sketches/Study for the Guide to the Later Crises of Life (26'' x 38'', 1972 -  chalk and oil).jpg"}
	]},
	{category: "books", paintings: []},
	{category: "early paintings", paintings: [
		{name: "test to the meaning", img: "public/Early Painting/Test to the Meaning 72 x96in.JPG"},
		{name: "the leisure time graces", img: "public/Early Painting/THE LEISURE TIME GRACES   oil.Jpg"},
		{name: "tiger tiger burning bright", img: "public/Early Painting/Tiger tiger burning Bright   oil     8x10in.JPG"},
		{name: "younger girls at baalbec", img: "public/Early Painting/YOUNGER GIRLS AT BAALBEC  48inx48in.jpg"}
	]},
	{category: "Shakespeare, Bible, etc.", paintings: []}]


