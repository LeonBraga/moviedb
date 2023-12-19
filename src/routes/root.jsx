import logo from "../logo.svg";
import "../App.css";
import Sidebar from "../components/sidebar/Sidebar";
const RootComponent = () => {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </>
  );
};

export default RootComponent;
