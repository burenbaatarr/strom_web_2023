import "./App.css";
import Navbar from "./components/navbar";
import Maincontent from "./components/Maincontent";
import Footer from './components/footer'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Maincontent />
      <Footer />
    </div>
  );
}

export default App;
