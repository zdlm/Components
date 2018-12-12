/**
 * Component class
 * @class
 */
export default class Component extends HTMLElement {
	_template;
	// Invoked when the custom element is first connected to the document's DOM.
	constructor() {
		super();
		this._template = document.createElement('template');
	}
	connectedCallback() {
		this._render();
		this.appendChild(this._template.content.cloneNode(true));
		this._connect();
	}
	/**
	 * These are native lifecycle methods from High-level views
	 * AKA Custom elements
	 */
	// Invoked when the custom element is disconnected from the document's DOM.
	disconnectedCallback() {
		// ...
	}
	// Invoked when the custom element is moved to a new document.
	adoptedCallback() {

	}
	//  Invoked when one of the custom element's attributes is added, removed, or changed.
	attributeChangedCallback() {

	}
	get style() {
		return this.style;
	}
	set style(styles) {
		this.style = styles;
	}

	// Below, you can get/set your ex. checkbox' state
	set checked(value) {
		this._checked = Boolean(value);
	}
	get checked() {
		return this.hasAttribute('checked');
	}
	_connect() {
		// Put all event listener bindings and dom element declarations here
	}
	async _render() {
		// use this for set innerHTML of your template
		this._template.innerHTML = this.render();
	}
}


