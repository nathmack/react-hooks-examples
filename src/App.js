import React, { useState } from 'react';
import './App.css';

import ButtonToggle from './components/StateHook';
import ReducerHook from './components/ReducerHook';
import EffectHook from './components/EffectHook';
import EffectHookUpdate from './components/EffectHookUpdate';
import ContextHook from './components/ContextHook';
import Hooks from './components/Hooks';
import Intro from './components/Intro';

function App() {
  const [page, setPage] = useState(0)

  const renderPage = () => {
    switch (page) {
      default:
      case 0:
        return <Intro />
      case 1:
        return <ButtonToggle />
      case 2:
        return <ReducerHook />
      case 3:
        return <EffectHook />
      case 4:
        return <EffectHookUpdate />
      case 5:
        return <ContextHook />
      case 6:
        return <Hooks />
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <section className="nav">
          {page > 0 && page < 5 && <div onClick={() => setPage(s => s - 1)}>Prev</div>}
          {page < 6 && <div onClick={() => setPage(s => s + 1)}>Next</div>}
          {page === 6 && <div onClick={() => setPage(s => 0)}>Start</div>}
        </section>
        {renderPage()}
      </header>
    </div>
  );
}

export default App;
