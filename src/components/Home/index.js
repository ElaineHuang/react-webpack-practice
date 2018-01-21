import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import image from 'assets/bear.jpg';
import styles from './home.scss';
import { Dialog, Button } from 'components';

export default class Home extends PureComponent {
  static propTypes = {
    toggleDialog: PropTypes.func,
    dialog: PropTypes.object,
  };

  static defaultProps = {
    toggleDialog: () => console.log('onToggle'),
    dialog: { show: false, component: null },
  };

  handleDialog = () => {
    this.props.toggleDialog('testDialog');
  }

  render () {
    const { dialog: { show, component }, toggleDialog } = this.props;

    return (
      <div className={styles.container}>
        <h1>Dialog / Button Component</h1>
        <Button onClick={this.handleDialog}>Dialog Test</Button>
        <h1>Image resource Test</h1>
        <img src={image} alt="images" />
        <Dialog
          show={show && component === 'testDialog'}
          onToggle={toggleDialog}
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris. Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec elementum tincidunt.<br /><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris. Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec elementum tincidunt.
        </Dialog>
      </div>
    );
  }
}
