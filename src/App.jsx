import EventsSection from "./view/EventsSection"
import Header from "./view/Header"
import NewsSection from "./view/NewsSection"
import Task from "./view/Task"
import UpdatesSection from "./view/UpdatessSection"
import Navbar from "./view/Navbar"
import Birthday from "./view/Birthday"
import Links from "./view/Links"

function App() {

  return (
    <>
      <Header/>
      <Task/>
      <NewsSection/>
      <EventsSection/>
      <UpdatesSection/>
      <Navbar/>
      <Birthday/>
      <Links/>
    </>
  )
}

export default App
