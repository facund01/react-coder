import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from '../components/Cart';
import ItemDetailContainer from '../components/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer';
import Navbar from '../components/Navbar';

const Rutas = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </Router>
    );
};

export default Rutas;