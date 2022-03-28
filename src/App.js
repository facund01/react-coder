import React from 'react';
import CartState from './context/CartContext';
import GlobalState from './context/GlobalContext';
import Rutas from './routes/Rutas';

const App = () => {
  return (
    <div>
      <GlobalState>
        <CartState>
          <Rutas />
        </CartState>
      </GlobalState>
    </div>
  );
};

export default App;