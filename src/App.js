import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Introduction from './Components/Introduction';
import DrawerAppBar from './Components/HeaderMui';
// import Publications from './Components/Publications';
// import BroaderImpacts from './Components/BroaderImpacts';
// import {Facilities} from './Components/Facilities';

function App() {
  return (
    <BrowserRouter>
      <DrawerAppBar classname="Header" />
      <div classname="lowerdiv" style={{marginTop:"5rem"}}>
        <Routes>
          <Route path="/" element={<Introduction />}/>
          <Route path="/Introduction" element={<Introduction />}/>
          {/* <Route path="/BroaderImpacts" element={<Facilities />}/> */}
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
