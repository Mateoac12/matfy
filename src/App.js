import React from 'react'
import Header from 'components/Header';
import SearchResults from 'pages/SearchResults'
import './App.scss';
import { Route } from 'wouter'

function App() {
  return (
    <div className="App">
      <Header />
      <Route
        component={SearchResults}
        path="/search/:keyword"
      />
    </div>
  );
}

export default App;
