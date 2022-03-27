import Login from './screens/login/Login';
import Home from './screens/home/Home';
import About from './screens/about/About';
import {
  SessionProvider,
  WithSession,
  WithoutSession,
  Link,
  Routes,
  Route
} from './contexts/auth/Auth';
import './App.css';

const App = () => (
  <SessionProvider>
    <WithSession>
      <div>
        <nav>
          <span style={{ marginRight: '1em' }}>
            <Link to='/'>home</Link>
          </span>
          <span >
            <Link to='/about'>about</Link>
          </span>
        </nav>
        <Routes>
          <Route path='/'
            element={<Home />} />
          <Route path='/about'
            element={<About />} />
        </Routes>
      </div>
    </WithSession>
    <WithoutSession>
      <Login />
    </WithoutSession>
  </SessionProvider>
);


export default App;
