import React, { useEffect } from 'react';
import Navigation from './Components/Navigation';
import { connect } from 'react-redux';
// import axios from 'axios';
import { setLocation } from './Redux/reducers/Location';
function App(props) {
  const { setLocation } = props;
  return <Navigation />
}
const MapStateToProps = (state) => {
  return {}
}
const MapDispacthToProps = dispatch => ({
  setLocation: (location) => dispatch(setLocation(location)),
})
export default connect(MapStateToProps, MapDispacthToProps)(App);
