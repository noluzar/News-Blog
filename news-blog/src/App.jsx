import { Navbar } from "./navbar"
import { Body } from "./body"
import EditorsPick from "./EditorsPick"
import LatestArt from "./LatestNews"
import { Subscribe } from "./Subscribe"

function App(){
  return(
    <>
    <Navbar></Navbar>
    <Body></Body>
    <LatestArt />
    <EditorsPick />
    <Subscribe />
    </>
  )
}

export default App