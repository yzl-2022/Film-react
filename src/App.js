import Page from './components/page/Page'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import router from './router/Router'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
