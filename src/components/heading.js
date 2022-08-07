import React, { Component } from 'react'

class Heading extends Component {
  innerRef = React.createRef();
  underlineCharacters = ['E', 'U', 'e', 'u'];

  componentDidMount() {
    if (typeof HTMLCollection.prototype.forEach === "undefined") {
      HTMLCollection.prototype.forEach = Array.prototype.forEach;
    }

    if (this.innerRef) {
      this.underline(this.innerRef.current.children);
    }
  }

  underline(children) {
    children.forEach((child) => {
        if (child.children) {
          this.underline(child.children);
        }

        child.innerHTML = child.innerHTML.split('').map((text) => {
          if (this.underlineCharacters.includes(text)) {
            return `<span class="text--underlined text--underlined-${text.toLowerCase()}">${text}</span>`;
          }

          return `<span>${text}</span>`;
        }).join('');
    });
  }

  render() {
    const { children } = this.props;
    return (<div ref={this.innerRef}>{children}</div>);
  }
}

export default Heading
