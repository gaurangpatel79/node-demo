import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'

class LeftMenu extends React.Component {
  
  
  getStyles()
  {
	  let styles;
	  styles = {
			  bmBurgerButton: {
			    position: 'fixed',
			    width: '36px',
			    height: '30px',
			    left: '36px',
			    top: '36px'
			  },
			  bmBurgerBars: {
			    background: '#265a88'
			  },
			  bmCrossButton: {
			    height: '24px',
			    width: '24px'
			  },
			  bmCross: {
			    background: '#bdc3c7'
			  },
			  bmMenu: {
			    background: '#265a88',
			    padding: '2.5em 1.5em 0',
			    fontSize: '0.95em'
			  },
			  bmMorphShape: {
			    fill: '#373a47'
			  },
			  bmItemList: {
			    color: '#b8b7ad',
			    padding: '0.8em'
			  },
			  bmItem: {
			    display: 'inline-block'
			  },
			  bmOverlay: {
			    background: 'rgba(0, 0, 0, 0.3)'
			  }
			}
	  return styles;
  }

  render () {
    return (
      <Menu styles={this.getStyles()} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } left width={ 350 }>
      <span><i className="fa fa-fw fa-users" /> CUSTOMER ADVOCATE</span>
      <span></span>
      <span><i className="fa fa-fw fa-briefcase" /> BUSINESS ADMINISTRATION</span>
      <a key="0" href=""><i className="fa fa-fw" /><span>CONTRACT NUMBER SEARCH</span></a>
      <a key="1" href=""><i className="fa fa-fw" /><span>VIP ADMINISTRATION</span></a>
      <a key="2" href=""><i className="fa fa-fw" /><span>RULE ADMINISTRATION</span></a>
      <a key="3" href=""><i className="fa fa-fw" /><span>VDN GRID</span></a>
      <a key="4" href=""><i className="fa fa-fw" /><span>ASC DEDICATED ROUTING</span></a>
      <a key="5" href=""><i className="fa fa-fw" /><span>CALLER INTENT</span></a>
      <a key="5" href=""><i className="fa fa-fw" /><span>DENIS INFORMATION</span></a>
      <a key="5" href=""><i className="fa fa-fw" /><span>VDN OVERRIDE</span></a>
      <a key="5" href=""><i className="fa fa-fw" /><span>CLAIM DENIAL</span></a>
      <a key="5" href=""><i className="fa fa-fw" /><span>EMB DEDICAED ROUTING</span></a>
      <span><i className="fa fa-fw fa-binoculars" /> LOOKUP</span>
      <span><i className="fa fa-fw fa-life-ring" /> TECHNICAL SUPPORT</span>
      </Menu>
    );
  }
}

export default LeftMenu;