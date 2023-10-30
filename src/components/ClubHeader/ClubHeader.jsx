import {BsFillTelephoneFill, BsInstagram} from 'react-icons/bs'
import {useEffect, useState} from 'react'
import {useLocation, useParams} from 'react-router-dom'

import {BiLogoFacebook} from 'react-icons/bi'
import ClubsService from '../../services/clubsService'
import {FaEnvelope} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import ReservationModal from '../ReservationModal/ReservationModal'

const ClubHeader = () => {
  const [info, setInfo] = useState('')
  const {clubId} = useParams()
  const [showReservationModal, setShowReservationModal] = useState(false)
  const [tables, setTables] = useState(null)
  const [reservationDate, setReservationDate] = useState()
  const {state} = useLocation()

  useEffect(() => {
    if (state && state.event) {
      window.scrollTo(0, 0)
      setReservationDate(state.event.dateOfEvent)
      setShowReservationModal(true)
    }
  }, [state])

  const handleChangeDate = (value) => {
    setReservationDate(value)
  }

  const handleShowModal = () => {
    setShowReservationModal(true)
  }

  const handleCloseReservationModal = () => {
    setShowReservationModal(false)
  }

  useEffect(() => {
    const fetchInfo = async () => {
      if (clubId) {
        try {
          const response = await ClubsService.getSingleClub(clubId)
          console.log('response for Info')
          console.log(response)
          setInfo(response)
        } catch (error) {
          // Handle any errors here
          console.error('An error occurred while fetching club info:', error)
        }
      }
    }

    fetchInfo()
  }, [clubId])

  console.log(info)

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const result = await ClubsService.getAllTables(clubId, reservationDate)
        setTables(result.tables)
      } catch (error) {
        // Handle any errors here
        console.error('An error occurred while fetching tables:', error)
      }
    }

    fetchTables()
  }, [reservationDate])

  return (
    <>
      <div className="flex h-20 justify-center">
        <div className="flex w-full max-w-5xl justify-between">
          <div className="flex gap-10 items-center">
            {info && <img className="h-4/5" src={info.clubLogo} />}
            <div className="flex">
              <ul className="flex gap-5 items-center m-0">
                <li>
                  <Link to="">Home</Link>
                </li>
                {/* <li>
                  <Link to="">Menu</Link>
                </li> */}
                {/* <li>
                  <Link to="">Events</Link>
                </li> */}
                <li>
                  <button onClick={handleShowModal}>Reservation</button>
                </li>
              </ul>
            </div>
          </div>
          {info && (
            <div className="flex items-center">
              <Link to="#" className="m-2">
                <FaEnvelope className="fill-primary" />
              </Link>
              <Link
                to={
                  info.socialMedia.find((x) => x.name === 'WhatsApp')
                    ? info.socialMedia.find((x) => x.name === 'WhatsApp').link
                    : '#'
                }
                className="m-2">
                <BsFillTelephoneFill className="fill-primary" />
              </Link>
              <Link
                to={
                  info.socialMedia.find((x) => x.name === 'Facebook')
                    ? info.socialMedia.find((x) => x.name === 'Facebook').link
                    : '#'
                }
                className="m-2">
                <BiLogoFacebook className="fill-primary" size="1.3rem" />
              </Link>
              <a
                href={
                  info.socialMedia.find((x) => x.name === 'Instagram')
                    ? info.socialMedia.find((x) => x.name === 'Instagram').link
                    : '#'
                }
                target="_blank"
                className="m-2"
                rel="noreferrer">
                <BsInstagram className="fill-primary" />
              </a>
            </div>
          )}
        </div>
      </div>
      {showReservationModal && tables && info && (
        <ReservationModal
          handleCloseReservationModal={handleCloseReservationModal}
          showReservationModal={showReservationModal}
          tables={tables}
          isDateSelected={reservationDate === undefined}
          handleChangeDate={handleChangeDate}
          event={state && state.event ? state.event : undefined}
          clubMap={info.clubMap}
        />
      )}
    </>
  )
}

export default ClubHeader
