import './App.css';
import Header from './components/header/header';
import {  BrowserRouter as Router,Routes ,Route}  from "react-router-dom";
import Add from './components/add/Add.jsx';
import ContextProvider from './components/Context/GlobalContext';
import WatchList from 'components/watchList/WatchList';
import Watched from 'components/Watched/Watched';
import Foter from 'components/foter/Foter';
import Home from 'components/Home/Home';


const App =() => {
  return (
    
    <Router>
    <ContextProvider>
      <div className="App">
        <Header />
        
        <div className="main-content">
          <Routes>
          <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/add' element={<Add />} />
            <Route path='/WatchList' element={<WatchList />} />
            <Route path='/Watched' element={<Watched />} />
          </Routes>
        </div>
        
        <Foter />
      </div>
    </ContextProvider>
  </Router>
  );
}

export default App;
