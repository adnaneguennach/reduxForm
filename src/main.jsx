import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { legacy_createStore } from 'redux'
import reducerFunction from './Config/reducer.jsx'

const store = legacy_createStore(reducerFunction)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
