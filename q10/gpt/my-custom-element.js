class MyCustomElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        fetch('my-custom-element.html')
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const template = doc.getElementById('my-custom-element-template');
                this.shadowRoot.appendChild(template.content.cloneNode(true));
            });
    }
}

customElements.define('my-custom-element', MyCustomElement);
