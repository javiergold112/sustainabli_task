import { RouterProvider } from "react-router-dom";
import React from "react";
import { publicRoutes } from "../routes/route";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <RouterProvider router={publicRoutes}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
