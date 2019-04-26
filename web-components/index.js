// Web Components
// Life Cycle Methods

// 1 - connectedCallback => browser calls it when the element is added to the document
// 2 - disconnectedCallback => browser calls it when the element is removed from the document
// 3 - attributeChangedCallback // when one the attibute changed
// 4 - adoptedCallback => when the element is moved to the different document
// 5 - static get observedAttributes => get an array of all the attributes. 

class MyElement extends HTMLElement {
	connectedCallback() { // when the elem get connected with DOM
		this.innerHTML = this.getAttribute('text') ? this.getAttribute('text') : 'Not value to the attribute';
	}
}

customElements.define('my-elem', MyElement);