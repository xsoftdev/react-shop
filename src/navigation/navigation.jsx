import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import ClientLayout from '../layouts/default.jsx';

import ClientIndex from '../views/client/index';
import ClientCategories from '../views/client/category.jsx';
import ClientCart from '../views/client/cart.jsx';
import ClientLiked from '../components/views/client/liked.jsx';
import ClientAboutUs from '../views/client/aboutus.jsx'
import ClientLegal from '../views/client/legal.jsx'
import ClientProduct from '../views/client/product.jsx'

import configApp from '../configs/app.js';
import ClientSubcategory from '../components/views/client/subcategory.jsx';

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path={configApp.CLIENT_PREFIX} element={<ClientLayout />}>
          <Route index element={<ClientIndex />} /> 
          <Route path='/category' element={<ClientCategories />} />
          <Route path='/cart' element={<ClientCart />} />
          <Route path='/liked' element={<ClientLiked />} />
          <Route path='/about_us' element={<ClientAboutUs />} />
          <Route path='/legal' element={<ClientLegal />} />
          <Route path='/product/:id' element={<ClientProduct />} />
          <Route path='/subcategory' element={<ClientSubcategory />} />
        </Route>

      </Routes>
    </Router>
  );
};

export default Navigation;
