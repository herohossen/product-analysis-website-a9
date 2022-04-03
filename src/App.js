import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard'
import Review from './components/Review/Review';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound';
import Users from './components/Users/Users';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
<Routes>
  <Route path="/"           element={<Home/>}></Route>
  <Route path="/reviews"    element={<Review/>}></Route>
  <Route path="/users"    element={<Users/>}></Route>
  <Route path="/dashboards" element={<Dashboard/>}></Route>
  <Route path="/blogs"      element={<Blogs/>}></Route>
  <Route path="/about"      element={<About/>}></Route>
  <Route path="*"      element={<NotFound/>}></Route>

</Routes>

    </div>
  );
}

export default App;
