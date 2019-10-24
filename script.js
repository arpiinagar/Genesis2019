document
	.querySelector('.Navbar__Link-toggle')
	.addEventListener('click', classToggle);
let Links = document.querySelectorAll('.Navbar__Link');
Links.forEach(function(link) {
	link.addEventListener('click', classToggle);
});
function classToggle() {
	const navs = document.querySelectorAll('.Navbar__Items');
	const navb = document.getElementsByClassName('Navbar')[0];
	navb.classList.toggle('bg-dark');

	navs.forEach(function(nav) {
		nav.classList.toggle('Navbar__ToggleShow');
	});
}

function myFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById('myP').classList.add('colorNav');
	} else {
		document.getElementById('myP').classList.remove('colorNav');
	}
}

window.onscroll = function() {
	myFunction();
};

var countDownDate = new Date('Nov 1, 2019 9:00:00').getTime();

// Update the count down every 1 second
var x = setInterval(function() {
	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	document.getElementById('demo').innerHTML =
		days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

	// If the count down is over, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById('demo').innerHTML = 'EXPIRED';
	}
}, 1000);

function dropinfo1() {
	var x = document.getElementById('info1-mob');
	if (x.className.indexOf('w3-drop-1') == -1) {
		x.className += 'w3-drop-1';
		var y = document.getElementById('info2-mob');
		var z = document.getElementById('info3-mob');
		y.className = y.className.replace('w3-drop-2', '');
		z.className = z.className.replace('w3-drop-3', '');
	} else {
		x.className = x.className.replace('w3-drop-1', '');
	}
}
function dropinfo2() {
	var x = document.getElementById('info2-mob');
	if (x.className.indexOf('w3-drop-2') == -1) {
		x.className += 'w3-drop-2';
		var y = document.getElementById('info1-mob');
		var z = document.getElementById('info3-mob');
		y.className = y.className.replace('w3-drop-1', '');
		z.className = z.className.replace('w3-drop-3', '');
	} else {
		x.className = x.className.replace('w3-drop-2', '');
	}
}
function dropinfo3() {
	var x = document.getElementById('info3-mob');
	if (x.className.indexOf('w3-drop-3') == -1) {
		x.className += 'w3-drop-3';
		var y = document.getElementById('info2-mob');
		var z = document.getElementById('info1-mob');
		y.className = y.className.replace('w3-drop-2', '');
		z.className = z.className.replace('w3-drop-1', '');
	} else {
		x.className = x.className.replace('w3-drop-3', '');
	}
}
