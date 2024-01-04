class simonCustomElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        fetch('simon-custom-element.html')
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const template = doc.getElementById('simon-custom-element-template');
                this.shadowRoot.appendChild(template.content.cloneNode(true));
            });
    }
}

customElements.define('simon-custom-element', simonCustomElement);
