import Main from "./root/main";
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <CookiesProvider>
      <Main/>
    </CookiesProvider>
    </BrowserRouter>
  );
}

export default App;
