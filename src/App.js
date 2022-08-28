import React from 'react';
import ButtonAppBar from './Component/AppBar';
import TabPanel from './Component/TabBar';
// import BottomAppBar from './Component/BottomAppBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './Component/Page/Page';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ButtonAppBar />
        {/* <TabPanel /> */}
        <Routes>
          <Route path="/" element={<TabPanel />} />
          <Route exact path="/page/" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
