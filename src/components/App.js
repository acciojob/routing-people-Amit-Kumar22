
import React from "react";
import './../styles/App.css';
import User from "./user"
import User1 from "./user1"
import User2 from "./user2"
import User3 from "./user3"
import User4 from "./user4"
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <User />
      <Routes>
      <Route path='/User1' element={<User1 />} />
      <Route path='/user2' element={<User2 />}/>
      <Route path='/user3' element={<User3 />} />
      <Route path='/user4' element={<User4 />} />
    </Routes>
    </div>
  )
}

export default App
