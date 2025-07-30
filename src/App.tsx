import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Team from "./pages/Team";
import TeamProfile from "./pages/TeamProfile";
import Blog from "./pages/Blog";
// import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import './index.css'
import { Contact } from "lucide-react";
import BlogArticle from "./pages/BlogArticle";
import BlogReadMore from "./pages/BlogReadMore";
import Careers from "./pages/Careers";
import ForgotPassword from "./pages/ForgotPassword";
import JoinTeam from "./pages/JoinTeam";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Pages with Layout */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/products" element={<Layout><Products /></Layout>} />
          <Route path="/team" element={<Layout><Team /></Layout>} />
          <Route path="/team/:id" element={<Layout><TeamProfile /></Layout>} />
          <Route path="/blog" element={<Layout><Blog /></Layout>} />
          {/* <Route path="/contact" element={<Layout><Contact /></Layout>} /> */}
          <Route path="/blog/read-more" element={<Layout><BlogReadMore /></Layout>} />
          <Route path="/blog/article/:id" element={<Layout><BlogArticle /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/careers" element={<Layout><Careers /></Layout>} />
          <Route path="/careers/:id" element={<Layout><Careers /></Layout>} />
          
          {/* Auth Pages (No Layout) */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/join-team" element={<JoinTeam />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>

  // <div className="bg-blue-200 p-4">hello</div>
);

export default App;
