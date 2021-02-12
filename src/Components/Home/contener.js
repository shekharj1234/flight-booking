import Home from './';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { flightListAction } from './action';

const mapStateToProps = state =>({
    flightList: state.flightReducers.listResponse,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    flightListAction,
 }, dispatch);

const HomeContainer = connect(mapStateToProps, mapDispatchToProps )(Home);

export default HomeContainer;