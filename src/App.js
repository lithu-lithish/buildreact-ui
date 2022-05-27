import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";

import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/">
            <Route index element={<Login />}  
            />
         </Route> 
         <Route path="/dashboard">
            <Route index element={<Dashboard />}  
            />
         </Route> 

            <Route path="/registration">
              <Route index element={<New />}
              />
            </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

{/* <Route path="users">
<Route
  path="new"
  element={<New />}
/>
</Route> */}

export default App;
