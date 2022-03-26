import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HelloWorld from './components/hello-world';
import Labs from './components/labs';
import HomeScreen from './components/tuiter/HomeScreen';
import ExploreScreen from './components/tuiter/ExploreScreen';
import Tuiter from './components/tuiter';
import ProfileScreen from './components/tuiter/ProfileScreen';
import ProfileEditScreen from './components/tuiter/ProfileEditScreen';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<Labs/>}/>
            <Route path="labs" element={<Labs/>}/>
            <Route path="hello" element={<HelloWorld/>}/>
            <Route path="tuiter" element={<Tuiter/>}>
              <Route index element={<HomeScreen/>}/>
              <Route path="explore" element={<ExploreScreen/>}/>
              <Route path="profile">
                <Route index element={<ProfileScreen/>}/>
                <Route path="edit" element={<ProfileEditScreen/>}/>
              </Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

