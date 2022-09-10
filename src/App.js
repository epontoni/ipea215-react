import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { About } from './components/pages/About/About';
import { Contact } from './components/pages/Contact/Contact';
import { Staff } from './components/pages/Staff/Staff';
import { News } from './components/pages/News/News';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/news" exact component={News} />
          <Route path="/staff" exact component={Staff} />
          <Route path="/contact" exact component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
