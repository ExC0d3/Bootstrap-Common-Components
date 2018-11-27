import React, { Component } from 'react';


class Link extends Component {
  render(){
    return( 
      <a className={`navbar-brand ${this.props.classes.link}`} href="/">{this.props.children}</a>
    );
  }
}

export default Link;
