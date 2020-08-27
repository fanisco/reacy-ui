import React, {Component} from 'react';
import {Manager} from './Manager';
import {Popup} from './Popup';
import {withPopups} from './withPopups';
import {config} from '../../../config';

class Root extends Component<{popupManager: Manager; area: string}> {

  constructor(p: any, c: any) {
    super(p, c);
    this.onDocumentClick = this.onDocumentClick.bind(this);
    this.onPopupChange = this.onPopupChange.bind(this);
  }

  onDocumentClick(e: Event) {
    this.props.popupManager.closeOther(e.target as Element);
  }

  onPopupChange() {
    this.forceUpdate();
  }

  componentDidMount() {
    if (this.props.area === config.popups.area) {
      document.addEventListener('click', this.onDocumentClick, false);
    }
    this.props.popupManager.subscribe(this.onPopupChange);
  }
  componentWillUnmount() {
    if (this.props.area === config.popups.area) {
      document.removeEventListener('click', this.onDocumentClick, false);
    }
    this.props.popupManager.unsubscribe(this.onPopupChange);
  }

  render() {
    return this.props.popupManager.popups.filter(popup => popup.area === this.props.area).map((popup: Popup) => (
      <popup.Component key={popup.id} isOpen={popup.isOpen} {...popup.props}/>
    ));
  }
}

const wrappedRoot = withPopups()(Root);
export {wrappedRoot as Root};
