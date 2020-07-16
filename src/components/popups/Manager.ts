import ReactDOM from 'react-dom';

const container: HTMLElement | null = document.getElementById('rcy-popups');
const containerStyle = {
  position: 'fixed',
  left: '0',
  right: '0',
  bottom: '0'
};

export const Manager = {
  zIndex: 1,
  containerStyled: false,
  render(popup: any): any {
    if (!container) {
      throw Error('Container element "#rcy-popups" is not presented in DOM. Unable to create popups.');
    }
    if (!this.containerStyled) {
      container.style.position = containerStyle.position;
      container.style.left = containerStyle.left;
      container.style.right = containerStyle.right;
      container.style.bottom = containerStyle.bottom;
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
