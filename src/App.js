import React, { useEffect } from 'react';
import Navigation from './Components/Navigation';
import "./Components/Imports/css"
import { setSocket } from './Redux/reducers/Socket';
import { connect } from 'react-redux';
import { setPrices } from './Redux/reducers/Price';
import axios from 'axios';
import { setLocation } from './Redux/reducers/Location';
function App(props) {
  const { socket, setSocket, setPrices, setLocation } = props;
  useEffect(() => {
    axios.get("https://geolocation-db.com/json/f9902210-97f0-11eb-a459-b997d30983f1").then(r => setLocation(r.data))
    setSocket(socket)
    // socket.emit("CryptoCoins", (res) => {
    //   setPrices(res)
    // })
    // socket.on("ActualizarPrecios", (res) => {
    //   setPrices(res)
    // })
  }, [])
  return <Navigation />
}
const MapStateToProps = (state) => {
  return {}
}
const MapDispacthToProps = dispatch => ({
  setSocket: (socket) => dispatch(setSocket(socket)),
  setPrices: (prices) => dispatch(setPrices(prices)),
  setLocation: (location) => dispatch(setLocation(location)),
})
export default connect(MapStateToProps, MapDispacthToProps)(App);
