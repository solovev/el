import React from "react";
import { BrowserRouter } from "react-router-dom";

export const RouterProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
      {children}
    </BrowserRouter>
  );
};
