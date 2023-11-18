// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Maincontent from '../../lesson_day_28_react/src/components/Maincontent';
import SideBar from './components/sidebar';

import Header from './components/header';
import NavBar from './components/navbar';
import Footer from './components/footer';
function App() {
  // const [count, setCount] = useState(0)

  return (
      <div>
      <Header />
     <NavBar />
      <div className="container">
      <SideBar />
      <Maincontent />
      </div> ̰
      <Footer />
      </div>
  );
}
export default App
