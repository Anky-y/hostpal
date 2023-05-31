import Navbar from '../Components/Navbar';
import Main from '../Components/Main';
import Help from '../Components/Help';
import Services from '../Components/Services';
import '../Css/app.css';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Services />
      <Help />
    </div>
  );
}

export default Home;
