import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { RootNavigator } from '../navigators/RootNavigator';
import { store } from '../store';
import '../assets/styles/index.scss';

// -----------------------------------------------------------------

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootNavigator />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
