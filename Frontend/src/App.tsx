import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage"; // example page
import AboutPage from "./pages/AboutPage"; // example page
import Chat from "./pages/chat";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SidebarTrigger />

        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </SidebarProvider>
  );
}

export default App;
