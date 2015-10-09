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
		{name: "shower", img: "public/Mixed-Media/SHOWER  panel   12x12in.JPG", size: "16x16in"},
		{name: "traumerai", img: "public/Mixed-Media/traumerai   mixed media panel  36x30in.JPG", size: "48x36in"}, // size corrected by Alexandra
		{name: "wife of lot", img: "public/Mixed-Media/wife of Lot  mixed media panel  20x30in  .JPG", size: "20x30in"},
		{name: "young woman in feathered hat", img: "public/Mixed-Media/YOUNG WOMAN IN FEATHERED HAT 48x48in.JPG", size: "24x48in"},
		{name: "after the bath", img: "public/Mixed-Media/after the bath  mixed media  24x48in.jpg", info: "", size: "24x48in"},
		{name: "drying off", img: "public/Mixed-Media/drying off    mixed media    24x48in.jpg", info: "", size: "24x48in"},
		{name: "greetings to a fan, on yr. gift canvas", img: "public/Mixed-Media/greetings to a fan, on yr. gift canvas          23.5x35.75in .JPG", info: "", size: "23.5x35.75in"},
		{name: "the younger girls at baalbec", img: "public/Mixed-Media/the younger girls at baalbec  charcoal,watercolor and paint         paper mounted on  panel     48x48in.jpg", info: "charcoal, watercolor and paint, paper mounted on panel", size: "48x48in"},
		{name: "young woman, nyc", img: "public/Mixed-Media/young woman,nyc  30x36in.JPG", info: "", size: "30x36in"}
	]},
	{category: "pastels", paintings: [
		{name: "book and cofffee", img: "public/Pastel/book and coffee   pastel on paper   30x30in.JPG", size: "paper 30x30in"},
		{name: "anemones in a blue vase", img: "public/Pastel/anemones in a blue vase   pastel on paper   10x18in.JPG", size: "paper 10x18in"},	
		{name: "botteghe oscure", img: "public/Pastel/bottega oscura  pastel on canvas  9x12in.JPG", size: "canvas 9x12in"},
		{name: "hydrageas", img: "public/Pastel/hydrageas  pastel canvas  10x10in.JPG", size: "canvas 10x10in"},
		{name: "hydrangea brightness in b.c.", img: "public/Pastel/hydrangea brightness in b.c.  pastel on canvas   10x8in.JPG", size: "canvas 10x8in"},
		{name: "hydrageas (mixed color)", img: "public/Pastel/HYDRANGEAS (mixed color) 10x10in.JPG", size: "canvas 10x10in"},
		{name: "hydrangeas in blue pot", img: "public/Pastel/hydrangeas in blue pot  pastel  on canvas   10x10 in.JPG", size: "canvas 10x10in"},
		{name: "hydrangeas on the terrace", img: "public/Pastel/hydrangeas on the terrace pastel on canvas   18x36in - Copy.JPG", size: "canvas 18x36in"},
		{name: "hydrangeas blue-violet, for maya plisetskaya, the dying swan", img: "public/Pastel/hydrangeas, blue-violet, for maya the  dying swan               pastel on canvas                                 12x9in.JPG", info: "canvas 12x9in", size: ""}, // size moved per Alexandra's request
		{name: "hydrangeas, elan", img: "public/Pastel/hydrangeas, elan   pastel  canvas  10x9in.JPG", size: "canvas 10x9in"},
		{name: "hydrangeas, mixed", img: "public/Pastel/hydrangeas, mixed   pastel on canvas           10x10in.JPG", size: "canvas 10x10in"},
		{name: "hydrangeas,pink and violet", img: "public/Pastel/hydrangeas,pink and violet   pastel on canvas  10x8in.JPG", size: "canvas 10x8in"},
		{name: "lay your sleeping head (auden)", img: "public/Pastel/lay your sleeping head (auden) pastel canvas   8x10in.JPG", size: "canvas 10x8in"},
		{name: "mika with jump rope", img: "public/Pastel/mika with jump rope pastel on paper, mounted on board  24x48in.JPG", size: "paper on board 24x48in"},
		{name: "mixed hydrangeas", img: "public/Pastel/mixed hydrangeas  pastel   canvas   10x10in.JPG", size: "canvas 10x10in"},//, size: "canvas 10x10in"},
		{name: "remember", img: "public/Pastel/remember  pastel  canvas  12x9in.JPG", size: "canvas 12x9in"},
		{name: "roman afternoon", img: "public/Pastel/roman afternoon      pastel on canvas     9x12in.JPG", size: "canvas 9x12in"}		
	]},
	{category: "monotypes", paintings: [
		{name: "dressing (or undressing)", img: "public/Monotype/01 dressing (or undressing)  monotype  19x14in.JPG", info: "", size: "19x14in"},
		{name: "thanks for the bracelet", img: "public/Monotype/02 thanks for the bracelet  monotype  15.25x13in.JPG", info: "", size: "15.25x13in"},
		{name: "dressing or undressing", img: "public/Monotype/03 dressing or undressing   monotype  14x10in.JPG", info: "", size: "14x10in"},
		{name: "d. (figure against blue)", img: "public/Monotype/04    D. (figure against blue)   monotype        10x14in.JPG", info: "", size: "10x14in"},
		{name: "leisure time graces", img: "public/Monotype/05  leisure time graces oil monotype on rice  paper 19x24in.JPG", info: "oil on rice paper", size: "19x24in"},
		{name: "almost dressed", img: "public/Monotype/06 almost dressed    monotype   5x9.25in.JPG", info: "", size: "5x9.25in"},
		{name: "mika", img: "public/Monotype/07 mika   monotype   7.5x7in.jpg", info: "", size: "7.5x7in"},
		{name: "post- shower", img: "public/Monotype/08  post- shower   monotype  6.5x10in.JPG", info: "", size: "6.5x10in"},
		{name: "after the bath", img: "public/Monotype/09 after the bath   monotype    5.5x7in.JPG", info: "", size: "5.5x7in"},
		{name: "woman dressing", img: "public/Monotype/010woman dressing   monotype    8.75x6in.JPG", info: "", size: "8.75x6in"},
		{name: "young woman, considering", img: "public/Monotype/011 young woman, considering  monotype  14.5x13in.jpg", info: "", size: "14.5x13in"},
		{name: "lovely lady, back 3", img: "public/Monotype/012  lovely lady back 3  monotype  14.5x19in.JPG", info: "", size: "14.5x19in"},
		{name: "lovely lady, back 2", img: "public/Monotype/013 lovely lady back 2  monotype 14.5x19in.JPG", info: "", size: "14.5x19in"},
		{name: "lovely lady, her back 1", img: "public/Monotype/014 lovely lady her back 1 monotype 14.75x19.JPG", info: "", size: "14.75x19"},
		{name: "flowery field view of small hill and phone poles, pawling", img: "public/Monotype/015 flowery field view of small hill and phone poles, Pawling    monotype   5.25x5.25in.JPG", info: "", size: "5.25x5.25in"},
		{name: "fair day landscape", img: "public/Monotype/016 fair day landscape   monotype   10.25x4.75in.JPG", info: "", size: "10.25x4.75in"},
		{name: "landscape west", img: "public/Monotype/017 landscape west   monotype 10x9in.JPG", info: "", size: "10x9in"},
		{name: "landscape with tree above tymore", img: "public/Monotype/018 landscape with tree  above tymore   monotype  9x8in.JPG", info: "", size: "9x8in"},
		{name: "oh wonderful autumn view from breakfast, with hills, mountains, houses, trees", img: "public/Monotype/019 oh wonderful autumn view from breakfast, with hills, mountains, houses, trees   monotype   12x7in.JPG", info: "", size: "12x7in"},
		{name: "trees on hill", img: "public/Monotype/020 trees on hill       monotype    7.75x8in.JPG", info: "", size: "7.75x8in"},
		{name: "southwest from our hill", img: "public/Monotype/021 southwest from our hill   monotype    11x 7in.JPG", info: "", size: "11x7in"},
		{name: "pink moon for us", img: "public/Monotype/022  pink moon for us    monotype   8x7in.JPG", info: "", size: "8x7in"},
		{name: "twoxtwo's", img: "public/Monotype/024 twoxtwo's   monotypes each  2x2in.JPG", info: "", size: "2x2in"},
		{name: "more 2x2's", img: "public/Monotype/023m ore 2x2's    monotypes   each 2x2in.JPG", info: "", size: "2x2in"},
		{name: "yellow roses in blue glass vase", img: "public/Monotype/025  yellow roses in blue glass vase   monotype  14x16.5in.JPG", info: "", size: "14x16.5in"},
		{name: "geraniums", img: "public/Monotype/026Geraniums   oil monotypes on rice paper   2x2.5in;2x3.5in.JPG", info: "oil on rice paper", size: "2x2.5in;2x3.5in"},
		{name: "trees", img: "public/Monotype/027Trees    oil monotype  on rice paper      each 1.5x2.5in.JPG", info: "oil  on rice paper", size: "1.5x2.5in"},
		{name: "yellow roses in vase", img: "public/Monotype/028 yellow roses in vase  (series) monotype 14.75x19in.jpg", info: "(series) monotype", size: "14.75x19in"},
		{name: "geranium", img: "public/Monotype/029geranium   monotype on rice paper   2.25x3.75in.JPG", info: "monotype on rice paper", size: "2.25x3.75in"},
		{name: "geranium", img: "public/Monotype/030 Geranium   oil monotype on rice paper  4.5x2.5in.JPG", info: "", size: "4.5x2.5in"},
		{name: "race", img: "public/Monotype/031 race   monotype    image10.5x5.75in.JPG", info: "", size: "10.5x5.75in"},
		{name: "proud horse, proud rider", img: "public/Monotype/032  proud horse, proud rider    monotype  10x12in.JPG", info: "", size: "10x12in"},
		{name: "riders", img: "public/Monotype/033 riders   monotype  10.5x11.75in.JPG", info: "", size: "10.5x11.75in"},
		{name: "exile from sodom", img: "public/Monotype/034  exile from sodom  monotype   17.75x24.5in.JPG", info: "", size: "17.75x24.5in"},
		{name: "goodbye,sodom", img: "public/Monotype/035 goodbye,sodom  monotype  13.25x9.5in.jpg", info: "", size: "13.25x9.5in"},
		{name: "pillar of salt", img: "public/Monotype/036  pillar of salt  monotype  5x5.25 in.JPG", info: "", size: "5x5.25 in"},
		{name: "draped woman, gathering", img: "public/Monotype/037  draped woman, gathering  monotype 5.5x7in.JPG", info: "", size: "5.5x7in"},
		{name: "after lidov's adam", img: "public/Monotype/038  after Lidov's Adam   monotype  image 5.75x8.25in.JPG", info: "", size: "5.75x8.25in"},
		{name: "witch", img: "public/Monotype/040 witch   monotype on rice paper  10.5x12in.JPG", info: "oil on rice paper", size: "10.5x12in"},
		{name: "young woman against favored blue", img: "public/Monotype/041young woman against favored blue   monotype  3.5x5in.JPG", info: "", size: "3.5x5in"},
		{name: "chloe (profile)", img: "public/Monotype/042 chloe (profile)  oil monotype   7.25x7.75in.JPG", info: "oil", size: "7.25x7.75in"},
		{name: "virago in feathers on pink paper", img: "public/Monotype/043 virago in feathers on pink paper  monotype on pink paper    8x9.5in.JPG", info: "", size: "8x9.5in"},
		{name: "emily", img: "public/Monotype/044 emily  oil monotype  7x8in.JPG", info: "oil", size: "7x8in"},
		{name: "emily (second pull)", img: "public/Monotype/045 emily oil  monotype 2nd pull  7x8in.JPG", info: "oil", size: "7x8in"},
		{name: "charlene", img: "public/Monotype/046 charlene   oil monotype  1.25x8in.JPG", info: "oil", size: "1.25x8in"},
		{name: "yes,no or maybe", img: "public/Monotype/047yes,no or maybe    monotype    7.75x7.JPG", info: "", size: "7.75x7in"},
		{name: "young woman, profile", img: "public/Monotype/048young woman, profile   monotype  7.5x7in.JPG", info: "", size: "7.5x7in"},
		{name: "primeval soup", img: "public/Monotype/049  primeval soup   monotype  9.25x9in.JPG", info: "", size: "9.25x9in"},
		

		{name: "landscape with tree", img: "public/Monotype/Landscape with Tree   monotype.Jpg", size: "8x7in"}
	]},
	{category: "drawings", paintings: [
		{name: "book and breakfast", img: "public/Drawings/01  book and breakfast charcoal and chalk  and white paint 48x48in.JPG", info: "charcoal and chalk and white paint", size: "48x48in"},
		{name: "child with fan", img: "public/Drawings/01 child with fan  brown wash on pink paper  12x16in.JPG", info: "brown wash on pink paper", size: "12x16in"},
		{name: "figure, two views", img: "public/Drawings/02 figure, two views  charcoal on tan paper 14x18.75in.JPG", info: "charcoal on tan paper", size: "14x18.75in"},
		{name: "bathers", img: "public/Drawings/03 bathers  (shown at watercolor show at NY Academy of Design)  12.5x16in.JPG", info: "(shown at watercolor show at NY Academy of Design)", size: "12.5x16in"},
		{name: "let's see", img: "public/Drawings/04  let's see    ink and wash  on board  17.5x23in.JPG", info: "ink and wash on board", size: "17.5x23in"},
		{name: "sing along", img: "public/Drawings/04  sing along  watercolor     15x18in.JPG", info: "watercolor", size: "15x18in"},
		{name: "three figures", img: "public/Drawings/05 three figures   charcoal on green, white board 25x22.5in.JPG", info: "charcoal and paint on board", size: "25x22.5in"},
		{name: "three figures considered", img: "public/Drawings/06  three figures considered   charcoal and paint on masonite panel   23x30in.JPG", info: "charcoal and paint on panel", size: "23x30in"},
		{name: "drape  charcoal on board", img: "public/Drawings/07 drape  charcoal on board  20x30in.JPG", info: "charcoal on board", size: "20x30in"},
		{name: "drape study 1", img: "public/Drawings/08  drape study 1  charcoal on canvas panel  20x25in.JPG", info: "charcoal on canvas panel", size: "20x25in"},
		{name: "two women and baby", img: "public/Drawings/09  two women and baby    red conte on grey paper  19x24in.JPG", info: "red conte on grey paper", size: "19x24in"},
		{name: "mother and baby", img: "public/Drawings/09 mother and baby   red chalk on paper  19x24in.JPG", info: "red chalk on paper", size: "19x24in"},
		{name: "a propos de fibonacci", img: "public/Drawings/010  a propos de Fibonacci   chalk and paint on board mounted paper  25x37in  Mount 34.5x47.75in.JPG", info: "chalk and paint on paper mounted on board", size: "25x37in"},
		{name: "first love in verona", img: "public/Drawings/010 firsrt love in verona  red conte and charcoal  24x48in.jpg", info: "red conte and charcoal on canvas", size: "24x48in"},
		{name: "exercise", img: "public/Drawings/011  exercise  charcoal and sanguine on rice paper     23x12.5in.JPG", info: "charcoal and sanguine on rice paper", size: "23x12.5in"},
		{name: "christine in a tutu", img: "public/Drawings/012 christine in a tutu  charcoal on brown wrapping paper   15x14in.JPG", info: "charcoal on brown paper", size: "15x14in"},
		{name: "on her head, in a tutu", img: "public/Drawings/013  on her head, in a tutu   charcoal, colored chalk on prepared grey paper   40x50in.JPG", info: "charcoal, colored chalk on prepared grey paper", size: "40x50in"},
		{name: "hart", img: "public/Drawings/014 hart  brown wash, brush and pen  tracing paper mounted on pink paper   12x15in.JPG", info: "brush and pen      ", moreinfo: "mounted on pink paper", size: "12x15in"},
		{name: "arthur lidov", img: "public/Drawings/015 arthur lidov   charcoal on white paper   5x7in.JPG", info: "charcoal on white paper", size: "5x7in"},
		{name: "daffodils 1", img: "public/Drawings/015 daffodils 1.JPG", info: "", size: ""}, // what size?
		{name: "daffodils 4", img: "public/Drawings/015 daffodils 2.JPG", info: "", size: ""}, // what size?
		{name: "geranium", img: "public/Drawings/016  geranium  brown chalk tan paper  18x12in.JPG", info: "brown chalk on tan paper", size: "18x12in"},
		{name: "geranium plant", img: "public/Drawings/Geranium Plant   brown chalk on paper  12x17.5in.jpg", info: "brown chalk on tan paper", size: "12x17.5in"},
		{name: "potted geranium", img: "public/Drawings/potted geranium   brown chalk on white paper 11x16in.jpg", info: "brown chalk on white paper", size: "11x16in"},
		{name: "geranium orgami", img: "public/Drawings/016 geranium  orgami   brown, red ,white chalk on tan paper     17.5x12in.JPG", info: "brown, red, white chalk on tan paper", size: "17.5x12in"},
		{name: "jonathon brought lily plant", img: "public/Drawings/017  jonathon brought lily plant  white and other  chalk on tan paper  19x24in.JPG", info: "white and other  chalk on tan paper", size: "19x24in"},
		{name: "tiger,tiger, burning bright", img: "public/Drawings/018 tiger,tiger, burning bright  brown ink and wash   6.5x8.5in.JPG", info: "brown ink and wash", size: "6.5x8.5in"},
		{name: "mika at jacks", img: "public/Drawings/019 mika at jacks  brown chalk  7x13.5.JPG", info: "brown chalk", size: "7x13.5in"},
		{name: "mika in beret", img: "public/Drawings/020 mika in beret  charcoal approx.14x16in.JPG", info: "charcoal", size: "14x16in"},
		{name: "what cards I have", img: "public/Drawings/021  what cards I have   charcoal and colored chalk on brown paper   9x7in - Copy - Copy.JPG", info: "charcoal and colored chalk on brown paper", size: "9x7in"},
		{name: "child looking at a card (the future)", img: "public/Drawings/021 child looking at a card (the future)  charcoal and colored chalks  15x8.5in.JPG", info: "charcoal and colored chalks on brown paper", size: "15x8.5in"},
		{name: "card player", img: "public/Drawings/022  card player    charcoal, white chalk on pink laid paper  4.5x7.5in.JPG", info: "charcoal, white chalk on pink paper", size: "4.5x7.5in"},
		{name: "daedalus (homage to arthur lidov  1917-90)", img: "public/Drawings/022 daedalus (homage to Arthur Lidov  1917-90)  13x13in.JPG", info: "", size: "13x13in"},
		{name: "daedalus with icarus (after lidov)", img: "public/Drawings/023 daedalus with icarus (after Lidov)  charcoal 12x13in.JPG", info: "charcoal", size: "12x13in"},
		{name: "after the chase", img: "public/Drawings/024  after the chase charcoal    10x8in.JPG", info: "charcoal", size: "10x8in"},
		{name: "bonding", img: "public/Drawings/025 conversation   charcoal   7x10 in.JPG", info: "charcoal", size: "7x10in"},
		{name: "hart in morocan robe on arius", img: "public/Drawings/026  hart in morocan robe on arius     charcoal on grey prepared paper  40x50in.JPG", info: "charcoal on grey prepared paper", size: "40x50in"},
		{name: "horse diptych", img: "public/Drawings/026  horse diptych   charcoal on canvas   48x48in.jpg", info: "charcoal on canvas", size: "48x48in"},
		{name: "chimps", img: "public/Drawings/028 chimps 2   black chalk on paper  11xs10in.JPG", info: "black chalk on paper", size: "11x10in"},
		{name: "chimp, typing", img: "public/Drawings/029  chimp 3, typing   charcoal pencil on creame paper       12x7.5in.JPG", info: "charcoal pencil on creame paper", size: "12x7.5in"},
		{name: "chimp studies", img: "public/Drawings/030 chimp4  black chalk on paper    a. 6x11 in;b. 11x6.25x11in.JPG", info: "black chalk on paper", size: "11x6.25x11in"},
		{name: "goodbye", img: "public/Drawings/040  goodbye    charcoal and chalk  on panel  20x28in.JPG", info: "charcoal and chalk on panel", size: "20x28in"},
		{name: "hart (solomon)", img: "public/Drawings/041  hart (Solomon)   brown conte and white chalk on tan board 11.5x8.5.JPG", info: "brown conte and white chalk on tan board", size: "11.5x8.5in"},
		{name: "lot's wife", img: "public/Drawings/042  lot's wife   charcoal and chalk on board   14x20in.jpg", info: "charcoal and chalk on board", size: "14x20in"},
		{name: "we three", img: "public/Drawings/043 we three      charcoal and pastel on brown paper  19x24in.JPG", info: "charcoal and pastel on brown paper", size: "19x24in"},
		// {name: "woman, dark hair, dark hat, etc", img: "public/Drawings/045  woman, dark hair,dark hat,etc  charcoal white chalk brown paper 14x16.5in.JPG", info: "charcoal white chalk brown paper", size: "14x16.5in"},

		{name: "conversation", info: "red chalk, charcoal on canvas", img: "public/Drawings/CONVERSATION  charcoal and  red chalk   48x24in  1979.jpg", size: "24x48in"}, // removed: secondBottomLine: "24x48in",
		{name: "woman, three views", img: "public/Drawings/woman, three views    charcoal on brown paper 14x16.25in.jpg", info: "charcoal on brown paper", size: "14x16.25in"},
		{name: "card game", img: "public/Drawings/card game  chalks on grey paper   10x5.5in.jpg", info: "chalks on grey paper", size: "10x5.5in"},
		// {name: "mother and baby", img: "public/Drawings/mother and baby   red chalk on paper  19x24in   .jpg", info: "red chalk on paper", size: "19x24in"}

		{name: "babies (toward Nasrudin etchin)", img: "public/Drawings/Babies (toward Nasrudin etchin)   pencil  20.5x19in  .JPG", info: "pencil", size: "20.5x19in"},
		{name: "book and breakfast", img: "public/Drawings/book and breakfast   chalk and charcoal on canvas   48x48in.jpg", info: "chalk and charcoal on canvas", size: "48x48in"},
		{name: "boundary marker red chalk", img: "public/Drawings/boundary marker red chalk  20x15.75in.JPG", info: "red chalk", size: "20x15.75in"},
		{name: "c. in sunhat and beach robe", img: "public/Drawings/C. in sunhat and beach robe  charcoal on brown paper   17x24in.JPG", info: "charcoal on brown paper", size: "17x24in"},
		{name: "carosel", img: "public/Drawings/Carosel brown wash on pink paper  12x 15.24in.JPG", info: "brown wash on pink paper", size: "12x15.24in"},
		{name: "child at cards", img: "public/Drawings/child at cards  charcoal and colored chalks on brown paper  19.5x23in.JPG", info: "charcoal and colored chalks on brown paper", size: "19.5x23in"},
		{name: "geranium plant", img: "public/Drawings/Geranium Plant   brown chalk on paper  12x17.5in.jpg", info: "brown chalk on paper", size: "12x17.5in"},
		{name: "goodbye to sodom (homage to akmatova)", img: "public/Drawings/Goodbye to Sodom (Homage to Akmatova) lithograph 16.5x11in.JPG", info: "lithograph", size: "16.5x11in"},
		{name: "her mother called her dea", img: "public/Drawings/her mother called her dea  brush and brown ink on tan paper  5x12in.JPG", info: "brush and brown ink on tan paper", size: "5x12in"},
		{name: "jan sudler (for portrait blue dress)", img: "public/Drawings/Jan Sudler (for portrait BLUE DRESS) charcoal  18.5x23in.JPG", info: "charcoal", size: "18.5x23in"},
		{name: "jump", img: "public/Drawings/jump  red  chalk  on rice paper  5x12in.JPG", info: "red chalk on rice paper", size: "5x12in"},
		{name: "mother and baby", img: "public/Drawings/mother and baby   red chalk on paper  19x24in   .jpg", info: "red chalk on paper", size: "19x24in"},
		{name: "potted geranium", img: "public/Drawings/potted geranium   brown chalk on white paper 11x16in.jpg", info: "brown chalk on white paper", size: "11x16in"},
		{name: "rider on side-saddle", img: "public/Drawings/rider on side-saddle   pencil    19x15in.JPG", info: "pencil", size: "19x15in"},
		{name: "school boy", img: "public/Drawings/school boy  brown wash on tan paper  4x14in.JPG", info: "brown wash on tan paper", size: "4x14in"},
		{name: "the gift necklace they brought me from town", img: "public/Drawings/the gift necklace they brought me from town   charcoal on pink paper  19x15.5in.JPG", info: "charcoal on pink paper", size: "19x15.5in"},
		{name: "two ballerinas", img: "public/Drawings/two ballerinas   charcoal    17x24in.JPG", info: "charcoal", size: "17x24in"},
		{name: "woman in opera coat", img: "public/Drawings/woman in opera coat  charcoal  6x7in.JPG", info: "charcoal", size: "6x7in"}		
		
	]},
	{category: "flowers", paintings: [
		{name: "anemone triptych", img: "public/Flowers/ANEMONE TRIPTYCH   48''x48''.JPG", size: "48x48in"},
		{name: "anemones", img: "public/Flowers/ANEMONES 44x44in.JPG", size: "44x44in"},
		{name: "anemones in a teapot", img: "public/Flowers/anemones in a teapot  18x36in.jpg", size: "18x36in"},
		{name: "corsage", img: "public/Flowers/corsage   36x27.5in.JPG", size: "36x27.5in"},
		{name: "daffodils 1", img: "public/Flowers/daffodils 1    8x10in.JPG", size: "10x8in"},
		{name: "daffodils 4", img: "public/Flowers/daffodils 2   8x10in.JPG", size: "10x8in"},
		// {name: "daffodils 3", img: "public/Flowers/daffodils 3    8x10in.JPG", size: "8x10in"},
		// {name: "daffodils and vase", img: "public/Flowers/Daffodils and Vase   chalk pencil paint  9x12in.JPG", size: "9x12in"},
		{name: "first blooming geraniums", img: "public/Flowers/first blooming geraniums   48x24in.jpg", size: "48x24in"},
		{name: "florentine geraniums", img: "public/Flowers/florentine geraniums 48x24in.jpg", size: "48x24in"},
		{name: "flower and memory mixed media", img: "public/Flowers/flower_and_memory_mixed_media_panel_20x15in.jpg", size: "20x15in"},
		{name: "flowers, blue, pink, and violet", img: "public/Flowers/flowers,blue,pink, and violet   12x9in.JPG", size: "12x9in"},
		{name: "generative green", img: "public/Flowers/generative_green_20_39_39_x_15_39_39_mixed_media_p.jpg", size: ""}, // what size?
		{name: "geranium", img: "public/Flowers/geranium  48x24in.JPG", size: "48x24in"},
		{name: "geranium in dutchess county morning light", img: "public/Flowers/geranium in dutchesss county morning light  48x24in.jpg", size: "48x24in"},
		{name: "geranium in moonlight, as a philosopher friend addressed it", img: "public/Flowers/geranium in moonlight,as a philosopher friend addressed it   panel   12x12in.jpg", size: "16x16in"},
		{name: "geranium, magenta", img: "public/Flowers/geranium, magenta   panel    9x8in.jpg", size: "9x8in"},
		{name: "geraniums oil on panel", img: "public/Flowers/geraniums    oil on  panel   8x10in.JPG", size: "8x10in"},
		// {name: "geraniums out of florence", img: "public/Flowers/Geraniums out of Florence 24x48in.jpg", size: "24x48in"}, // duplicate
		// {name: "hydrangeas", img: "public/Flowers/hydrageas   pastel  canvas 10x10in.JPG", size: "10x10in"},
		{name: "hydrangea fresco", img: "public/Flowers/hydrangea fresco 10x10in.JPG", size: "10x10in"},
		// {name: "hydrangeas", img: "public/Flowers/hydrangeas 24x12in.JPG", size: "24x12in"}, // duplicate
		{name: "hydrangeas gathered in a pot", img: "public/Flowers/hydrangeas gathered in a pot  panel  12x8.5in.JPG", size: "12x8.5in"},
		{name: "hydrangeas in a bowl", img: "public/Flowers/hydrangeas in a bowl 12x24in.JPG", size: "12x24in"},
		{name: "hydrangeas in a tall vase", img: "public/Flowers/hydrangeas in a tall vase     pastel   36x18 in.JPG", size: "36x18in"},
		{name: "hydrangeas observed", img: "public/Flowers/hydrangeas observed  pastel  canvas  10x10in.JPG", size: "10x10in"},
		{name: "hydrangeas on grey", img: "public/Flowers/hydrangeas on grey  23x8in.JPG", size: "23x8in"},
		{name: "hydrangeas on the terrace", img: "public/Flowers/hydrangeas on the terrace  canvas   18x36in.JPG", size: "18x36in"},
		// {name: "hydrangeas, elan", img: "public/Flowers/hydrangeas, elan  pastel on  canvas        10x9in.JPG", size: "10x9in"},
		{name: "lap san", img: "public/Flowers/lap san       10x8in.JPG", size: "10x8in"},
		{name: "little pot of flowers", img: "public/Flowers/little pot of flowers    panel  8.5x7in.JPG", size: "8.5x7in"},
		{name: "on first seeing oslo", img: "public/Flowers/on first seeing oslo  panel   20x14.16in.JPG", size: "20x14.16in"},
		{name: "pink pigment", img: "public/Flowers/pink   pigment on panel   12x8in.JPG", size: "12x8in"},
		{name: "pink and blue hydrangeas", img: "public/Flowers/PINK AND BLUE HYDRANGEAS    8x10 in.jpg", size: "8x10in"},
		{name: "portuguese geraniums", img: "public/Flowers/portuguese geraniums 48x24in.jpg", size: "48x24in"},
		{name: "postcard from lucca", img: "public/Mixed-Media/postcard from lucca  mixed media on panel    32x24in.JPG", size: "32x24in"}, // this is the livelier one that Alexandra asked to have shown in this slideshow, as a duplicate from another slideshow
		
		// {name: "postcard from lucca", img: "public/Flowers/POSTCARD_FROM_LUCCA_24x32in.jpg", size: "24x32in"},
		// {name: "postcard from lucca", img: "public/Flowers/postcard from lucca  mixed media   panel      32x24in.JPG", size: "32x24in"},
		{name: "red flowers in a somewhat grey vase", img: "public/Flowers/red flowers in a somewhat grey vase  mixed media on panel  9.5x16.5in.JPG", size: "9.5x16.5in"},
		{name: "red geraniums in terracotta pot", img: "public/Flowers/red geranium in terracotta pot   18 x 22in.JPG", size: "18x22in"},
		{name: "red, very red", img: "public/Flowers/red,very red  panel   12x9.5in.jpg", size: "12x9.5in"},
		{name: "red/blue", img: "public/Flowers/redblue  48x24in.jpg", size: "48x24in"},
		// {name: "remember", img: "public/Flowers/remember   pastel  on canvas   8x10in.JPG", size: "8x10in"},
		// {name: "roses in vases", img: "public/Flowers/roses in vases oil  20x16in.Jpg", size: "20x16in"},
		{name: "studio works and days", img: "public/Flowers/studio works and days                   48 x 48in.JPG", size: "48x48in"},
		// {name: "the flowers are blue and violet", img: "public/Flowers/the flowers are blue and violet    9x12in.JPG", size: "9x12in"},
		{name: "white geranium among leaves", img: "public/Flowers/white geranium among leaves 16x12in.JPG", size: "16x12in"},
		{name: "white geranium, stretches left", img: "public/Flowers/white geranium, stretches left   8.5x12.jpg", size: "8.5x12"},
		{name: "white geranium, stretching right", img: "public/Flowers/white geranium, stretching right.jpg", size: ""}, // what size?
		{name: "white geraniums in black pot", img: "public/Flowers/white geraniums in black pot  48x48in.JPG", size: "48x48in"},
		{name: "white geraniums in glazed pot", img: "public/Flowers/white geraniums in glazed pot  31x43in.png", size: "31x43in"}
		// {name: "anemones (smaller file)", img: "public/Flowers/ANEMONES-44x44in-min.jpg", size: ""}
	]},
	{category: "trees", paintings: [
		{name: "green view", img: "public/Tree/GREEN VIEW.jpg", size: "28x38in"},
		{name: "grove", img: "public/Tree/GROVE  9 x 12 in.jpg", size: "9x12 in"},
		{name: "light after rain", img: "public/Tree/light after rain  mixed media  panel  36x30in.jpg", size: "48x36in"},
		{name: "spring in poughquag", img: "public/Tree/Spring in Poughquag  19x17in.JPG", size: "19x17in"},
		// {name: "spring on the hill", img: "public/Tree/Spring on the hill    pastel.JPG", size: ""}, // what size?
		{name: "traumerai", img: "public/Tree/traumerai   mixed media panel  36x30in.JPG", size: "48x36in"},
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

		{name: "april snow in poughquag", img: "public/Landscape/april snow in poughquag 50x26in.JPG", info: "", size: "50x26in"},
		{name: "italian landscape", img: "public/Landscape/Italian landscape    panel  8.25x4in.JPG", info: "", size: "8.25x4in"},
		{name: "late afternoon, with gelato, sienna", img: "public/Landscape/late afternoon with gelato Sienna 7.5x6.5in.JPG", info: "", size: "7.5x6.5in"}
		
	]},
	{category: "urban landscapes", paintings: [
		{name: "city", img: "public/Urban-Landscape/CITY   12x9in.jpg", size: "12x9in"}
	]},
	{category: "history, philosophy, etc.", paintings: [
		{name: "corsage", img: "public/History-Philosophy/CORSAGE  27.75x47in.JPG", size: "27.75x47in"},
		{name: "dance of the oospheres", img: "public/History-Philosophy/DANCE OF THE OOSPHERES    28x39in.jpg", size: "39x28in"},
		{name: "freud's london library", img: "public/History-Philosophy/FREUDS LONDON LIBRARY  16x23 in.JPG", size: "16x23in"},
		{name: "introspection is no longer epistemically privileged", img: "public/History-Philosophy/Introspection is no longer Epistemically Privileged 16x23 in 001 (931x1280) (2).jpg", size: "23x16in"},
		{name: "joy of dolphins", img: "public/History-Philosophy/joy of dolphins   38x29.5in.JPG", size: "38x29.5in"},
		{name: "the milk-drinkers marathon", img: "public/History-Philosophy/the milk-drinkers marathon  40x30in.JPG", size: "40x30in"},
		{name: "the sun is sometimes a danger", img: "public/History-Philosophy/the sun is sometimes a danger  39x28in.JPG", size: "39x28in"}
	]},
	{category: "people", paintings: [
		{name: "book and coffee", img: "public/People/BOOK AND COFFE   triptych  48x48in.JPG", size: "48x48in"},
		{name: "hart", img: "public/People/HART   9 x11in.jpg", size: "9x11in"},
		// {name: "hart in black jacket", img: "public/People/HART IN BLACK JACKET  48x48in.Jpg", size: "48x48in"},
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
		{name: "match under a pink sky", img: "public/Polo/match under a pink Sky 20x10in.JPG", size: "20x10in"},
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
		{name: "about horses and riders", img: "public/Prints/01 about horses and riders   etching (Nasrudin Press).JPG", info: "etching (nasrudin press)", size: ""}, // what size?
		{name: "about horses and riders", img: "public/Prints/01 Horses and riders  etching (Nasrudin press) (2).JPG", info: "etching (nasrudin press)", size: ""}, // what size?
		{name: "baby sees", img: "public/Prints/02 baby sees       etching Nasrudin Press   8x10ln.JPG", info: "etching nasrudin press", size: "8x10in"},
		{name: "new to life", img: "public/Prints/03  New to Life  etching Nasrudin Press   9x11.in.JPG", info: "etching nasrudin press", size: "9x11in"},
		{name: "child examining a Something", img: "public/Prints/Child examining a Something      diazo      13x12in.JPG", info: "diazo", size: "13x12in"},
		{name: "chimp", img: "public/Prints/chimp      diazo    12x13in.JPG", info: "diazo", size: "12x13in"},
		{name: "drape study", img: "public/Prints/drape study        diazo    11x12in   .JPG", info: "diazo", size: "11x12in"},
		{name: "dressing", img: "public/Prints/dressing     diazo   6.5x10in.JPG", info: "diazo", size: "6.5x10in"},
		{name: "dressing", img: "public/Prints/dressing    diazo      16x12in.JPG", info: "diazo", size: "16x12in"},
		{name: "dressing", img: "public/Prints/Dressing   diazo print      10x14 in (1988).jpg", info: "diazo print", size: "10x14in"},
		{name: "hart", img: "public/Prints/hart       diazo     11x13in.JPG", info: "diazo", size: "11x13in"},
		{name: "horses and riders", img: "public/Prints/Horses and riders  etching (Nasrudin press).JPG", info: "etching (nasrudin press)", size: ""}, // what size?
		{name: "new kimona", img: "public/Prints/new kimona      diazo      13x11in.JPG", info: "diazo", size: "13x11in"},
		{name: "sleeping child", img: "public/Prints/sleeping child     dizao     9x7in.JPG", info: "diazo", size: "9x7in"},
		{name: "the wonderful dress", img: "public/Prints/the wonderful dress    diazo    7x13in    .JPG", info: "diazo", size: "7x13in"},
		{name: "young woman, figure study", img: "public/Prints/Young woman, figure study    diazo    11x15in.JPG", info: "diazo", size: "11x15in"},

		
		{name: "after sodom", img: "public/Prints/after Sodom  lithograph  edition 40   11x16in.JPG", size: "11x16in", info: "lithograph  edition 40"},
		{name: "the joy of dolphins", img: "public/Prints/The Joy of Dolphins   serigraph  edition 25  30x40in.JPG", size: "30x40in", info: "serigraph  edition 25"}
	]},
	{category: "mural sketches", paintings: [
		// {name: "goodbye to sheba", img: "public/Mural-Sketches/Goodbye to Sheba  60x84in.jpg", size: "60x84in"},
		// {name: "goodbye to solomon", img: "public/Mural-Sketches/Goodbye to Solomon 60x84in.jpg", size: "60x84in"},
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
	]}]



