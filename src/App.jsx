import Intro from "./components/Introduction/Intro"
import About from "./components/about/About"
import Productlist from "./components/productlist/Productlist"
import Contact from "./components/contact/Contact"
import Toggle from "./components/togglemode/Toggle"
import { ThemeContext } from "./context"
import { useContext } from "react"
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const App = () => {
    const theme = useContext(ThemeContext);
    const darkMode= theme.state.darkMode;
    return (
        <div style={{backgroundColor:darkMode ? "#222":"white", color:darkMode && "white"}}>
            <Toggle />
            <Intro />
            <About />
            <Productlist />
            <Contact />
        </div>
    )
}
export default App
