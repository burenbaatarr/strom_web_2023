import './App.css'
import Sidebar from './components/SideBar';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/footer';
function App() {
  // const [count, setCount] = useState(0)
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
