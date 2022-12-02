import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.sidebar}/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route
              path="/dialogs/*"
              element={<Dialogs
                state={props.state.dialogsPage}/>} />
            <Route
              path="/profile"
              element={<Profile state={props.state.profilePage} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
