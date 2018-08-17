import React from 'react';
import Routes from "./Routes";
import './App.css';
import Navigation from './components/Navigation';

const App = () => (
  <div className="App">
    <Navigation />
    <Routes />
  </div>
);
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Navigation />
//         <Routes />
//       </div>
//     );
//   }
// }

export default App;
