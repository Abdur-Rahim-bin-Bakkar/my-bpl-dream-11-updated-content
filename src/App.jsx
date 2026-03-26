import { Suspense, useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Tab from './components/Tabs/Tab'
import MainContainer from './components/Main/MainContainer'
import { ToastContainer } from 'react-toastify'
import Selects from './components/Selects/Selects'
import Footer from './components/Footers/Footer'
const data = fetch("/player.json").then(res => res.json())
function App() {
  const [tab, setTab] = useState(true)
  const [coin, setCoin] = useState(6000000)
  const [selectPlayer, setSelectPlayer] = useState([])
  // console.log(selectPlayer)
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Hero></Hero>
      <Tab tab={tab} setTab={setTab} selectPlayer={selectPlayer}></Tab>
      {
        tab?
      <Suspense fallback={<span className='loading loading-bars fixed top-6/12 left-6/12'></span>}>
        <MainContainer data={data} coin={coin} setCoin={setCoin} selectPlayer={selectPlayer} setSelectPlayer={setSelectPlayer}></MainContainer>
      </Suspense>
      :
      <Selects selectPlayer={selectPlayer} setSelectPlayer={setSelectPlayer} coin={coin} setCoin={setCoin}></Selects>
      }

      <Footer></Footer>

      <ToastContainer position='bottom-left'></ToastContainer>
    </>
  )
}

export default App
