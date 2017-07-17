import { connect } from 'react-redux';
import Greeting from './greeting';
import { signOut } from '../../actions/session_actions';

const mapStateToProps = ({ currentUser }) => ({
  currentUser: currentUser
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
