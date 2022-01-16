import logo from './logo.svg';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

import './App.css';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Navbar title="Texteditor" aboutus="About " />
      <div className='container my-3'>
          <TextForm heading="Enter the text to analyze below"/>
      </div>
     
    </div>
  );
}

export default App;
