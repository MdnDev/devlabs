import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ServiceScreen from "./screens/ServiceScreen";
import PricingScreen from "./screens/PricingScreen";
import ContactScreen from "./screens/ContactScreen";
import BlogScreen from "./screens/BlogScreen";
import Portfolio from "./screens/Portfolio";
import LoginScreen from "./screens/LoginScreen";
import ArticleScreen from "./screens/ArticleScreen";
import BlogListScreen from "./screens/BlogListScreen";


function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/services' element={<ServiceScreen />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/pricing' element={<PricingScreen />} />
            <Route path='/contact' element={<ContactScreen />} />
            <Route path='/blog' element={<BlogScreen />} />
            <Route path='/article' element={<ArticleScreen />} />
            <Route path='/bloglist' element={<BlogListScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
