import { BrowserRouter } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import reduxStore from './redux/reduxStore';
// Components
import DashboardHome from './pages/home/Dashboard';
import { GlobalStyle } from './components/shared/GlobalStyle';

const { store, persistor } = reduxStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <GlobalStyle />
          <DashboardHome />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
