import Navbar from "./containers/navbar/Navbar";
import Product from "./containers/components/Product/Product";


function App() {
  return (
    <div className="App">
      <div className={'navbar-in-main'}>
        <Navbar/>
      </div>
      {/* <div className={'main-page'}>
        <div className={'wall'}>
         <Product/>
        </div>
      </div> */}
    </div>
  );
}

export default App;
