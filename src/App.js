import Header from './components/header';
import Footer from "./components/footer";
import Search from './components/search';

function App() {
  return (
    <div style={{ width: "50%", margin: 'auto', textAlign: 'center', backgroundColor: 'grey', color: 'white' }}>
      <Header />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
