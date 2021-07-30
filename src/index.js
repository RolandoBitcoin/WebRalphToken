import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-app-polyfill/ie11';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// serviceWorkerRegistration.register();
serviceWorkerRegistration.register({
  onUpdate: registration => {
    alert('New version available!  Ready to update?');
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
    window.location.reload();
  }
});
reportWebVitals();
