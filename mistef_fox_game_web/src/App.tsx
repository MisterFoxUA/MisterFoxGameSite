import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { DetailsPage } from './pages/DetailsPage';
import { AboutUs } from './pages/AboutUs';
import { Pages } from './const';
import { Helmet } from 'react-helmet';

require('./styles/reset.css');
require('./styles/basic.css');

function App() {
  return (
    <Router>
      <Helmet>
        <title>Mister Fox WebGaming</title>
        <meta name="description" content="Mister Fox WebGaming is an immersive online gaming platform where players can dive into a world of diverse entertainment, from classic games to the latest innovative experiences. Our games are designed for maximum engagement and comfort, accessible on any device, and ready to deliver unforgettable moments. Join the adventure with Mister Fox WebGaming — where the thrill is always within reach!" />
        <meta property="og:title" content="Mister Fox WebGaming" />
        <meta property="og:description" content="Mister Fox WebGaming is an immersive online gaming platform where players can dive into a world of diverse entertainment, from classic games to the latest innovative experiences. Our games are designed for maximum engagement and comfort, accessible on any device, and ready to deliver unforgettable moments. Join the adventure with Mister Fox WebGaming — where the thrill is always within reach!" />
      </Helmet>
      <div className='blur'>
        <Routes>
          <Route path={Pages.Main} element={<MainPage />} />
          <Route path={Pages.Details} element={<DetailsPage />} />
          <Route path={Pages.AboutUs} element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
