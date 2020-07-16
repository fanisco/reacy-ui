import ReactDOM from 'react-dom';
const container: HTMLElement | null = document.getElementById('rcy-popups');

export const Manager = {
  zIndex: 1,
  render(popup: any): any {
    if (!container) {
      throw Error('Container element "#rcy-popups" is not presented in DOM. Unable to create popups.');
    }
    const style = popup.props.style || {};
    return ReactDOM.createPortal({
      ...popup,
      props: {
        ...popup.props,
        style: {...style, zIndex: this.zIndex++}
      }
    }, container);
  }
};
