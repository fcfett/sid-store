import React, { Component } from 'react';

const SideNavTrigger = class SideNavTrigger extends Component {
  componentDidMount() {
    this.inputToggleElement = document.getElementById(this.props.toggleId);
  }

  handleOnClick(event, toggle) {
    if (typeof toggle !== 'undefined') {
      event.preventDefault();
      this.inputToggleElement.checked = toggle;
    }
  }

  render() {
    const { children, toggle, toggleId, ...attributes } = this.props;
    return (
      <label onClick={(event) => this.handleOnClick(event, toggle)} htmlFor={toggleId} {...attributes}>
        {children}
      </label>
    );
  }
};

export default SideNavTrigger;
