document.addEventListener('init', (event) => {
	const page = event.target;
	if (page.id === 'card-search') {
		cardSearchChanged();	
	}
});

const cardSearchChanged = () => {
	console.log(document.querySelector('#card-search-bar').value);
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