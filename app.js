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



var categories = [
	// {category: "paintings", paintings: []},
	{category: "mixed media", paintings: [
		{name: "flower and memory", img: "public/Mixed-Media/FLOWER AND MEMORY 15x20in.jpg", size: "15x20in"},
		{name: "generative green", img: "public/Mixed-Media/Generative_Green_on_panel_15x16in.jpg", size: "15x16in"},
		{name: "light after rain", img: "public/Mixed-Media/light after rain  mixed media  panel  36x30in.jpg", size: "36x30in"},
		{name: "postcard from lucca", img: "public/Mixed-Media/postcard from lucca  mixed media on panel    32x24in.JPG", size: "32x24in"},
		{name: "red flowers in a somewhat grey vase", img: "public/Mixed-Media/red flowers in a somewhat grey vase              mixed media  panel  9.5x16.5.JPG", size: "9.5x16.5in"},
		{name: "shower", img: "public/Mixed-Media/SHOWER  panel   12x12in.JPG", size: "12x12in"},
		{name: "traumerai", img: "public/Mixed-Media/traumerai   mixed media panel  36x30in.JPG", size: "36x30in"},
		{name: "wife of lot", img: "public/Mixed-Media/wife of Lot  mixed media panel  20x30in  .JPG", size: "0x30in"},
		{name: "young woman in feathered hat", img: "public/Mixed-Media/YOUNG WOMAN IN FEATHERED HAT 48x48in.JPG", size: "48x48in"}
	]},
	{category: "pastels", paintings: [
		{name: "anemones in a blue vase", img: "public/Pastel/anemones in a blue vase   pastel on paper   10x18in.JPG", size: "10x18in"},
		{name: "book and cofffee", img: "public/Pastel/book and cofffee  pastel on paper  30x30in.JPG", size: "30x30in"},
		{name: "bottega oscura", img: "public/Pastel/bottega oscura  pastel on canvas  9x12in.JPG", size: "9x12in"},
		{name: "hydrageas", img: "public/Pastel/hydrageas  pastel canvas  10x10in.JPG", size: ""},
		{name: "hydrangea brightness in b.c.", img: "public/Pastel/hydrangea brightness in b.c.  pastel on canvas   10x8in.JPG", size: ""},
		{name: "hydrageas", img: "public/Pastel/HYDRANGEAS    canvas   10x10in.JPG", size: ""},
		{name: "hydrageas (mixed color)", img: "public/Pastel/HYDRANGEAS (mixed color) 10x10in.JPG", size: ""},
		{name: "hydrangeas in blue pot", img: "public/Pastel/hydrangeas in blue pot  pastel  on canvas   10x10 in.JPG", size: ""},
		{name: "hydrangeas on the terrace", img: "public/Pastel/hydrangeas on the terrace pastel on canvas   18x36in - Copy.JPG", size: ""},
		{name: "hydrangeas, blue-violet, for maya the dying swan", img: "public/Pastel/hydrangeas, blue-violet, for maya the  dying swan               pastel on canvas                                 12x9in.JPG", size: ""},
		{name: "hydrangeas, elan", img: "public/Pastel/hydrangeas, elan   pastel  canvas  10x9in.JPG", size: ""},
		{name: "hydrangeas, mixed pastel on canvas", img: "public/Pastel/hydrangeas, mixed   pastel on canvas           10x10in.JPG", size: ""},
		{name: "hydrangeas,pink and violet", img: "public/Pastel/hydrangeas,pink and violet   pastel on canvas  10x8in.JPG", size: ""},
		{name: "lay your sleeping head (auden)", img: "public/Pastel/lay your sleeping head (auden) pastel canvas   8x10in.JPG", size: ""},
		{name: "mika with jump rope", img: "public/Pastel/mika with jump rope pastel on paper, mounted on board  24x48in.JPG", size: ""},
		{name: "mixed hydrangeas", img: "public/Pastel/mixed hydrangeas  pastel   canvas   10x10in.JPG", size: ""},
		{name: "morning with book", img: "public/Pastel/MORNING WITH BOOK pastel on paper.JPG", size: ""},
		{name: "remember", img: "public/Pastel/remember  pastel  canvas  12x9in.JPG", size: ""},
		{name: "roman afternoon", img: "public/Pastel/roman afternoon      pastel on canvas     9x12in.JPG", size: ""}		
	]},
	{category: "monotypes", paintings: [
		{name: "landscape with tree", img: "public/Monotype/Landscape with Tree   monotype.Jpg", size: ""},
		{name: "race", img: "public/Monotype/Race (monotype on paper) 12.5x5.75 image.jpg", size: ""},
		{name: "undressing", img: "public/Monotype/UNDRESSING     13x 10in.JPG", size: ""},
		{name: "yellow roses", img: "public/Monotype/YELLOW ROSES monotype 14x16.5in.jpg", size: ""}
	]},
	{category: "drawings", paintings: [
		{name: "conversation", img: "public/Drawings/CONVERSATION  charcoal and  red chalk   48x24in  1979.jpg", size: ""},
		{name: "geranium (brown chalk)", img: "public/Drawings/Geranium (brown chalk).jpg", size: ""},
		{name: "geranium re-potted", img: "public/Drawings/Geranium Re-potted    brown chalk on white paper.JPG", size: ""},
		{name: "goodbye to sodom (homage to akmatova)", img: "public/Drawings/Goodbye to Sodom (Homage to Akmatova) lithograph 16.5x11in.JPG", size: ""}
	]},
	{category: "flowers", paintings: [
		{name: "anemone triptych", img: "public/Flowers/ANEMONE TRIPTYCH   48''x48''.JPG", size: ""},
		{name: "anemones", img: "public/Flowers/ANEMONES 44x44in.JPG", size: ""},
		{name: "anemones in a teapot", img: "public/Flowers/anemones in a teapot  18x36in.jpg", size: ""},
		{name: "corsage", img: "public/Flowers/corsage   36x27.5in.JPG", size: ""},
		{name: "daffodils 1", img: "public/Flowers/daffodils 1    8x10in.JPG", size: ""},
		{name: "daffodils 2", img: "public/Flowers/daffodils 2   8x10in.JPG", size: ""},
		{name: "daffodils 3", img: "public/Flowers/daffodils 3    8x10in.JPG", size: ""},
		{name: "daffodils and vase", img: "public/Flowers/Daffodils and Vase   chalk pencil paint  9x12in.JPG", size: ""},
		{name: "first blooming geraniums", img: "public/Flowers/first blooming geraniums   48x24in.jpg", size: ""},
		{name: "florentine geraniums", img: "public/Flowers/florentine geraniums 48x24in.jpg", size: ""},
		{name: "flower and memory mixed media", img: "public/Flowers/flower_and_memory_mixed_media_panel_20x15in.jpg", size: ""},
		{name: "flowers, blue, pink, and violet", img: "public/Flowers/flowers,blue,pink, and violet   12x9in.JPG", size: ""},
		{name: "generative green", img: "public/Flowers/generative_green_20_39_39_x_15_39_39_mixed_media_p.jpg", size: ""},
		{name: "geranium", img: "public/Flowers/geranium  48x24in.JPG", size: ""},
		{name: "geranium in dutchess county morning light", img: "public/Flowers/geranium in dutchesss county morning light  48x24in.jpg", size: ""},
		{name: "geranium in moonlight,as a philosopher friend addressed it", img: "public/Flowers/geranium in moonlight,as a philosopher friend addressed it   panel   12x12in.jpg", size: ""},
		{name: "geranium, magenta", img: "public/Flowers/geranium, magenta   panel    9x8in.jpg", size: ""},
		{name: "geraniums oil on panel", img: "public/Flowers/geraniums    oil on  panel   8x10in.JPG", size: ""},
		{name: "geraniums out of florence", img: "public/Flowers/Geraniums out of Florence 24x48in.jpg", size: ""},
		{name: "hydrangeas pastel canvas", img: "public/Flowers/hydrageas   pastel  canvas 10x10in.JPG", size: ""},
		{name: "hydrangea fresco", img: "public/Flowers/hydrangea fresco 10x10in.JPG", size: ""},
		{name: "hydrangeas", img: "public/Flowers/hydrangeas 24x12in.JPG", size: ""},
		{name: "hydrangeas gathered in a pot", img: "public/Flowers/hydrangeas gathered in a pot  panel  12x8.5in.JPG", size: ""},
		{name: "hydrangeas in a bowl", img: "public/Flowers/hydrangeas in a bowl 12x24in.JPG", size: ""},
		{name: "hydrangeas in a tall vase", img: "public/Flowers/hydrangeas in a tall vase     pastel   36x18 in.JPG", size: ""},
		{name: "hydrangeas observed pastel canvas", img: "public/Flowers/hydrangeas observed  pastel  canvas  10x10in.JPG", size: ""},
		{name: "hydrangeas on grey", img: "public/Flowers/hydrangeas on grey  23x8in.JPG", size: ""},
		{name: "hydrangeas on the terrace canvas", img: "public/Flowers/hydrangeas on the terrace  canvas   18x36in.JPG", size: ""},
		{name: "hydrangeas, elan pastel on canvas", img: "public/Flowers/hydrangeas, elan  pastel on  canvas        10x9in.JPG", size: ""},
		{name: "lap san", img: "public/Flowers/lap san       10x8in.JPG", size: ""},
		{name: "little pot of flowers", img: "public/Flowers/little pot of flowers    panel  8.5x7in.JPG", size: ""},
		{name: "on first seeing oslo", img: "public/Flowers/on first seeing oslo  panel   20x14.16in.JPG", size: ""},
		{name: "pink pigment on panel", img: "public/Flowers/pink   pigment on panel   12x8in.JPG", size: ""},
		{name: "pink and blue hydrangeas", img: "public/Flowers/PINK AND BLUE HYDRANGEAS    8x10 in.jpg", size: ""},
		{name: "portuguese geraniums", img: "public/Flowers/portuguese geraniums 48x24in.jpg", size: ""},
		{name: "postcard from lucca", img: "public/Flowers/POSTCARD_FROM_LUCCA_24x32in.jpg", size: ""},
		{name: "postcard from lucca mixed media panel", img: "public/Flowers/postcard from lucca  mixed media   panel      32x24in.JPG", size: ""},
		{name: "red flowers in a somewhat grey vase", img: "public/Flowers/red flowers in a somewhat grey vase  mixed media on panel  9.5x16.5in.JPG", size: ""},
		{name: "red geraniums in terracotta pot", img: "public/Flowers/red geranium in terracotta pot   18 x 22in.JPG", size: ""},
		{name: "red, very red", img: "public/Flowers/red,very red  panel   12x9.5in.jpg", size: ""},
		{name: "redblue", img: "public/Flowers/redblue  48x24in.jpg", size: ""},
		{name: "remember", img: "public/Flowers/remember   pastel  on canvas   8x10in.JPG", size: ""},
		{name: "roses in vases", img: "public/Flowers/roses in vases oil  20x16in.Jpg", size: ""},
		{name: "studio works and days", img: "public/Flowers/studio works and days                   48 x 48in.JPG", size: ""},
		{name: "the flowers are blue and violet", img: "public/Flowers/the flowers are blue and violet    9x12in.JPG", size: ""},
		{name: "white geranium among leaves", img: "public/Flowers/white geranium among leaves 16x12in.JPG", size: ""},
		{name: "white geranium, stretches left", img: "public/Flowers/white geranium, stretches left   8.5x12.jpg", size: ""},
		{name: "white geranium, stretching right", img: "public/Flowers/white geranium, stretching right.jpg", size: ""},
		{name: "white geraniums in black pot", img: "public/Flowers/white geraniums in black pot  48x48in.JPG", size: ""},
		{name: "white geraniums in glazed pot", img: "public/Flowers/white geraniums in glazed pot  31x43in.png", size: ""}
		// {name: "anemones (smaller file)", img: "public/Flowers/ANEMONES-44x44in-min.jpg", size: ""}
	]},
	{category: "trees", paintings: [
		{name: "green view", img: "public/Tree/GREEN VIEW.jpg", size: ""},
		{name: "grove", img: "public/Tree/GROVE  9 x 12 in.jpg", size: ""},
		{name: "light after rain", img: "public/Tree/light after rain  mixed media  panel  36x30in.jpg", size: ""},
		{name: "spring in poughquag", img: "public/Tree/Spring in Poughquag  19x17in.JPG", size: ""},
		{name: "spring on the hill", img: "public/Tree/Spring on the hill    pastel.JPG", size: ""},
		{name: "traumerai", img: "public/Tree/traumerai   mixed media panel  36x30in.JPG", size: ""},
		{name: "tree among trees on a green  hill", img: "public/Tree/tree among trees on a green  hill    panel  7x9in.jpg", size: ""},
		{name: "tree, bright night", img: "public/Tree/tree,bright night  panel    36x48in.JPG", size: ""},
		{name: "trees", img: "public/Tree/trees   oil     12x5in.JPG", size: ""},
		{name: "trees", img: "public/Tree/trees 30x24in.JPG", size: ""},
		{name: "trees", img: "public/Tree/TREES  oil   60x24in.JPG", size: ""}
	]},
	{category: "landscapes", paintings: [
		{name: "above the inlet", img: "public/Landscape/ABOVE THE INLET   9x12in.JPG", size: ""},
		{name: "dutchess county landscape with grazing horses", img: "public/Landscape/dutchess county landscape with grazing horses 9inx16 in.JPG", size: ""},
		{name: "from hill, outside leghorn", img: "public/Landscape/from hill,outside Leghorn  8x7in.JPG", size: ""},
		{name: "green field, blue sky", img: "public/Landscape/green field, blue sky.JPG", size: ""},
		{name: "night on the hill with pink moon", img: "public/Landscape/night on the hill with pink moon  16x12in.JPG", size: ""},
		{name: "seaside walk", img: "public/Landscape/seaside walk   9x20in.JPG", size: ""},
		{name: "spring on our hill", img: "public/Landscape/spring on our hill   oil on panel  10x4in.JPG", size: ""},
		{name: "studio view", img: "public/Landscape/studio view   panel  10.5x4.75in.JPG", size: ""},
		{name: "sunsetting in poughquag", img: "public/Landscape/sunsetting in poughquag  panel  11.25x9.5in.JPG", size: ""},
		{name: "trees", img: "public/Landscape/trees   oil     12x5in.JPG", size: ""},
		{name: "view from my studio", img: "public/Landscape/view from my studio   panel   10.5x4.75in.JPG", size: ""},
	]},
	{category: "urban landscapes", paintings: [
		{name: "city", img: "public/Urban-Landscape/CITY   12x9in.jpg", size: ""}
	]},
	{category: "history, philosophy, etc.", paintings: [
		{name: "corsage", img: "public/History-Philosophy/CORSAGE  27.75x47in.JPG", size: ""},
		{name: "dance of the oospheres", img: "public/History-Philosophy/Dance of the oospheres.JPG", size: ""},
		{name: "freud's london library", img: "public/History-Philosophy/FREUDS LONDON LIBRARY  16x23 in.JPG", size: ""},
		{name: "introspection is no longer epistemically privileged", img: "public/History-Philosophy/Introspection is no longer Epistemically Privileged 16x23 in 001 (931x1280) (2).jpg", size: ""},
		{name: "joy of dolphins", img: "public/History-Philosophy/joy of dolphins   38x29.5in.JPG", size: ""},
		{name: "the milk-drinkers marathon", img: "public/History-Philosophy/the milk-drinkers marathon  40x30in.JPG", size: ""},
		{name: "the sun is sometimes a danger", img: "public/History-Philosophy/the sun is sometimes a danger  39x28in.JPG", size: ""}
	]},
	{category: "people", paintings: [
		{name: "book and coffee", img: "public/People/BOOK AND COFFE   triptych  48x48in.JPG", size: ""},
		{name: "hart", img: "public/People/HART   9 x11in.jpg", size: ""},
		{name: "hart in black jacket", img: "public/People/HART IN BLACK JACKET  48x48in.Jpg", size: ""},
		{name: "mika", img: "public/People/MIKA  red chalk.jpg", size: ""},
		{name: "painter's sister", img: "public/People/Painter's Sister  monotype.JPG", size: ""},
		{name: "rose eisenberg wool, painter's mother", img: "public/People/Rose Eisenberg Wool, Painter's Mother.JPG", size: ""},
		{name: "self portrait", img: "public/People/SELF-PORTRAIT.jpg", size: ""}
	]},
	{category: "horses (and the hunt)", paintings: [
		// {name: "mika transported", img: "public/Horses/MIKA TRANSPORTED     60x96in.JPG", size: ""},
		{name: "present time transported", img: "public/Horses/PRESENT TIME TRANSPORTED  (6' x 7' - 1985).JPG", size: ""},
		{name: "riders", img: "public/Horses/RIDERS (monotype)11.75x10.5 in.JPG", size: ""},
		{name: "the hunt", img: "public/Horses/THE HUNT   16x20in.JPG", size: ""},
		{name: "yes, my darling jumps", img: "public/Horses/Yes, my Darling Jumps   9x16in.JPG", size: ""}
	]},
	{category: "polo", paintings: [
		{name: "after the ball", img: "public/Horses/AFTER THE BALL.JPG", size: ""}, 
		{name: "blondie and tcherepnine", img: "public/Horses/BLONDIE AND TCHEREPNINE  9x20in.jpg", size: ""}, 
		{name: "chukker", img: "public/Horses/CHUKKER  12x16in.JPG", size: ""},
		{name: "chukker 2", img: "public/Horses/CHUKKER 2  12x16in.JPG", size: ""},
		{name: "match", img: "public/Horses/MATCH      8x10in.JPG", size: ""},
	]},
	{category: "prints", paintings: [
		{name: "dressing", img: "public/Print/DRESSING , diazo print  10x14in  1988.jpg", size: ""},
		{name: "joy of dolphins and more joy of dolphins", img: "public/Print/THE JOY OF DOLPHINS AND MORE JOY OF DOLPHINS   serigraph    29.5zx38in  image.JPG", size: ""}
	]},
	{category: "mural sketches", paintings: [
		{name: "goodbye to sheba", img: "public/Mural-Sketches/Goodbye to Sheba  60x84in.jpg", size: ""},
		{name: "goodbye to solomon", img: "public/Mural-Sketches/Goodbye to Solomon 60x84in.jpg", size: ""},
		{name: "grove mural proposal", img: "public/Mural-Sketches/GROVE   mural proposal for 30 Crosby.JPG", size: ""},
		{name: "study for the guide to the later crises of life ", img: "public/Mural-Sketches/Study for the Guide to the Later Crises of Life (26'' x 38'', 1972 -  chalk and oil).jpg", size: ""}
	]},
	// {category: "books", paintings: []},
	// {category: "early paintings", paintings: [
	// 	{name: "test to the meaning", img: "public/Early Painting/Test to the Meaning 72 x96in.JPG", size: ""},
	// 	{name: "the leisure time graces", img: "public/Early Painting/THE LEISURE TIME GRACES   oil.Jpg", size: ""},
	// 	{name: "tiger tiger burning bright", img: "public/Early Painting/Tiger tiger burning Bright   oil     8x10in.JPG", size: ""},
	// 	{name: "younger girls at baalbec", img: "public/Early Painting/YOUNGER GIRLS AT BAALBEC  48inx48in.jpg", size: ""}
	// ]},
	{category: "Shakespeare, Bible, etc.", paintings: [
		{name: "after sodom (homage to akmatova) lithograph", img: "public/Shakespeare-Bible/after Sodom (homage to Akmatova) lithograph   11x16in.JPG", size: ""},
		{name: "bathsheba", img: "public/Shakespeare-Bible/bathsheba  charcoal and chalk on board  8.14x9.75in.JPG", size: ""},
		{name: "daughters of lot", img: "public/Shakespeare-Bible/daughters of Lot  brown chalk on panel   5.5x18.5.JPG", size: ""},
		{name: "exile from sodom", img: "public/Shakespeare-Bible/exile from Sodom  monotype   17.75x24.5in.JPG", size: ""},
		{name: "goodbye, sodom", img: "public/Shakespeare-Bible/goodbye, sodom.jpg", size: ""},
		{name: "lot's wife", img: "public/Shakespeare-Bible/lot's wife   charcoal and chalk on board   14x20in.jpg", size: ""},
		{name: "pillar of salt", img: "public/Shakespeare-Bible/pillar of salt  monotype  5x5.25 in.JPG", size: ""},
		{name: "r and j", img: "public/Shakespeare-Bible/R and J  red chalk and charcoal  24x48in.JPG", size: ""},
		{name: "shakespeare said she was twelve", img: "public/Shakespeare-Bible/Shakespeare said she was twelve  charcoal  and red chalk  24x48in.jpg", size: ""},
		{name: "the parting of solomon and sheba", img: "public/Shakespeare-Bible/the parting of solomon and sheba  charcoal     42x20in.JPG", size: ""},
		{name: "we three", img: "public/Shakespeare-Bible/we three    19x24in.JPG", size: ""},
		{name: "where you go, i will go", img: "public/Shakespeare-Bible/where you go, I will go  charcoal and chalk    19x24in.JPG", size: ""},
		{name: "wife of lot", img: "public/Shakespeare-Bible/wife of Lot  mixed media panel  20x30in  .JPG", size: ""}
	]},
	{category: "oils", paintings: [
	]}]



