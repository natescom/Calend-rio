import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './component/page/Home';
import NewTask from './component/page/NewTask';
import Tasks from './component/page/TaskViewer';
import Container from './component/layout/Container';
import Navbar from './component/layout/NavBar';
import Footer from './component/layout/Footer';

import style from './App.css';

function App() {
  return (
    <div className={style.Principal}>
    <Router>
      <Navbar/>
      <Switch>
        <Container customClass="min-height">
          <Route path="/newtask"><NewTask/></Route>
          <Route path="/tasks"><Tasks /></Route>
          <Route exact path="/" ><Home /></Route>
        </Container>
      </Switch>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
