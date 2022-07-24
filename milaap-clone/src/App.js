import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import  AllRoutes  from './AllRoutes/AllRoutes';
import Fundraising from './Components/Pages/Fundraising';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <AllRoutes/>
      {/* <Fundraising/> */}
    </div>
  );
}

export default App;
