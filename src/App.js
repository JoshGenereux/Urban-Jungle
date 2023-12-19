import './App.scss';
import Landing from './components/landing/Landing';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Landing />
      </div>
    </Provider>
  );
}

export default App;
