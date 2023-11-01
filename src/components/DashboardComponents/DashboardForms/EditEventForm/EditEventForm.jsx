import '../../../../../node_modules/rsuite/dist/rsuite.min.css'

import {Button, Modal} from 'rsuite'

import EventsService from '../../../../services/eventsService'
import {useRef} from 'react'

const EditEventForm = (props) => {
  const nameInputRef = useRef()
  const descriptionInputRef = useRef()
  const dateInputRef = useRef()
  const ticketPriceInputRef = useRef()
  const typeInputRef = useRef()

  // const [eventImage, setEventImage] = useState(null)
  // async function handleChange(e) {
  //   setEventImage(await convertToBase64(e.target.files[0]))
  // }

  const handleSaveForm = async () => {
    await saveEvent(props.event._id)
    props.handleEditModalClose()
  }

  const saveEvent = async (eventId) => {
    const event = {
      _id: eventId,
      title: nameInputRef.current.value,
      description: descriptionInputRef.current.value,
      dateOfEvent: dateInputRef.current.value,
      ticketPrice: ticketPriceInputRef.current.value,
      type: typeInputRef.current.value
    }

    try {
      const response = await EventsService.updateEvent(eventId, event)

      // Handle the response as needed
      if (response) {
        // Handle success
        console.log('Event updated successfully')
        // You can perform additional actions if needed
      } else {
        // Handle failure
        console.log('Failed to update event')
        // You can perform additional actions if needed
      }
    } catch (error) {
      // Handle any errors here
      console.error('An error occurred while updating the event:', error)
    }
  }
  return (
    <>
      {props.isEditEventModalOpen && (
        <div className="flex m-auto text-center">
          <Modal
            size="md"
            open={props.isEditEventModalOpen}
            onClose={props.handleEditModalClose}
            backdrop={props.isEditEventModalOpen}>
            <Modal.Header className="border-b-2 text-2xl py-2">Uredi Događaja</Modal.Header>
            <Modal.Body>
              <div className="flex flex-wrap">
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="name">
                    Ime
                  </label>
                  <input
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Unesite Ime..."
                    id="name"
                    type="text"
                    defaultValue={props.event.title}
                    ref={nameInputRef}
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="phone">
                    Opis Događaja *
                  </label>
                  <input
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Unesite Opis Događaja..."
                    id="phone"
                    type="text"
                    defaultValue={props.event.description}
                    ref={descriptionInputRef}
                  />
                </div>
                <div className="flex w-full justify-between">
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="date">
                      Datum
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Unesite Datum..."
                      id="date"
                      type="date"
                      defaultValue={new Date(props.event.dateOfEvent).toISOString().split('T')[0]}
                      ref={dateInputRef}
                    />
                  </div>
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="ticketPrice">
                      Cena Ulaznice
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Unesite Cenu Ulaznice"
                      id="ticketPrice"
                      type="text"
                      defaultValue={props.event.ticketPrice}
                      ref={ticketPriceInputRef}
                    />
                  </div>
                </div>

                <div className="flex w-full justify-between">
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="type">
                      Tip Događaja 
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      id="type"
                      type="text"
                      placeholder="Unesite Tip Događaja..."
                      defaultValue={props.event.type}
                      ref={typeInputRef}
                    />
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button className="bg-[#3498ff]" onClick={handleSaveForm} appearance="primary">
                Ok
              </Button>
              <Button onClick={props.handleEditModalClose} appearance="subtle">
                Otkaži
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  )
}

export default EditEventForm
