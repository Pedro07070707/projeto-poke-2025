import Home from "./Home.jsx"
import {Routes, Route} from 'react-router-dom'

const App = () => {

  return(
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  )
}

export default App