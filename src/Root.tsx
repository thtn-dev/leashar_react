import { createRoot } from 'react-dom/client';
import { ComponentType, StrictMode } from 'react';
import { Provider } from 'react-redux';
import store from './stores/store';
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

function render(App: ComponentType) {
  root.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
}

export default render;
