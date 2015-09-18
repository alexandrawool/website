var app = angular.module('gallery', [])

app.controller('PanelCtrl', function(){
	this.tab = 0
	this.selectTab = function(tab){
		this.tab = tab
		this.current = 0
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

// // jQuery for image title
// $(document).ready(function() {
// 	$('.bottom-button').click(function(){
// 	    var imgWidth = $('ul li img').width();
// 	    console.log("image width: ", imgWidth)
// 	    $('.img-title-info').css({width: imgWidth});
// 	});
// 	$('.left-nav-item').click(function(){
// 	    var imgWidth = $('ul li img').width();
// 	    console.log("image width: ", imgWidth)
// 	    $('.img-title-info').css({width: imgWidth});
// 	});
// });

// store width in ng-repeat
// compute widths?? -- they are all on page, select with jQuery and get widths
// array of widths
// add widths to each painting

var categories = [
	// {category: "paintings", paintings: []},
	{category: "mixed media", paintings: [
		{name: "flower and memory", img: "public/Mixed-Media/FLOWER AND MEMORY 15x20in.jpg", size: "20x15in"},
		{name: "generative green", img: "public/Mixed-Media/Generative_Green_on_panel_15x16in.jpg", size: "20x15in"},
		{name: "light after rain", img: "public/Mixed-Media/light after rain  mixed media  panel  36x30in.jpg", size: "48x36in"}, // size corrected by Alexandra
		{name: "postcard from lucca", img: "public/Mixed-Media/postcard from lucca  mixed media on panel    32x24in.JPG", size: "32x24in"},
		{name: "red flowers in a somewhat grey vase", img: "public/Mixed-Media/red flowers in a somewhat grey vase              mixed media  panel  9.5x16.5.JPG", size: "9.5x16.5in"},
		{name: "shower", img: "public/Mixed-Media/SHOWER  panel   12x12in.JPG", size: "12x12in"},
		{name: "traumerai", img: "public/Mixed-Media/traumerai   mixed media panel  36x30in.JPG", size: "48x36in"}, // size corrected by Alexandra
		{name: "wife of lot", img: "public/Mixed-Media/wife of Lot  mixed media panel  20x30in  .JPG", size: "20x30in"},
		{name: "young woman in feathered hat", img: "public/Mixed-Media/YOUNG WOMAN IN FEATHERED HAT 48x48in.JPG", size: "24x48in"}
	]},
	{category: "pastels", paintings: [
		{name: "book and cofffee", img: "public/Pastel/book and cofffee  pastel on paper  30x30in.JPG", size: "30x30in"},
		{name: "anemones in a blue vase", img: "public/Pastel/anemones in a blue vase   pastel on paper   10x18in.JPG", size: "10x18in"},	
		{name: "botteghe oscure", img: "public/Pastel/bottega oscura  pastel on canvas  9x12in.JPG", size: "canvas 9x12in"},
		{name: "hydrageas", img: "public/Pastel/hydrageas  pastel canvas  10x10in.JPG", size: "canvas10x10in"},
		{name: "hydrangea brightness in b.c.", img: "public/Pastel/hydrangea brightness in b.c.  pastel on canvas   10x8in.JPG", size: "canvas 10x8in"},
		{name: "hydrageas (mixed color)", img: "public/Pastel/HYDRANGEAS (mixed color) 10x10in.JPG", size: "canvas 10x10in"},
		{name: "hydrangeas in blue pot", img: "public/Pastel/hydrangeas in blue pot  pastel  on canvas   10x10 in.JPG", size: "canvas 10x10in"},
		{name: "hydrangeas on the terrace", img: "public/Pastel/hydrangeas on the terrace pastel on canvas   18x36in - Copy.JPG", size: "canvas 18x36in"},
		{name: "hydrangeas blue-violet, for maya plisetskaya, dying swan,    ", img: "public/Pastel/hydrangeas, blue-violet, for maya the  dying swan               pastel on canvas                                 12x9in.JPG", info: "canvas 12x9in", size: ""}, // size moved per Alexandra's request
		{name: "hydrangeas, elan", img: "public/Pastel/hydrangeas, elan   pastel  canvas  10x9in.JPG", size: "", bottomNotes: "canvas 10x9in"},// size moved per Alexandra's request
		{name: "hydrangeas, mixed", img: "public/Pastel/hydrangeas, mixed   pastel on canvas           10x10in.JPG", size: "canvas 10x10in"},
		{name: "hydrangeas,pink and violet", img: "public/Pastel/hydrangeas,pink and violet   pastel on canvas  10x8in.JPG", size: "canvas 10x8in"},
		{name: "lay your sleeping head (auden)", img: "public/Pastel/lay your sleeping head (auden) pastel canvas   8x10in.JPG", size: "canvas 10x8in"},
		{name: "mika with jump rope", img: "public/Pastel/mika with jump rope pastel on paper, mounted on board  24x48in.JPG", size: "24x48in"},
		{name: "mixed hydrangeas canvas10x10in", img: "public/Pastel/mixed hydrangeas  pastel   canvas   10x10in.JPG", size: ""},//, size: "canvas 10x10in"},
		{name: "remember", img: "public/Pastel/remember  pastel  canvas  12x9in.JPG", size: "canvas 12x9in"},
		{name: "roman afternoon", img: "public/Pastel/roman afternoon      pastel on canvas     9x12in.JPG", size: "canvas 9x12in"}		
	]},
	{category: "monotypes", paintings: [
		{name: "landscape with tree", img: "public/Monotype/Landscape with Tree   monotype.Jpg", size: ""}, // what size?
		{name: "race", img: "public/Monotype/Race (monotype on paper) 12.5x5.75 image.jpg", size: "12.5x5.75in"},
		{name: "undressing", img: "public/Monotype/UNDRESSING     13x 10in.JPG", size: "13x10in"},
		{name: "yellow roses", img: "public/Monotype/YELLOW ROSES monotype 14x16.5in.jpg", size: "14x16.5in"}
	]},
	{category: "drawings", paintings: [
		{name: "conversation", img: "public/Drawings/CONVERSATION  charcoal and  red chalk   48x24in  1979.jpg", size: "24x48in"},
		{name: "leafy geranium", img: "public/Drawings/Geranium (brown chalk).jpg", size: "11x16in"},
		{name: "geranium re-potted", img: "public/Drawings/Geranium Re-potted    brown chalk on white paper.JPG", size: "11x16in"}
	]},
	{category: "flowers", paintings: [
		{name: "anemone triptych", img: "public/Flowers/ANEMONE TRIPTYCH   48''x48''.JPG", size: "48x48in"},
		{name: "anemones", img: "public/Flowers/ANEMONES 44x44in.JPG", size: "44x44in"},
		{name: "anemones in a teapot", img: "public/Flowers/anemones in a teapot  18x36in.jpg", size: "18x36in"},
		{name: "corsage", img: "public/Flowers/corsage   36x27.5in.JPG", size: "36x27.5in"},
		{name: "daffodils 1", img: "public/Flowers/daffodils 1    8x10in.JPG", size: "8x10in"},
		{name: "daffodils 2", img: "public/Flowers/daffodils 2   8x10in.JPG", size: "8x10in"},
		{name: "daffodils 3", img: "public/Flowers/daffodils 3    8x10in.JPG", size: "8x10in"},
		{name: "daffodils and vase", img: "public/Flowers/Daffodils and Vase   chalk pencil paint  9x12in.JPG", size: "9x12in"},
		{name: "first blooming geraniums", img: "public/Flowers/first blooming geraniums   48x24in.jpg", size: "48x24in"},
		{name: "florentine geraniums", img: "public/Flowers/florentine geraniums 48x24in.jpg", size: "48x24in"},
		{name: "flower and memory mixed media", img: "public/Flowers/flower_and_memory_mixed_media_panel_20x15in.jpg", size: "20x15in"},
		{name: "flowers, blue, pink, and violet", img: "public/Flowers/flowers,blue,pink, and violet   12x9in.JPG", size: "12x9in"},
		{name: "generative green", img: "public/Flowers/generative_green_20_39_39_x_15_39_39_mixed_media_p.jpg", size: ""}, // what size?
		{name: "geranium", img: "public/Flowers/geranium  48x24in.JPG", size: "48x24in"},
		{name: "geranium in dutchess county morning light", img: "public/Flowers/geranium in dutchesss county morning light  48x24in.jpg", size: "48x24in"},
		{name: "geranium in moonlight, as a philosopher friend addressed it", img: "public/Flowers/geranium in moonlight,as a philosopher friend addressed it   panel   12x12in.jpg", size: "12x12in"},
		{name: "geranium, magenta", img: "public/Flowers/geranium, magenta   panel    9x8in.jpg", size: "9x8in"},
		{name: "geraniums oil on panel", img: "public/Flowers/geraniums    oil on  panel   8x10in.JPG", size: "8x10in"},
		// {name: "geraniums out of florence", img: "public/Flowers/Geraniums out of Florence 24x48in.jpg", size: "24x48in"}, // duplicate
		{name: "hydrangeas", img: "public/Flowers/hydrageas   pastel  canvas 10x10in.JPG", size: "10x10in"},
		{name: "hydrangea fresco", img: "public/Flowers/hydrangea fresco 10x10in.JPG", size: "10x10in"},
		// {name: "hydrangeas", img: "public/Flowers/hydrangeas 24x12in.JPG", size: "24x12in"}, // duplicate
		{name: "hydrangeas gathered in a pot", img: "public/Flowers/hydrangeas gathered in a pot  panel  12x8.5in.JPG", size: "12x8.5in"},
		{name: "hydrangeas in a bowl", img: "public/Flowers/hydrangeas in a bowl 12x24in.JPG", size: "12x24in"},
		{name: "hydrangeas in a tall vase", img: "public/Flowers/hydrangeas in a tall vase     pastel   36x18 in.JPG", size: "36x18in"},
		{name: "hydrangeas observed", img: "public/Flowers/hydrangeas observed  pastel  canvas  10x10in.JPG", size: "10x10in"},
		{name: "hydrangeas on grey", img: "public/Flowers/hydrangeas on grey  23x8in.JPG", size: "23x8in"},
		{name: "hydrangeas on the terrace", img: "public/Flowers/hydrangeas on the terrace  canvas   18x36in.JPG", size: "18x36in"},
		{name: "hydrangeas, elan", img: "public/Flowers/hydrangeas, elan  pastel on  canvas        10x9in.JPG", size: "10x9in"},
		{name: "lap san", img: "public/Flowers/lap san       10x8in.JPG", size: "10x8in"},
		{name: "little pot of flowers", img: "public/Flowers/little pot of flowers    panel  8.5x7in.JPG", size: "8.5x7in"},
		{name: "on first seeing oslo", img: "public/Flowers/on first seeing oslo  panel   20x14.16in.JPG", size: "20x14.16in"},
		{name: "pink pigment", img: "public/Flowers/pink   pigment on panel   12x8in.JPG", size: "12x8in"},
		{name: "pink and blue hydrangeas", img: "public/Flowers/PINK AND BLUE HYDRANGEAS    8x10 in.jpg", size: "8x10in"},
		{name: "portuguese geraniums", img: "public/Flowers/portuguese geraniums 48x24in.jpg", size: "48x24in"},
		{name: "postcard from lucca", img: "public/Flowers/POSTCARD_FROM_LUCCA_24x32in.jpg", size: "24x32in"},
		{name: "postcard from lucca", img: "public/Flowers/postcard from lucca  mixed media   panel      32x24in.JPG", size: "32x24in"},
		{name: "red flowers in a somewhat grey vase", img: "public/Flowers/red flowers in a somewhat grey vase  mixed media on panel  9.5x16.5in.JPG", size: "9.5x16.5in"},
		{name: "red geraniums in terracotta pot", img: "public/Flowers/red geranium in terracotta pot   18 x 22in.JPG", size: "18x22in"},
		{name: "red, very red", img: "public/Flowers/red,very red  panel   12x9.5in.jpg", size: "12x9.5in"},
		{name: "redblue", img: "public/Flowers/redblue  48x24in.jpg", size: "48x24in"},
		{name: "remember", img: "public/Flowers/remember   pastel  on canvas   8x10in.JPG", size: "8x10in"},
		{name: "roses in vases", img: "public/Flowers/roses in vases oil  20x16in.Jpg", size: "20x16in"},
		{name: "studio works and days", img: "public/Flowers/studio works and days                   48 x 48in.JPG", size: "48x48in"},
		{name: "the flowers are blue and violet", img: "public/Flowers/the flowers are blue and violet    9x12in.JPG", size: "9x12in"},
		{name: "white geranium among leaves", img: "public/Flowers/white geranium among leaves 16x12in.JPG", size: "16x12in"},
		{name: "white geranium, stretches left", img: "public/Flowers/white geranium, stretches left   8.5x12.jpg", size: "8.5x12"},
		{name: "white geranium, stretching right", img: "public/Flowers/white geranium, stretching right.jpg", size: ""}, // what size?
		{name: "white geraniums in black pot", img: "public/Flowers/white geraniums in black pot  48x48in.JPG", size: "48x48in"},
		{name: "white geraniums in glazed pot", img: "public/Flowers/white geraniums in glazed pot  31x43in.png", size: "31x43in"}
		// {name: "anemones (smaller file)", img: "public/Flowers/ANEMONES-44x44in-min.jpg", size: ""}
	]},
	{category: "trees", paintings: [
		{name: "green view", img: "public/Tree/GREEN VIEW.jpg", size: ""}, // what size?
		{name: "grove", img: "public/Tree/GROVE  9 x 12 in.jpg", size: "9x12 in"},
		{name: "light after rain", img: "public/Tree/light after rain  mixed media  panel  36x30in.jpg", size: "36x30in"},
		{name: "spring in poughquag", img: "public/Tree/Spring in Poughquag  19x17in.JPG", size: "19x17in"},
		// {name: "spring on the hill", img: "public/Tree/Spring on the hill    pastel.JPG", size: ""}, // what size?
		{name: "traumerai", img: "public/Tree/traumerai   mixed media panel  36x30in.JPG", size: "36x30in"},
		// {name: "tree among trees on a green  hill", img: "public/Tree/tree among trees on a green  hill    panel  7x9in.jpg", size: "7x9in"},
		{name: "tree, bright night", img: "public/Tree/tree,bright night  panel    36x48in.JPG", size: "36x48in"},
		{name: "trees", img: "public/Tree/trees   oil     12x5in.JPG", size: "12x5in"},
		{name: "trees", img: "public/Tree/trees 30x24in.JPG", size: "30x24in"},
		{name: "trees", img: "public/Tree/TREES  oil   60x24in.JPG", size: "60x24in"}
	]},
	{category: "landscapes", paintings: [
		{name: "above the inlet", img: "public/Landscape/ABOVE THE INLET   9x12in.JPG", size: "9x12in"},
		{name: "dutchess county landscape with grazing horses", img: "public/Landscape/dutchess county landscape with grazing horses 9inx16 in.JPG", size: "9x16in"},
		{name: "from hill, outside leghorn", img: "public/Landscape/from hill,outside Leghorn  8x7in.JPG", size: "8x7in"},
		{name: "green field, blue sky", img: "public/Landscape/green field, blue sky.JPG", size: ""}, // what size?
		{name: "night on the hill with pink moon", img: "public/Landscape/night on the hill with pink moon  16x12in.JPG", size: "16x12in"},
		{name: "seaside walk", img: "public/Landscape/seaside walk   9x20in.JPG", size: "9x20in"},
		{name: "seaside, bright day", img: "public/Landscape/seaside, bright day 9x15in.JPG", size: "9x15in"},
		{name: "spring on our hill", img: "public/Landscape/spring on our hill   oil on panel  10x4in.JPG", size: "10x4in"},
		{name: "studio view", img: "public/Landscape/studio view   panel  10.5x4.75in.JPG", size: "10.5x4.75in"},
		{name: "sunsetting in poughquag", img: "public/Landscape/sunsetting in poughquag  panel  11.25x9.5in.JPG", size: "11.25x9.5in"},
		{name: "trees", img: "public/Landscape/trees   oil     12x5in.JPG", size: "12x5in"},
		{name: "view from my studio", img: "public/Landscape/view from my studio   panel   10.5x4.75in.JPG", size: "10.5x4.75in"},
	]},
	{category: "urban landscapes", paintings: [
		{name: "city", img: "public/Urban-Landscape/CITY   12x9in.jpg", size: "12x9in"}
	]},
	{category: "history, philosophy, etc.", paintings: [
		{name: "corsage", img: "public/History-Philosophy/CORSAGE  27.75x47in.JPG", size: "27.75x47in"},
		{name: "dance of the oospheres", img: "public/History-Philosophy/Dance of the oospheres.JPG", size: "39x28in"},
		{name: "freud's london library", img: "public/History-Philosophy/FREUDS LONDON LIBRARY  16x23 in.JPG", size: "16x23in"},
		{name: "introspection is no longer epistemically privileged", img: "public/History-Philosophy/Introspection is no longer Epistemically Privileged 16x23 in 001 (931x1280) (2).jpg", size: "23x16in"},
		{name: "joy of dolphins", img: "public/History-Philosophy/joy of dolphins   38x29.5in.JPG", size: "38x29.5in"},
		{name: "the milk-drinkers marathon", img: "public/History-Philosophy/the milk-drinkers marathon  40x30in.JPG", size: "40x30in"},
		{name: "the sun is sometimes a danger", img: "public/History-Philosophy/the sun is sometimes a danger  39x28in.JPG", size: "39x28in"}
	]},
	{category: "people", paintings: [
		{name: "book and coffee", img: "public/People/BOOK AND COFFE   triptych  48x48in.JPG", size: "48x48in"},
		{name: "hart", img: "public/People/HART   9 x11in.jpg", size: "9x11in"},
		{name: "hart in black jacket", img: "public/People/HART IN BLACK JACKET  48x48in.Jpg", size: "48x48in"},
		{name: "mika", img: "public/People/MIKA  red chalk.jpg", size: ""}, // what size?
		// {name: "painter's sister", img: "public/People/Painter's Sister  monotype.JPG", size: ""}, // what size?
		// {name: "rose eisenberg wool, painter's mother", img: "public/People/Rose Eisenberg Wool, Painter's Mother.JPG", size: ""}, // what size?
		{name: "self portrait", img: "public/People/SELF-PORTRAIT.jpg", size: ""} // what size?
	]},
	{category: "horses (and the hunt)", paintings: [
		{name: "present time transported", img: "public/Horses/PRESENT TIME TRANSPORTED  (6' x 7' - 1985).JPG", size: "72x96in"},
		{name: "riders", img: "public/Horses/RIDERS (monotype)11.75x10.5 in.JPG", size: "11.75x10.5in"},
		{name: "the hunt", img: "public/Horses/THE HUNT   16x20in.JPG", size: "20x9in"},
		{name: "yes, my darling jumps", img: "public/Horses/Yes, my Darling Jumps   9x16in.JPG", size: "16x9in"}
	]},
	{category: "polo", paintings: [
		{name: "match under a pink sky", img: "public/Polo/01  match under a pink sky.JPG", size: "20x10in"}, // what size?
		{name: "polo sunday", img: "public/Polo/02 polo sunday    20x12in.JPG", size: "20x12in"},
		{name: "1'oclock match", img: "public/Polo/03  1'oclock match    20x10in.JPG", size: "20x10in"},
		{name: "first chukker", img: "public/Polo/04  first chukker 16x12in.JPG", size: "16x12in"},
		{name: "5 seconds in", img: "public/Polo/05  5 seconds in     16x12in.JPG", size: "16x12in"},
		{name: "chukker", img: "public/Polo/06 Chukker   chalk and paint   16x12in.JPG", size: "16x12in"},
		{name: "after the ball", img: "public/Polo/08 After the Ball   10x8in.JPG", size: "10x8in"},
		{name: "match", img: "public/Polo/09  match  10x8in.jpg", size: "10x8in"},
		{name: "match on a golden afternoon", img: "public/Polo/match on a golden afternoon       25x9in.JPG", size: "25x9in"},
		{name: "two players", img: "public/Polo/two players    12x9in .JPG", size: "12x9in"}
	]},
	{category: "prints", paintings: [
		{name: "after sodom", img: "public/Prints/after Sodom  lithograph  edition 40   11x16in.JPG", size: "11x16in", info: "lithograph  edition 40"},
		{name: "the joy of dolphins", img: "public/Prints/The Joy of Dolphins   serigraph  edition 25  30x40in.JPG", size: "30x40in", info: "serigraph  edition 25"}
	]},
	{category: "mural sketches", paintings: [
		{name: "goodbye to sheba", img: "public/Mural-Sketches/Goodbye to Sheba  60x84in.jpg", size: "60x84in"},
		{name: "goodbye to solomon", img: "public/Mural-Sketches/Goodbye to Solomon 60x84in.jpg", size: "60x84in"},
		{name: "grove mural proposal", img: "public/Mural-Sketches/GROVE   mural proposal for 30 Crosby.JPG", size: ""}, // what size?
		{name: "study for the guide to the later crises of life", img: "public/Mural-Sketches/Study for the Guide to the Later Crises of Life (26'' x 38'', 1972 -  chalk and oil).jpg", size: "26x38in"}
	]},
	// {category: "books", paintings: []},
	{category: "Shakespeare, Bible, etc.", paintings: [
		{name: "goodbye, sodom", img: "public/Shakespeare-Bible/goodbye, sodom.jpg", size: "monotype13x9.5in"},
		{name: "bathsheba", img: "public/Shakespeare-Bible/bathsheba  charcoal and chalk on board  8.14x9.75in.JPG", size: "8.14x9.75in"},
		{name: "daughters of lot", img: "public/Shakespeare-Bible/daughters of Lot  brown chalk on panel   5.5x18.5.JPG", size: "5.5x18.5in"},
		{name: "exile from sodom", img: "public/Shakespeare-Bible/exile from Sodom  monotype   17.75x24.5in.JPG", size: "17.75x24.5in"},
		{name: "after sodom (homage to akmatova)", img: "public/Shakespeare-Bible/after Sodom (homage to Akmatova) lithograph   11x16in.JPG", size: "lithograph/50  11x16in"},
		// {name: "lot's wife", img: "public/Shakespeare-Bible/lot's wife   charcoal and chalk on board   14x20in.jpg", size: "14x20in"}, // repeat
		{name: "pillar of salt", img: "public/Shakespeare-Bible/pillar of salt  monotype  5x5.25 in.JPG", size: "5x5.25in"},
		{name: "r and j", img: "public/Shakespeare-Bible/R and J  red chalk and charcoal  24x48in.JPG", size: "24x48in"},
		{name: "tragedy of verona", img: "public/Shakespeare-Bible/Shakespeare said she was twelve  charcoal  and red chalk  24x48in.jpg", size: "24x48in"},
		{name: "the parting of solomon and sheba", img: "public/Shakespeare-Bible/the parting of solomon and sheba  charcoal     42x20in.JPG", size: "42x20in"},
		{name: "we three", img: "public/Shakespeare-Bible/we three    19x24in.JPG", size: "19x24in"},
		{name: "where you go, i will go", img: "public/Shakespeare-Bible/where you go, I will go  charcoal and chalk    19x24in.JPG", size: "19x24in"},
		{name: "wife of lot", img: "public/Shakespeare-Bible/wife of Lot  mixed media panel  20x30in  .JPG", size: "20x30in"}
	]},
	{category: "oils", paintings: [
	]}]



