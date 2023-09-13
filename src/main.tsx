import ReactDOM from 'react-dom/client'
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import App from './App.tsx'
import { StrictMode } from 'react';

const element = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(element!);

reactRoot.render(
  <StrictMode>
    <FluentProvider theme={teamsLightTheme}>
      <App />
    </FluentProvider>
  </StrictMode>,
)
