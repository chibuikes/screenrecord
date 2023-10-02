import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/login';
import VideoRep from './Components/videoRep/VideoRep';
import SingleVideo from './Components/SingleVideo/SingleVideo';
import { Routes, Route } from 'react-router-dom';
import VideoReady from './Components/VideoReady/VdieoReady';
function App() {
  return (
  <Routes >
    <Route element={<Home/>} path='/'/>
    <Route element={<Login/>} path='/login'/>
    <Route element={<VideoRep/>} path='/videorep'/>
    <Route element={<SingleVideo/>} path='/singlevideo'/>
    <Route element={ <VideoReady/>} path='/videoready'/>
    <Route element={<Home/>} path='*'/>

    



  </Routes>
  
  );
}

export default App;
