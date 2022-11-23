import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/remote-b";
import About from "./pages/about";
import Notfound from "./pages/not-found";
import CountProvider from "orchestrator/count_provider";
import { Layout } from "orchestrator/layout";

import "./styles/global.css";

const App = () => (
  <Layout>
    <CountProvider>
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </Suspense>
    </CountProvider>
  </Layout>
);

export default App;
