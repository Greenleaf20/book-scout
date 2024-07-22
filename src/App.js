import { Card } from 'flowbite-react';
import './App.css';
import InputForm from './components/InputForm/InputForm';
import bg from './images/bg-crop2.webp';
// import bg1 from './images/bg.webp';

function App() {
  return (
    <div className="App">
      <Card className="max-w-sm input-card" imgAlt="Book shelf" imgSrc={bg} style={{ minWidth: '99vw', height: '97vh'}}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center ">
              Book Scout
          </h5>
          <InputForm/>
      </Card>
    </div>
  );
}

export default App;
