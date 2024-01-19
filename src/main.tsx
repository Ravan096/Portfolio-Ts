import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider, ColorModeScript, theme} from '@chakra-ui/react';
import {Provider} from "react-redux";
import {store} from "./store.ts"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript/>
      <Provider store={store}>
    <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
)
