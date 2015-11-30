#Continous Slider
[![Build Status](https://api.travis-ci.org/caleuanhopkins/continuousslider.svg?branch=master)](https://travis-ci.org/caleuanhopkins/continuousslider)

A simple slider that adds a contintous sliding slider to your html. A small time-filler project, welcome to any pull requests for improvements.

##Requirements

**jQuery**

`<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>`

##Setup

This project is designed to just fit into your project and to seemlessly fit into your coding. However, there is a little bit of a setup which is required to make the slider work:

###HTML Example

**HEAD**

```
<link rel="stylesheet" href="css/main.min.css" />
<link rel="stylesheet" href="css/required.min.css" />
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="js/slider.min.js"></script>
<script>
	$(document).ready( function() {
		$('#cs-slider').contSlider();
	});
</script>
```

**NOTE:** JS can and is reccomended to be added before the closing `<body>` tag.

**BODY**

```
<div id="cs-slider">
	<nav class="cs-slide-tabs">
		<ul>
			<li><a href="#" class="active">...</a></li>
			<li><a href="#">...</a></li>
			<li><a href="#">...</a></li>
		</ul>
	</nav>
	<div class="cs-slides-area">
		<div class="cs-slide active">
			...
		</div>
		<div class="cs-slide">
			...
		</div>
	</div>
</div>
```

**Wrapper**

The slider must be wrapper in an identifying element. It's reccomended that you wrap the slider in an element with an `id`:

```
<div id="cs-slider">
...
</div>
```

**Navigation/Links**

You need an element that wraps around your slider links with the class `cs-slide-tabs`. This can be a `<ul>` tag that surrounds the links. The standard reccomendation setup for the navigation is:
```
<nav class="cs-slide-tabs">
	<ul>
		<li><a href="#" class="active">...</a></li>
		<li><a href="#">...</a></li>
		<li><a href="#">...</a></li>
	</ul>
</nav>
```

**Slides &amp; Slide Area**

Finally, add a wrapper element that wraps around the slides and add the slides themselves:
```
<div class="cs-slides-area">
	<div class="cs-slide active">
		...
	</div>
	<div class="cs-slide">
		...
	</div>
</div>
```

##Options

A few options are available to make the plugin git into your layout easier.

```javascript
$(document).ready( function() {
	$('#cs-slider').contSlider({
        animationDuration: 350,
        slideMovement: 'left',
        movementMaxDistance: '100%',
        movementMinDistance: '0%',
        slideClass: '.cs-slide',
        activeSlideClass: '.active',
        activeTabClass: '.active',
        liquidHeight: false,
        slideHeight: 300
	});
});
```

`animationDuration:integer (default:350)`: in milliseconds how long the animation between slides lasts.

`slideMovement:string - left|right (default:'left')`: lets you change the slides to slide either from left-to-right or right-to-left.

`movementMaxDistance:string - px|% (default:100%)`: sets the max distance the slide has to move during the animation. `px` or `%` can be used here.

`movementMinDistance:string - px|% (default:0%)`: sets the min distance the slide has to move during the animation. `px` or `%` can be used here.

`slideClass:string (default:'.cs-slide')`: the element identifier attribute for the slide elements.

`activeSlideClass:string (default:'.active')`: sets the active state element identifer attribute for the slides.

`activeTabClass:string (default:'.active')`:  sets the active state element identifer attribute for the navigation/tabs.

`liquidheight:boolean - true|false (default:false)`: enables or disables the slider to dynamically set the height of each slide as they slide in. if you have very tall content, this options is highly recommended to by turned on to `true`.

`slideHeight:interger (default:300)`: if `liquidHeight` is set to false, you can set the height of the slide wrapper using this option. Only use this if you know that *ALL* of your slides are the *exact same height*.

##Changelog

###1.0

Check out the master branch to see the entire setup of the plugin.

##Contributing

Everyone is encouraged to help improve this project. Here are a few ways you can help:

- Report bugs
- Fix bugs and submit pull requests
- Write, clarify, or fix documentation
- Suggest or add new features

To get started with development and testing:

```sh
git clone https://github.com/caleuanhopkins/continuousslider
cd continuousslider
npm install
gulp
```

**NOTE:** For contributing, `Node.js`, `npm` and `gulp` all need to be installed on your local machine.