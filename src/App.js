import React , {useState} from 'react';


import { BrowserRouter as Router, Route } from "react-router-dom";


import { MainForm } from "./MainForm"; 
import { MainView } from "./MainView";

function App() {

  const [data, setData] = useState({
      fio: '', 
      sex: ''
  });


  return (
    <Router>

      <Route path="/" 
             exact 
             children={({ match, ...rest }) => 
              match ? ( <MainForm data={data} setData={setData} />) : null
             }>
        
      </Route>


      <Route path="/view" 
             exact 
             children={
               ({match, ...rest}) => 
                match ? (<MainView data={data} />) : null
             }>
      </Route>
        
    </Router>
  );
}

export default App;
