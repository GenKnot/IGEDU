// Site behaviour: sticky header, off-canvas menu, mobile accordion. No dependencies.
(function () {
	var d = document;
	var header = d.querySelector('header.header--sticky');
	var top = d.querySelector('.header-top-one-wrapper');
	var last = 0;
	function onScroll() {
		if (!header) return;
		var y = window.pageYOffset || 0;
		if (y > header.offsetHeight && y > last) header.classList.add('back-hide-header');
		else if (y < last) header.classList.remove('back-hide-header');
		header.classList.toggle('fixed', y > 300);
		if (top) top.style.display = y <= 100 ? '' : 'none';
		last = y;
	}
	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();

	var side = d.getElementById('side-bar');
	var btn = d.getElementById('menu-btn');
	function setOpen(open) {
		if (!side) return;
		side.classList.toggle('show', open);
		if (btn) btn.setAttribute('aria-expanded', String(open));
	}
	if (btn) {
		btn.setAttribute('role', 'button');
		btn.setAttribute('tabindex', '0');
		btn.setAttribute('aria-controls', 'side-bar');
		btn.setAttribute('aria-expanded', 'false');
		btn.addEventListener('click', function (e) { e.stopPropagation(); setOpen(true); });
		btn.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(true); } });
	}
	var close = d.querySelector('.close-icon-menu');
	if (close) close.addEventListener('click', function () { setOpen(false); });
	d.addEventListener('click', function (e) {
		if (side && side.classList.contains('show') && !side.contains(e.target)) setOpen(false);
	});
	d.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });

	// Mobile menu accordion (replaces metisMenu)
	d.querySelectorAll('#mobile-menu-active > li.has-droupdown > a').forEach(function (a) {
		var li = a.parentElement;
		var sub = li.querySelector('.submenu');
		a.setAttribute('aria-expanded', 'false');
		a.addEventListener('click', function (e) {
			e.preventDefault();
			var open = !sub.classList.contains('mm-show');
			d.querySelectorAll('#mobile-menu-active .submenu.mm-show').forEach(function (s) {
				s.classList.remove('mm-show');
				s.parentElement.classList.remove('mm-active');
				s.parentElement.firstElementChild.setAttribute('aria-expanded', 'false');
			});
			if (open) { sub.classList.add('mm-show'); li.classList.add('mm-active'); a.setAttribute('aria-expanded', 'true'); }
		});
	});
})();
