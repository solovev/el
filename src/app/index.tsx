import "./index.css";

import { Route,Routes } from "react-router-dom";

import { Layout } from "@/app/Layout";
import { Providers } from "@/app/providers";
import { Landing } from "@/pages";

export const App = () => {
  return (
    <Providers>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </Providers>
  );
};
