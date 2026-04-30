import logo from './logo.svg';
import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Fifthcomponent from './components/Fifthcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to learning reactjs</h1>
        <h2>React is fun</h2>
      </header>

       {/*Below we render and display thr components */}
        <Firstcomponent/>
        <Secondcomponent/>
        <Thirdcomponent/>
        <Fourthcomponent/>
        <Fifthcomponent/>
    </div>
  );
}

export default App;
// create two other components i.e contact us and help component and style them with your own content then you rendere them on App.js component 
// npm start => node package module
// npm => node package module
