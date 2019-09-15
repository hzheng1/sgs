document.addEventListener('init', (event) => {
	const page = event.target;
	if (page.id === 'card-search') {
		cardSearchChanged();	
	} else if (page.id === 'card-data') {
		document.querySelector('#card-data-toolbar').innerHTML = page.data.name;
		document.querySelector('#card-data-title').innerHTML = `(${page.data.pronunciation}): ${page.data.engName}`;
		document.querySelector('#card-data-image').src = `data/rawImages/cropped-${page.data.image}.jpg`;
		document.querySelector('#card-data-cn-meaning').innerHTML = page.data.cnName;
		document.querySelector('#card-data-desc').innerHTML = page.data.effect;
	} else if (page.id === 'hero-search') {
		heroSearchChanged();
	} else if (page.id === 'hero-data') {
		document.querySelector('#hero-data-toolbar').innerHTML = page.data.name;
		document.querySelector('#hero-data-title').innerHTML = `(${page.data.pronunciation}): ${page.data.engName}`;
		document.querySelector('#hero-data-image').src = `data/heroImages/cropped-${page.data.image}.jpg`;
		document.querySelector('#hero-data-cn-meaning').innerHTML = page.data.blurb;
		document.querySelector('#hero-data-desc').innerHTML = page.data.effect.replace(/\n/g, '<br />');
		document.querySelector('#hero-faction').innerHTML = HERO_ELEMS.FACTION[page.data.faction];
		document.querySelector('#hero-gender').innerHTML = HERO_ELEMS.GENDER[page.data.gender];
		document.querySelector('#hero-health').innerHTML = page.data.health;
		document.querySelector('#hero-ruler').innerHTML = HERO_ELEMS.CHECKMARK[page.data.isRuler ? 'CHECKED' : 'UNCHECKED'];
	}
});

let cardsData = undefined;

const CARD_TYPE = {
	TOOL: 'tool',
	WEAPON: 'weapon',
	ARMOR: 'armor',
	HORSE: 'horse'
};

const HERO_TYPE = {
	SHU: 'shu',
	WEI: 'wei',
	WU: 'wu',
	HERO: 'qun',
	GOD: 'shen'
};

const HERO_ELEMS = {
	FACTION: {},
	GENDER: {
		'm': 'Male',
		'f': 'Female'
	},
	CHECKMARK: {
		CHECKED: '<ons-icon icon="md-check"></ons-icon>',
		UNCHECKED: '<ons-icon icon="md-close"></ons-icon>',
	}
};

HERO_ELEMS.FACTION[HERO_TYPE.SHU] = 'Shu (蜀)';
HERO_ELEMS.FACTION[HERO_TYPE.WEI] = 'Wei (魏)';  
HERO_ELEMS.FACTION[HERO_TYPE.WU] = 'Wu (吴)';
HERO_ELEMS.FACTION[HERO_TYPE.HERO] = 'Hero (群)'; 
HERO_ELEMS.FACTION[HERO_TYPE.GOD] = 'God (神)';

const cardSearchChanged = () => {
	if (!cardsData) {
		fetch('data/cards.json').then((res) => {return res.json();}).then((json) => {
			cardsData = json;
			cardsData.cards.forEach((item, i) => {
				item['index'] = i;
			});
			cardSearchChanged();
		});
		return;
	}
	const searchTools = document.querySelector('#search-tools').checked,
				searchWeapons = document.querySelector('#search-weapons').checked,
				searchArmor = document.querySelector('#search-armor').checked,
				searchHorses = document.querySelector('#search-horses').checked,
				searchTerm = document.querySelector('#card-search-bar').value.trim().toLowerCase();
	let filteredCards = cardsData.cards.filter((item) => {
		return (searchTools && item.type === CARD_TYPE.TOOL || 
				searchWeapons && item.type === CARD_TYPE.WEAPON || 
				searchArmor && item.type === CARD_TYPE.ARMOR || 
				searchHorses && item.type === CARD_TYPE.HORSE) &&
				(searchTerm.length == 0 || searchTerm.split(/\s+/).reduce((acc, cv) => {
					return acc || item.cards.indexOf(cv) != -1;
				}, false));
	});
	let searchResultHTML = '';
	filteredCards.forEach((elem, i) => {
		const imgTag = `<img class="card-search-img" src="data/rawImages/cropped-${elem.image}.jpg" onclick="cardImageClicked(${elem.index})"></img>`;
		if (i % 2 == 0) {
			searchResultHTML += `<ons-row class="center"><ons-col style="margin-left:2px;margin-right:2px;">${imgTag}</ons-col>`;
		} else {
			searchResultHTML += `<ons-col style="margin-left:2px;margin-right:2px;">${imgTag}</ons-col></ons-row>`;
		}
	});
	document.querySelector('#search-results').innerHTML = searchResultHTML;
};

const heroSearchChanged = () => {
	if (!cardsData) {
		fetch('data/cards.json').then((res) => {return res.json();}).then((json) => {
			cardsData = json;
			let healthValues = new Set();
			cardsData.heroes.forEach((item, i) => {
				item['index'] = i;
				healthValues.add(item.health);
			});
			let selectOptions = '<option value="-1">All</option>';
			[...healthValues].sort().forEach((elem) => {
				selectOptions += `<option value="${elem}">${elem}</option>`;
			});
			document.querySelector('#search-health-select').innerHTML = selectOptions;
			heroSearchChanged();
		});
		return;
	}
	const searchShu = document.querySelector('#search-shu').checked,
				searchWei = document.querySelector('#search-wei').checked,
				searchWu = document.querySelector('#search-wu').checked,
				searchHeroes = document.querySelector('#search-heroes').checked,
				searchGods = document.querySelector('#search-gods').checked,
				searchHealth = parseInt(document.querySelector('#search-health').value),
				searchTerm = document.querySelector('#hero-search-bar').value.trim();
	let filteredCards = cardsData.heroes.filter((item) => {
		return (searchShu && item.faction === HERO_TYPE.SHU || 
				searchWei && item.faction === HERO_TYPE.WEI || 
				searchWu && item.faction === HERO_TYPE.WU || 
				searchHeroes && item.faction === HERO_TYPE.HERO || 
				searchGods && item.faction === HERO_TYPE.GOD) &&
				(searchHealth === -1 || item.health === searchHealth) &&
				(searchTerm.length == 0 || searchTerm.split(/\s+/).reduce((acc, cv) => {
					return acc || item.name === cv;
				}, false));
	});
	let searchResultHTML = '';
	filteredCards.forEach((elem, i) => {
		const imgTag = `<img class="card-search-img" src="data/heroImages/cropped-${elem.image}.jpg" onclick="heroImageClicked(${elem.index})"></img>`;
		if (i % 3 == 0) {
			searchResultHTML += `<ons-row class="center"><ons-col style="margin-left:2px;margin-right:2px;">${imgTag}</ons-col>`;
		} else if (i % 3 == 1) {
			searchResultHTML += `<ons-col style="margin-left:2px;margin-right:2px;">${imgTag}</ons-col>`;
		} else {
			searchResultHTML += `<ons-col style="margin-left:2px;margin-right:2px;">${imgTag}</ons-col></ons-row>`;
		}
	});
	document.querySelector('#hero-search-results').innerHTML = searchResultHTML;
};

const cardImageClicked = (index) => {
	document.querySelector('#sgs-navigator').pushPage('card-data.html', 
			{data: cardsData.cards[index]});
};

const heroImageClicked = (index) => {
	document.querySelector('#sgs-navigator').pushPage('hero-data.html', 
			{data: cardsData.heroes[index]});
};

const LOADED_TEMPLATES = {};

const helperGetTemplate = (template) => {
	return new Promise((res, rej) => {
		if (template in LOADED_TEMPLATES) {
			res(LOADED_TEMPLATES[template]);
			return;
		}
		fetch(`templates/${template}.html.template`).then((response) => {
			return response.text();
		}).then((text) => {
			LOADED_TEMPLATES[template] = text;
			res(text);
		}).catch(rej);
	});
};

const helperFillTemplateAnchors = (id, template, payload) => {
	return helperGetTemplate(template).then((templateContents) => {
		document.querySelector(`#${id}`).innerHTML = 
				Mustache.render(templateContents, payload);
	});
};