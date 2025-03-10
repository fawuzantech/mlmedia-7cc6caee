
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/ServicesPage";
import DigitalPrinting from "./pages/services/DigitalPrinting";
import GraphicDesign from "./pages/services/GraphicDesign";
import Branding from "./pages/services/Branding";
import WebSolutions from "./pages/services/WebSolutions";
import Photography from "./pages/services/Photography";
import ThreeDSigns from "./pages/services/ThreeDSigns";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/digital-printing" element={<DigitalPrinting />} />
            <Route path="/services/graphic-design" element={<GraphicDesign />} />
            <Route path="/services/branding" element={<Branding />} />
            <Route path="/services/web-solutions" element={<WebSolutions />} />
            <Route path="/services/photography" element={<Photography />} />
            <Route path="/services/3d-signs" element={<ThreeDSigns />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
