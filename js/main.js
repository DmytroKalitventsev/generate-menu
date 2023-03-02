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
	renderNav(nav, parentSelector);
	renderMenu(menu, nav.className);
	renderMenuItems(menuItems, menu.className);
}

function renderNav(navObj, parentSelector) {
	let selectorHtml = doc.querySelector(parentSelector);
	let navHtml = '';

	navHtml += `<${navObj.tag} class="${navObj.className}"></${navObj.tag}}>`;

	selectorHtml.innerHTML += navHtml;
}

function renderMenu(menuObj, navClassName) {
	let classNav = doc.querySelector(`.${navClassName}`);
	let menuListHtml = '';

	menuListHtml += `<${menuObj.tag} class="${menuObj.className}"></${menuObj.tag}}>`;

	classNav.innerHTML += menuListHtml;
}

function renderMenuItems(menuItemsObj, menuClassName) {
	let classMenu = doc.querySelector(`.${menuClassName}`);
	let menuItemsHtml = '';

	for (let key in menuItemsObj) {
		menuItemsHtml += `<${menuItemsObj[key].tag} class="${menuItemsObj[key].className} ${menuItemsObj[key].classMod}">${menuItemsObj[key].title}</${menuItemsObj[key].tag}>`;
	}

	classMenu.innerHTML += menuItemsHtml;
}