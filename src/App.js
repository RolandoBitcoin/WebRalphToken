import React, { useEffect } from 'react';
import Navigation from './Components/Navigation';
import "./Components/Imports/css"
import { setSocket } from './Redux/reducers/Socket';
import { connect } from 'react-redux';
function App(props) {
  const { socket, setSocket } = props;
  useEffect(() => {
    setSocket(socket)
  }, [])
  return <Navigation />
}
const MapStateToProps = (state) => {
  return {}
}
const MapDispacthToProps = dispatch => ({
  setSocket: (socket) => dispatch(setSocket(socket)),
})
export default connect(MapStateToProps, MapDispacthToProps)(App);
