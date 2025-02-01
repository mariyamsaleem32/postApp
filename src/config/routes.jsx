import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Layout from '../components/Layout';
import NoFound from '../components/noFound'
import { Routes,Route,  } from 'react-router';

function Routing() {
    return(
    <Routes>
    <Route path='/home' element={<Layout><Home/></Layout>}/>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='*' element={<NoFound/>}/>
    {/* <Route path='*' element={<Navigate to={'/'}/>}/> */}
    </Routes>
    )
}
export default Routing;