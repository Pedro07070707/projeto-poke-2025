import {Routes, Route} from 'react-router-dom'
import Home from "./Home.jsx"
import Home2 from "./Home2.jsx"
import Home3 from "./Home3.jsx"
import Menu from "./Menu.jsx"

const App = () => {

  return(
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="home2" element={<Home2 />} />
      <Route path="home3" element={<Home3 />} />
      <Route index element={<Menu />} />
    </Routes>
  )
}

export default App