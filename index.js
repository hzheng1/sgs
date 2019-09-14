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
	}
});

let cardsData = undefined;

const CARD_TYPE = {
	TOOL: 'tool',
	WEAPON: 'weapon',
	ARMOR: 'armor',
	HORSE: 'horse'
};

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
				(searchTerm.length == 0 || searchTerm.split('\s+').reduce((acc, cv) => {
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

const cardImageClicked = (index) => {
	document.querySelector('#sgs-navigator').pushPage('card-data.html', 
			{data: cardsData.cards[index]});
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