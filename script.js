function classToggle() {
	const navs = document.querySelectorAll('.Navbar__Items');

	navs.forEach(function(nav) {
		nav.classList.toggle('Navbar__ToggleShow');
	});
}

document
	.querySelector('.Navbar__Link-toggle')
	.addEventListener('click', classToggle);
const links = document.querySelectorAll('.Navbar__Link');
links.forEach(function(link) {
	link.addEventListener('click', classToggle);
});

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
