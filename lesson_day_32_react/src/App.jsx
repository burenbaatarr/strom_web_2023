import './App.css'
import MessageComponent from './components/MessageComponents';
function App() {
  const shouldShowMessege = true;
  return (
    <div className='App'>
       <h1>welcome to</h1>
       <MessageComponent showMessege={shouldShowMessege}/>
       <MessageComponent />
    </div>
  );
}

export default App
