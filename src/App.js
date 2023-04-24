import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Introduction from './Components/Introduction';
// import Header from './Components/Header';
import DrawerAppBar from './Components/HeaderMui';

function App() {
  return (
    <BrowserRouter>
      <DrawerAppBar classname="Header" />
      <div classname="lowerdiv" style={{marginTop:"5rem"}}>
        <Routes>
          <Route path="/" element={<Introduction />}/>
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
