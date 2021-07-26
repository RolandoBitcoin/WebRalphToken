import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { setConfig } from 'react-google-translate'

setConfig({
  clientEmail: process.env.REACT_APP_GCP_CLIENT_EMAIL ?? '114805690393847932430',
  privateKey: process.env.REACT_APP_GCP_PRIVATE_KEY ?? '17bf590c15b4867b8a5670ca6bd1f933089f20b5',
  projectId: process.env.REACT_APP_GCP_PROJECT_ID ?? 'saveralph'
})
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
