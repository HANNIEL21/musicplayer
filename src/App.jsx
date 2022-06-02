import './App.css';
import Float from './components/floatingNav/Float';
import Float1 from './components/floatingNav/Float1';
import Float2 from './components/floatingNav/Float2';


import Header from './components/header/Header';
import Search from './components/seachbar/Search';


function App() {
  return (
    <div className="App">
      <Header />
      <main className="d-flex min-vh-100 align-items-center justify-content-center">
        <div className="tab-content" id="pills-tabContent">

          <div className="tab-pane fade show active bg-primary" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
            <div className="container py-3">
              <Float1 />
            </div>
          </div>

          <div className="tab-pane fade min-vh-100 bg-primary" id="pills-music" role="tabpanel" aria-labelledby="pills-music-tab" tabIndex="0">
            <div className="container py-3">
              <Float2 />
            </div>
          </div>

          <div className="tab-pane fade min-vh-100 bg-primary" id="pills-search" role="tabpanel" aria-labelledby="pills-search-tab" tabIndex="0">
            <div className="container py-3">
              <Search />
            </div>
          </div>
          <div className="tab-pane fade min-vh-100 bg-primary" id="pills-library" role="tabpanel" aria-labelledby="pills-library-tab" tabIndex="0">Library</div>
        </div>
        <Float />
      </main>
    </div>
  );
}

export default App;
