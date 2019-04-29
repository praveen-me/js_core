// Web Components
// Life Cycle Methods

// 1 - connectedCallback => browser calls it when the element is added to the document
// 2 - disconnectedCallback => browser calls it when the element is removed from the document
// 3 - attributeChangedCallback // when one the attibute changed
// 4 - adoptedCallback => when the element is moved to the different document
// 5 - static get observedAttributes => get an array of all the attributes. 

const templateParent = document.getElementById('template-parent');

class MyElement extends HTMLElement {
	connectedCallback() { // when the elem get connected with DOM
		this.render();
	}
	
	render() {
		this.innerHTML = `${new Date(this.getAttribute('datetime')).getHours()} : ${new Date(this.getAttribute('datetime')).getMinutes()} : ${new Date(this.getAttribute('datetime')).getSeconds()}`;
	}

	static get observedAttributes() {
		return ['datetime']
	}

	attributeChangedCallback() {
		this.render();
	}
}

customElements.define('my-elem', MyElement);

const customElm = document.getElementById('customElm');

setInterval(() => customElm.setAttribute('datetime', new Date()), 1000);

// Shadow Element
class showButton extends HTMLElement {
	connectedCallback() {
		const shadow = this.attachShadow({
			mode: "open"
		})
		shadow.innerHTML = `
			<style>
				button {
					border: none;
					font-size: 24px;
					padding: 1rem;
					border-radius: 4px;
					color: #dc143c;
				} 
			</style>
			<button>${this.getAttribute('name')}</button>
		`;
	}
}

customElements.define('my-btn', showButton);

templateParent.addEventListener('click', (e) => {
	const { target } = e;
	const tmpl = document.getElementById('templ');
	
	target.attachShadow({mode: "open"});

	target.shadowRoot.append(tmpl.content.cloneNode(true));
	
	target.shadowRoot.getElementById('message').innerHTML = "I am from inside the showdow element";
})