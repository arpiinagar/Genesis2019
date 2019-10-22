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
