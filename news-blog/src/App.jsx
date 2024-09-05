import { Navbar } from "./navbar"
import { Body } from "./body"
import EditorsPick from "./EditorsPick"
import LatestArt from "./LatestNews"
import { Subscribe } from "./Subscribe"
import { Social } from "./assets/Social"

function App(){
  return(
    <>
    <Navbar></Navbar>
    <Body></Body>
    <LatestArt />
    <EditorsPick />
    <Subscribe />
    <Social />
    </>
  )
}

export default App