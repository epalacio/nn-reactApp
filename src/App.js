import { useState } from 'react';
import './App.css';
import Modal from './components/Modal.component';
import Title from './components/Title.component';
import EventList from './components/EventList.component'
import NewEventForm from './components/NewEventForm.component';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)
  }
  

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
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
      {showModal && <Modal isSalesModal={false}>
        <NewEventForm
          addEvent={addEvent}
        />
      </Modal>}
      
      <div>
        <button onClick={() => setShowModal(true)}>Add new event</button>
      </div>

    </div>
  );
}

export default App;
