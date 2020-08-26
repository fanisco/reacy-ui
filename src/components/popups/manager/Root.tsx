import React, {Component} from 'react';
import {Manager} from './Manager';
import {Popup} from './Popup';
import {withPopups} from './withPopups';

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
    document.addEventListener('click', this.onDocumentClick, false);
    this.props.popupManager.subscribe(this.onPopupChange);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick, false);
    this.props.popupManager.unsubscribe(this.onPopupChange);
  }

  render() {
    return this.props.popupManager.popups.filter(popup => popup.area === this.props.area).map((popup: Popup) => (
      <popup.ComponentClass key={popup.id} isOpen={popup.isOpen} {...popup.props}/>
    ));
  }
}

const wrappedRoot = withPopups()(Root);
export {wrappedRoot as Root};
