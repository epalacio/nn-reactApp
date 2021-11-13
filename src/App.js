import { Fragment, useState } from 'react';
import './App.css';
import Modal from './components/Modal.component';
import Title from './components/Title.component';
import EventList from './components/EventList.component'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3},
  ])

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const subtitle = 'All the latest events in Marioland'

  return (
    <div className="App">
      <Title 
        title='Events in your area'
        subtitle={subtitle}
      />
      {showEvents && (<div>
        <button onClick={() => setShowEvents(false)}>hide events</button>
      </div>)}
      {!showEvents && (<div>
        <button onClick={() => setShowEvents(true)}>show events</button>
      </div>)}
      {showEvents && <EventList events={events} handleClick={handleClick}/>}
      {/* <Modal>
        <h2>10% Off Coupon Code!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}
      {showModal && <Modal handleClose={handleClose} isSalesModal={false}>
        <h2>Terms and Conditions</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      </Modal>}
      
      <div>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      </div>

    </div>
  );
}

export default App;
