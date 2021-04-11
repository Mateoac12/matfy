import React, { Suspense } from 'react'
import Header from 'components/Header';
import './App.scss';
import { Route } from 'wouter'

const Home = React.lazy(() => import('./pages/Home'))
const SearchResults = React.lazy(() => import('./pages/SearchResults'))
const Detail = React.lazy(() => import('./pages/Detail'))

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={null}>
        <Route
          component={Home}
          path="/"
        />
        <Route
          component={SearchResults}
          path="/search/:keyword/:rating?"
        />
        <Route
          component={Detail}
          path="/detail/:id"
        />
      </Suspense>
    </div>
  );
}

export default App;
