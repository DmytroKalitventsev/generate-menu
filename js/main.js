let doc = document;

let nav = {
	className: 'menu',
	tag: 'nav',
};
let menu = {
	className: 'menu-list',
	tag: 'ul',
};
let menuItems = [
	{ tag: 'li', title: 'Home', className: 'menu-item', classMod: 'menu-item_name' },
	{ tag: 'li', title: 'About', className: 'menu-item', classMod: 'menu-item_about' },
	{ tag: 'li', title: 'Blog', className: 'menu-item', classMod: 'menu-item_blog' },
	{ tag: 'li', title: 'Contacts', className: 'menu-item', classMod: 'menu-item_contacts' },
];



generateMenu('.header');

function generateMenu(parentSelector) {
	let selectorHtml = doc.querySelector(parentSelector);

	selectorHtml.innerHTML += renderNav(nav);
}

function renderNav(navObj) {
	let navHtml = '';

	navHtml += `<${navObj.tag} class="${navObj.className}">${renderMenu(menu)}</${navObj.tag}}>`;

	return navHtml;
}

function renderMenu(menuObj) {
	let menuListHtml = '';

	menuListHtml += `<${menuObj.tag} class="${menuObj.className}">${renderMenuItems(menuItems)}</${menuObj.tag}}>`;

	return menuListHtml;
}

function renderMenuItems(menuItemsObj) {
	let menuItemsHtml = '';

	for (let key in menuItemsObj) {
		menuItemsHtml += `<${menuItemsObj[key].tag} class="${menuItemsObj[key].className} ${menuItemsObj[key].classMod}">${menuItemsObj[key].title}</${menuItemsObj[key].tag}>`;
	}

	return menuItemsHtml;
}