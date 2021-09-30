import React from 'react';

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
    
    
//   } from "react-router-dom";
// import Login from './login.js';
// import About from './about.js'
// import Navbar from './navbar.js'
// import Table from './table.js';
// import { data } from './data.js';
// import { columns } from './colums.js';
import Side from './side'



const App = () => {

    return (
        <>
        <Side/>
        {/* <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/login">        
           <Login />
           
           
          </Route>
          <Route path="/about">
              <About/>
          </Route>
          <Route path="/contact"></Route>
          
        </Switch>
      </div>
    
      <nav>
        <Link  to="/login">Add into table </Link> <br/><br/>
        
      </nav>
        </Router>
    <Table
        columns={columns}
        data={data}
      /> */}
        </>
    )
}

export default App;