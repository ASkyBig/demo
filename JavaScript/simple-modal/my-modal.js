"use strict"
(function() {
	function modal_alert(options={}) {
		var defaultOpts = {
			content: 'Error',
			time: 3000
		}

		for( let key in defaultOpts) {
			if(options[key] === undefined) {
				options[key] = defaultOpts[key]
			}
		}

		if(document.getElementById("my-toast")) {
			return;
		}

		var ele = document.createElement("div");
		ele.style.fontSize = '48px'
		ele.innerHTML = options.content
		// ele.style.width = options.width + 'px'
		ele.style.padding = '50px'
		// ele.style.height = options.height + 'px'
		ele.style.margin = '40px'
		ele.style.borderRadius = '10%'
		ele.style.color = '#FFF'
		ele.style.backgroundColor = "black"
		ele.style.display = 'flex'
		ele.style.flexDirection = 'row'
		ele.style.justifyContent = 'center'
		ele.style.alignItems = 'center'
		

		var elediv = document.createElement("div");
		elediv.id = 'my-toast'
		elediv.style.width = '100%'
		elediv.style.height = '100%'
		elediv.style.position = "fixed";
		elediv.style.top = 0;
	    elediv.style.left = 0;
		elediv.animate([ 
		  { 
		    opacity: 0
		  }, 
		  { 
		    opacity: 1
		  }
		], 500);
		elediv.style.transparent = "0"
		elediv.style.display = 'flex'
		elediv.style.flexDirection = 'row'
		elediv.style.justifyContent = 'center'
		if(options.position === 'bottom') {
			elediv.style.alignItems = 'flex-end'
		} else {
			elediv.style.alignItems = 'center'
		}

		elediv.appendChild(ele)
		document.body.append(elediv)

		var t = setTimeout(function() {
			document.body.removeChild(document.getElementById("my-toast"))
			clearTimeout(t)
		}, options.time)
	}
})()
