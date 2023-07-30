import React from "react";

import { RouterProvider } from "./RouterProvider";

export const Providers = ({ children }: React.PropsWithChildren) => {
  return <RouterProvider>{children}</RouterProvider>;
}
