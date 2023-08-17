import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Banner fetchUrl={requests.fetchNetflixOriginals}></Banner>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow></Row>
      <Row title="TOP TRENDINGS" fetchUrl={requests.fetchTrendings}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchAction}></Row>
      <Row title="Adventure Movies" fetchUrl={requests.fetchAdventure}></Row>
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimation}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedy}></Row>
      <Row title="Documentary Movies" fetchUrl={requests.fetchDocumentary}></Row>
      <Row title="Thrill Movies" fetchUrl={requests.fetchThrill}></Row>

    </div>
  );
}

export default App;
