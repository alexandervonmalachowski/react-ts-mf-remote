import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/remote-b";
import About from "./pages/about";
import Notfound from "./pages/not-found";
import CountProvider from "remote_a/count_provider";
import { Layout } from "remote_a/layout";

import "remote_a/global_css";
import { TopNavigation } from "remote_a/top_navigation";
import localRoutes from "./utils/routes";
import { Footer } from "remote_a/footer";

const App = () => (
  <>
    <TopNavigation routes={localRoutes("")} />
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
    <Footer />
  </>
);

export default App;
