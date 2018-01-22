import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';

import { Main } from './components/Main';
import './app.scss';

const store = configureStore();

ReactDom.render(<Provider store={store}>
  <Main />
</Provider>, document.getElementById('app'));
