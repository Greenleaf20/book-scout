import { Card } from 'flowbite-react';
import './App.css';
import InputForm from './components/InputForm/InputForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import bg from './images/bg-crop2.webp';
import Output from './components/Output/Output';
import { useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);

  const setBooksList = (list) => {
    setBooks(list);
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <Card className="max-w-sm outer-card" imgAlt="Book shelf" imgSrc={bg} style={{ minWidth: '100vw', height: '99vh'}}>
              <div className='input-screen'>
                <div className="grid grid-cols-12">
                  <div className="col-span-2 p-4">
                  </div>
                  <div className="col-span-8 p-4 flex flex-col items-center justify-center">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">
                      Book Scout
                    </h5>
                    <InputForm sendBooksList={setBooksList}/>
                  </div>
                  <div className="col-span-2 p-4">
                  </div>
                </div>
              </div>
            </Card>
          }/>
          <Route path="/output" element={
            <div className='output-screen'>
              <Output data={books}/>
            </div>
          }/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
