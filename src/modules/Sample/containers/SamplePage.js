import { connect } from 'react-redux';

import ActionTypes from '../ActionTypes';
import SamplePage from '../components/SamplePage';

const mapDispatchToProps = dispatch => ({
   onButtonClick: (evt) => {
       dispatch({type: ActionTypes.MAKE_SAMPLE_API_CALL});
   }
});

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    messages: state.sample.messages
});

export default connect(mapStateToProps, mapDispatchToProps)(SamplePage);