import { connect } from 'react-redux';
import Home from 'components/Home';
import { toggleDialog } from 'reducers/ui';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  return {
    dialog: state.ui.dialog,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDialog: bindActionCreators(toggleDialog, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
