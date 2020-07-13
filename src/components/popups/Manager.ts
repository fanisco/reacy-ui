import ReactDOM from 'react-dom';
const container: HTMLDivElement = document.getElementById('rcy-popups');

export const Manager = {
  zIndex: 1,
  render(popup: any): any {
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
