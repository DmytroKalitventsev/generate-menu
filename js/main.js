let doc = document;

generateMenu('.header');

function generateMenu(parentSelector) {
	renderNav(parentSelector);
	renderMenuList('.menu');
	renderMenuItems('.menu-list');
}

function renderNav(parentSelector) {
	let nav = {
		className: 'menu',
		tag: 'nav',
	};

	let tagBody = doc.querySelector(parentSelector);

	let navHtml = '';

	navHtml += `<${nav.tag} class="${nav.className}"></%}>`;

	tagBody.innerHTML = navHtml;
}

function renderMenuList(parentSelector) {
	let menu = {
		className: 'menu-list',
		tag: 'ul',
	}

	let tagNav = doc.querySelector(parentSelector);

	let menuListHtml = '';

	menuListHtml += `<${menu.tag} class="${menu.className}"></%}>`;

	tagNav.innerHTML = menuListHtml;
}

function renderMenuItems(parentSelector) {
	let menuItems = [
		{ tag: 'li', title: 'Home', className: 'menu-item', classMod: 'menu-item_name' },
		{ tag: 'li', title: 'About', className: 'menu-item', classMod: 'menu-item_about' },
		{ tag: 'li', title: 'Blog', className: 'menu-item', classMod: 'menu-item_blog' },
		{ tag: 'li', title: 'Contacts', className: 'menu-item', classMod: 'menu-item_contacts' },
	];

	let menuItem = doc.querySelector(parentSelector);

	let menuItemHtml = '';

	for (let key in menuItems) {
		menuItemHtml += `<${menuItems[key].tag} class="${menuItems[key].className} ${menuItems[key].classMod}">${menuItems[key].title}</%>`;
	}
	menuItem.innerHTML = menuItemHtml;
}

