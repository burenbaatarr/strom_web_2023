import React, {useState, usestate} from 'react'
import Sidebar from './components/SideBar';
import Header from './components/Header';
import Footer from './components/footer';
import Body from './components/Body'


function App() {
  return (
    <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
            <Header />
            <Body />
          
            <Footer />

        </div>
    </div>
);

}

export default App;
