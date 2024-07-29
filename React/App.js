import logo from './logo.svg';
import './App.css';
import FunctionComp from './component/FunctionComp';
import ClassComp from './component/ClassComp';
import MyStateComp from './component/MyStateComp';
import MethodAndEventsComp from './component/MethodAndEventsComp';
import SetStateComp from './component/SetStateComp';
import MyCssCom from './component/MyCssCom';
import ConditionalRenComp from './component/ConditionalRenComp';
import VirtualDOMComp from './component/VirtualDOMComp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Welcome You All In React Session</h1>

      {/* <FunctionComp empName="Panchashil" empPost="Fullstack Developer" />
      <ClassComp empName="Amol" empPost="Java Developer" /> */}

      {/* <MyStateComp  address="Sambhaji Nagar" single="yes" country="India" /> */}

      {/* <MethodAndEventsComp /> */}
      {/* <SetStateComp /> */}
      {/* <MyCssCom /> */}
      {/* <ConditionalRenComp /> */}
      <VirtualDOMComp />
    </div>
  );
}

export default App;
