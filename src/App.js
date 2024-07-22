import { Card } from 'flowbite-react';
import './App.css';
import InputForm from './components/InputForm/InputForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import bg from './images/bg-crop2.webp';
import Output from './components/Output/Output';

function App() {
  return (
    <Router>
      <div className="App">
        <Card className="max-w-sm input-card" imgAlt="Book shelf" imgSrc={bg} style={{ minWidth: '99vw', height: '97vh'}}>
          <Routes>
            <Route path="/" element={
              <div>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center ">
                  Book Scout
                </h5>
                <InputForm/>
              </div>
            }/>
            <Route path="/output" element={<Output/>}/>
          </Routes>
        </Card>
      </div>
    </Router>
  );
}

export default App;
