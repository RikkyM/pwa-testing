class SkipContent extends window.HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <a href="./#mainContent" id="skip" tabindex="1">Skip To Content</a>
    `
  }
}

window.customElements.define('skip-content', SkipContent)
