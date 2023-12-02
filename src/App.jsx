import Header from "./components/Headers/Header"
import Hero from "./components/Hero/Hero"
import './App.css'
import Residens from "./components/residens/Residens"
import Value from "./components/Value/Value"
import Content from "./components/Content/Content"
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <div className="App">
      <div>
        <div className="gradient"/>
        <Header />
        <Hero />
      </div>
      <Residens/>
       <Value/>
      <Content/>
      <Footer/>
    </div>
  ) 
}

export default App
