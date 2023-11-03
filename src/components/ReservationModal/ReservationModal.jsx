import '../../../node_modules/rsuite/dist/rsuite.min.css'

import {Button, Modal} from 'rsuite'
import {useRef, useState} from 'react'

import ReservationsService from '../../services/reservationsService'

const ReservationModal = (props) => {
  const [table, setTable] = useState({maxPersons: ''})
  console.log('props in modal')
  console.log(props)
  const handlePersonsChange = () => {
    console.log('event', JSON.stringify(props.event))
    let value = parseInt(personsInputRef.current.value, 10) // Parse the input value as an integer

    // Check if the value is within the range of 0 to 3
    if (isNaN(value)) {
      // Handle non-integer input
      value = 0
    } else if (value < 0) {
      value = 0
    } else if (value > table.maxPersons) {
      value = ''
    }

    // Update the input's value
    personsInputRef.current.value = value
  }

  const nameInputRef = useRef()
  const phoneInputRef = useRef()
  const emailInputRef = useRef()
  const personsInputRef = useRef()
  const dateInputRef = useRef()
  const couponInputRef = useRef()

  const handleSaveForm = async () => {
    await saveReservation()
    props.handleCloseReservationModal()
  }

  const saveReservation = async () => {
    const reservation = {
      name: nameInputRef.current.value,
      phone: phoneInputRef.current.value,
      email: emailInputRef.current.value,
      tableId: table._id,
      persons: personsInputRef.current.value,
      date: dateInputRef.current.value,
      couponCode: couponInputRef.current.value
    }

    try {
      await ReservationsService.addReservation(reservation)
      // Handle success, e.g., show a success message
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('An error occurred while saving the reservation:', error)
    }
  }
  return (
    <>
      {props.showReservationModal && (
        <div className="flex m-auto text-center">
          <Modal
            size="full"
            open={props.showReservationModal}
            onClose={props.handleCloseReservationModal}
            backdrop={props.showReservationModal}>
            <Modal.Body className="m-0 p-0 min-h-400 h-fit">
              <div className="flex h-full md:items-center">
                <div className="flex md:w-1/2 h-h500 flex-1">
                  <img className="flex w-full" src={props.clubMap ? props.clubMap : ''} alt="" />
                </div>
                <div className="flex flex-col md:flex-1 px-6 pb-6 ">
                  <Modal.Header className="md:border-b-2 text-sm md:text-2xl py-2 md:text-center md:w-full">Rezervacija</Modal.Header>
                  <div className="flex flex-col justify-between mt-4">
                    <div className="w-45 flex flex-col">
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
                    <div className="w-45 flex flex-col">
                      <label className="mb-2 mt-2" htmlFor="phone">
                        Mobilni Telefon
                      </label>
                      <input
                        className="py-3 px-2 border-2 border-black rounded-lg"
                        placeholder="Unesite Mobilni Telefon..."
                        id="phone"
                        type="text"
                        ref={phoneInputRef}
                      />
                    </div>
                  </div>
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="email">
                      E-mail Adresa
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Unesite E-mail Adresu..."
                      id="email"
                      type="text"
                      ref={emailInputRef}
                    />
                  </div>
                  <div className="flex flex-col w-full justify-between">
                    <div className="w-45 flex flex-col">
                      <label className="mb-2 mt-2" htmlFor="">
                        Sto
                      </label>
                      <select
                        className="py-3 px-2 border-2 border-black rounded-lg"
                        value={props.selectedTable}
                        disabled={props.isDateSelected}
                        onChange={(event) => {
                          if (event.target.value) {
                            setTable(JSON.parse(event.target.value))
                          } else {
                            setTable({maxPersons: 'Po Izabranom Stolu...'})
                          }
                        }}>
                        <option value="">Izaberite Sto...</option>
                        {props.tables.map((x) => {
                          return (
                            <option key={x._id} value={JSON.stringify(x)}>
                              {x.name}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                    <div className="w-45 flex flex-col">
                      <label className="mb-2 mt-2" htmlFor="person">
                        Broj Osoba
                      </label>
                      <input
                        className="py-3 px-2 border-2 border-black rounded-lg"
                        placeholder={`Maksimalan Broj Osoba Za Stolom ${table.maxPersons}`}
                        id="person"
                        type="number"
                        min={0}
                        max={table.maxPersons}
                        ref={personsInputRef}
                        onChange={handlePersonsChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full justify-between">
                    <div className="w-45 flex flex-col">
                      <label className="mb-2 mt-2" htmlFor="date">
                        Datum
                      </label>
                      <input
                        className="py-3 px-2 border-2 border-black rounded-lg"
                        placeholder="date"
                        id="date"
                        type="date"
                        ref={dateInputRef}
                        defaultValue={
                          props.event ? props.event.dateOfEvent.split('T')[0] : new Date().toISOString().split('T')[0]
                        }
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(event) => {
                          props.handleChangeDate(event.target.value)
                        }}
                      />
                    </div>
                    <div className="w-45 flex flex-col">
                      <label className="mb-2 mt-2" htmlFor="coupon">
                        Kupon Kod
                      </label>
                      <input
                        className="py-3 px-2 border-2 border-black rounded-lg"
                        placeholder="Unesite Kupon Kod..."
                        id="coupon"
                        type="text"
                        ref={couponInputRef}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button className="bg-[#3498ff]" type="submit" onClick={handleSaveForm} appearance="primary">
                Ok
              </Button>
              <Button onClick={props.handleCloseReservationModal} appearance="subtle">
                Otkaži
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  )
}

export default ReservationModal
