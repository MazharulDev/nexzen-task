import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div>
      <Navbar />
      <div className='grid grid-cols-8 '>
        <div className='grid-cols-1 h-[90vh] overflow-scroll'>
          <Sidebar />
        </div>
        <div className='grid-cols-7'>
          <h2>dashboard</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
