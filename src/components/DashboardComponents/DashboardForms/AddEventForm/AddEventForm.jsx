import '../../../../../node_modules/rsuite/dist/rsuite.min.css'

import {Button, Modal} from 'rsuite'
import {useRef, useState} from 'react'

import EventsService from '../../../../services/eventsService'
import convertToBase64 from '../../../../helpers/base64Converter'

const AddEventForm = (props) => {
  const nameInputRef = useRef()
  const descriptionInputRef = useRef()
  const dateInputRef = useRef()
  const ticketPriceInputRef = useRef()
  const typeInputRef = useRef()
  const imageInputRef = useRef()

  const [eventImage, setEventImage] = useState(null)
  const [eventImagePreview, setEventImagePreview] = useState(null)

  async function handleChange(e) {
    setEventImagePreview(await convertToBase64(e.target.files[0]))
    setEventImage(e.target.files[0])
  }

  const handleSaveForm = async () => {
    await saveEvent()
    props.handleEventModalClose()
    window.location.reload()
  }

  const saveEvent = async () => {
    const event = {
      title: nameInputRef.current.value,
      description: descriptionInputRef.current.value,
      dateOfEvent: dateInputRef.current.value,
      ticketPrice: ticketPriceInputRef.current.value,
      type: typeInputRef.current.value,
      image: eventImage
    }

    const formData = new FormData()
    formData.append('title', nameInputRef.current.value)
    formData.append('description', descriptionInputRef.current.value)
    formData.append('dateOfEvent', dateInputRef.current.value)
    formData.append('ticketPrice', ticketPriceInputRef.current.value)
    formData.append('type', typeInputRef.current.value)
    formData.append('image', eventImage)

    try {
      const response = await EventsService.addEvent(formData)

      // Handle the response as needed
      if (response) {
        // Handle success
        console.log('Event saved successfully')
        // You can perform additional actions if needed
      } else {
        // Handle failure
        console.log('Failed to save event')
        // You can perform additional actions if needed
      }
    } catch (error) {
      // Handle any errors here
      console.error('An error occurred while saving the event:', error)
    }
  }
  return (
    <>
      {props.isAddEventModalOpen && (
        <div className="flex m-auto text-center">
          <Modal
            size="md"
            open={props.isAddEventModalOpen}
            onClose={props.handleEventModalClose}
            backdrop={props.isAddEventModalOpen}>
            <Modal.Header className="border-b-2 text-2xl py-2">Dodaj Događaja</Modal.Header>
            <Modal.Body>
              <form className="flex flex-wrap">
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="name">
                    Ime
                  </label>
                  <input
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Unesite Ime..."
                    id="name"
                    type="text"
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
                      placeholder="Set date"
                      id="date"
                      type="date"
                      ref={dateInputRef}
                    />
                  </div>
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="ticketPrice">
                      Cena Ulaznice
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Unesite Cenu Ulaznice..."
                      id="ticketPrice"
                      type="text"
                      ref={ticketPriceInputRef}
                    />
                  </div>
                </div>

                <div className="flex w-full justify-between">
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="type">
                      Tip
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      id="type"
                      placeholder="Unesite Tip Događaja..."
                      type="text"
                      ref={typeInputRef}
                    />
                  </div>
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="image">
                      Slika
                    </label>
                    <label htmlFor="eventImage" className="py-6 px-16 bg-slate-50 m-auto rounded-lg">
                      Choose a picture
                    </label>
                    <input name="eventImage" id="eventImage" hidden type="file" onChange={handleChange} />
                    {eventImage ? <img src={eventImagePreview} /> : null}
                  </div>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button className="bg-[#3498ff]" onClick={handleSaveForm} appearance="primary">
                Ok
              </Button>
              <Button onClick={props.handleEventModalClose} appearance="subtle">
                Otkaži
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  )
}

export default AddEventForm
