import "react-toastify/dist/ReactToastify.css"
import {Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Home from './pages/home/Home'

function App() {
  return (
    <>
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
      </Route>
    </Routes>

    <ToastContainer />
    </>
  );
}

export default App;
