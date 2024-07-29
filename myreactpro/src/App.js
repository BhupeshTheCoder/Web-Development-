//import logo from './logo.svg';
import './App.css';
// import MyStateComp from './component/MyStateComp';

// import Incdec from './component/Incdec';
import EmpComp from './task/EmpComp';
// import ClassComp from './task/ClassComp';
//import FunctionComp from './component/FunctionComp';
//import MyDetails from './task/Function';

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
      {/* <h1>Welcome you all</h1>
      <FunctionComp empName="bhupesh" empPost="FullStack Developer"/>
      <ClassComp empName="Verma" empPost="FullStack Developer"/> */}
      {/* <MyDetails myName="Bhupesh" contact="9999999" address="Ratlam" gender="Male" education="graduate"/>
      <ClassComp myName="Verma" contact="11111" address="Rtm" gender="Male" education="Btech"/>
       */}
      {/* <MyStateComp address="abc" country="pqrs"/>
      <Incdec /> */}
      <EmpComp />
    </div>
  );
}

export default App;
