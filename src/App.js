import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state={props.sidebar} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs/*' element={<DialogsContainer store={props.store} />} />
          <Route path='/profile' element={<Profile store={props.store} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
