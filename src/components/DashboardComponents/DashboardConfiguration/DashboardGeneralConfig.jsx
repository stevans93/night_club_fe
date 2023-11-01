import {BsInstagram, BsWhatsapp} from 'react-icons/bs'
import {useEffect, useRef, useState} from 'react'

import ClubsService from '../../../services/clubsService'
import {FaFacebookF} from 'react-icons/fa6'
import SiteService from '../../../services/siteService'
import convertToBase64 from '../../../helpers/base64Converter'

function DashboardGeneralConfig() {
  const logoInputRef = useRef()
  const locationInputRef = useRef()
  const emailInputRef = useRef()
  const phoneInputRef = useRef()
  const aboutInputRef = useRef()
  const facebookInputRef = useRef()
  const instagramInputRef = useRef()
  const whatsAppInputRef = useRef()

  const [logoInput, setLogoInput] = useState(null)

  const [thumbnailInput, setThumbnailInput] = useState(null)
  const [mapClubInput, setMapClubInput] = useState(null)
  const [club, setClub] = useState()

  const ncUser = JSON.parse(localStorage.getItem('nc_user'))
  const clubId = ncUser ? ncUser.clubId : undefined
  const userRole = ncUser ? ncUser.role : null

  const handleConfigurationForm = async (event) => {
    event.preventDefault()
    const newData = await saveConfiguration(clubId)
    setClub(newData)
    window.location.reload()
  }

  const saveConfiguration = async (clubId) => {
    try {
      const club = {
        _id: clubId,
        clubLogo: logoInput,
        location: locationInputRef.current.value,
        email: emailInputRef.current.value,
        mobile: phoneInputRef.current.value,
        description: aboutInputRef.current.value,
        socialMedia: [
          {name: 'Facebook', link: facebookInputRef.current.value},
          {name: 'Instagram', link: instagramInputRef.current.value},
          {name: 'WhatsApp', link: whatsAppInputRef.current.value}
        ],
        profileImage: thumbnailInput,
        clubMap: mapClubInput
      }
      if (userRole !== 'admin') {
        await ClubsService.updateClub(clubId, club)
      } else {
        await SiteService.editSingleSite(club)
      }
    } catch (error) {
      // Handle any errors here (e.g., show an error toast)
      console.error('An error occurred while saving club configuration:', error)
    }
  }

  async function handleChange(e) {
    console.log(e.target.name)
    if (e.target.name === 'logoInput') setLogoInput(await convertToBase64(e.target.files[0]))
    if (e.target.name === 'thumbnailInput') setThumbnailInput(await convertToBase64(e.target.files[0]))
    if (e.target.name === 'mapClubInput') setMapClubInput(await convertToBase64(e.target.files[0]))
  }

  useEffect(() => {
    const fetchClubById = async () => {
      try {
        const clubInfo = await ClubsService.getSingleClub(clubId)

        setClub(clubInfo)
      } catch (error) {
        // Handle any errors here
        console.error('An error occurred while fetching club info:', error)
      }
    }

    const fetchSiteInfo = async () => {
      try {
        const siteInfo = await SiteService.getSingleSite()
        setClub(siteInfo)
      } catch (error) {
        // Handle any errors here
        console.error('An error occurred while fetching site info:', error)
      }
    }
    if (userRole !== 'admin') {
      fetchClubById()
    } else {
      fetchSiteInfo()
    }
  }, [clubId])

  return (
    <div className="flex w-9/12 h-fit">
      {club && (
        <form className="flex flex-col gap-5 px-4 w-6/12 py-5 shadow-lg ml-10 mt-4 bg-white">
          {/* <div className="flex flex-col w-3/5 gap-2">
            <label htmlFor="logo">Logo</label>
            <input
              className="border-2 rounded-lg px-2 h-10"
              type="text"
              placeholder="Enter your logo url"
              id="logo"
              ref={logoInputRef}
              defaultValue={club.clubLogo}
            />
          </div> */}
          <div className="flex flex-col w-3/5 gap-2">
            <label htmlFor="location">Lokacija</label>
            <input
              className="border-2 rounded-lg px-2 h-10"
              type="text"
              placeholder="Unesite Lokaciju..."
              id="location"
              ref={locationInputRef}
              defaultValue={club.location}
            />
          </div>
          <div className="flex flex-col w-3/5 gap-2">
            <label htmlFor="email">E-mail Adresa</label>
            <input
              className="border-2 rounded-lg px-2 h-10"
              type="text"
              placeholder="Unesite E-mail Adresu..."
              id="email"
              ref={emailInputRef}
              defaultValue={club.email}
            />
          </div>
          <div className="flex flex-col w-3/5 gap-2">
            <label htmlFor="phone">Mobilni Telefon</label>
            <input
              className="border-2 rounded-lg px-2 h-10"
              type="text"
              placeholder="Unesite Mobilni Telefon..."
              id="phone"
              ref={phoneInputRef}
              defaultValue={club.mobile}
            />
          </div>
          <div className="flex flex-col w-3/5 gap-2">
            <label htmlFor="about">Opis</label>
            <input
              className="border-2 rounded-lg px-2 h-10"
              type="text"
              placeholder="Unesote Opis..."
              id="about"
              ref={aboutInputRef}
              defaultValue={club.description}
            />
          </div>
          <div className="flex flex-col w-3/5 gap-2">
            <label htmlFor="facebook">Facebook</label>
            <div className="flex w-full items-center rounded-lg border-2 px-3">
              <FaFacebookF size="1.2rem" />
              <input
                className="h-10 w-full ml-3 px-2 border-l-2"
                type="text"
                placeholder="Unesite Link Facebook-a..."
                id="facebook"
                ref={facebookInputRef}
                defaultValue={
                  club.socialMedia.find((x) => x.name === 'Facebook')
                    ? club.socialMedia.find((x) => x.name === 'Facebook').link
                    : ''
                }
              />
            </div>
          </div>
          <div className="flex flex-col w-3/5 gap-2">
            <label htmlFor="instagram">Instagram</label>
            <div className="flex w-full items-center rounded-lg border-2 px-3">
              <BsInstagram size="1.2rem" />
              <input
                className="h-10 w-full ml-3 px-2 border-l-2"
                type="text"
                placeholder="Unesite Link Instagram-a..."
                id="instagram"
                ref={instagramInputRef}
                defaultValue={
                  club.socialMedia.find((x) => x.name === 'Instagram')
                    ? club.socialMedia.find((x) => x.name === 'Instagram').link
                    : ''
                }
              />
            </div>
          </div>
          <div className="flex flex-col w-3/5 gap-2">
            <label htmlFor="whatsApp">WhatsApp</label>
            <div className="flex w-full items-center rounded-lg border-2 px-3">
              <BsWhatsapp size="1.2rem" />
              <input
                className="h-10 w-full ml-3 px-2 border-l-2"
                type="text"
                placeholder="Unesite Link WhatsApp-a..."
                id="whatsApp"
                ref={whatsAppInputRef}
                defaultValue={
                  club.socialMedia.find((x) => x.name === 'WhatsApp')
                    ? club.socialMedia.find((x) => x.name === 'WhatsApp').link
                    : ''
                }
              />
            </div>
          </div>
          <button
            onClick={handleConfigurationForm}
            className="flex border-2 w-fit px-10 py-2 rounded-lg bg-primary text-white">
            Potvrdi
          </button>
        </form>
      )}

      {userRole === 'admin' ? (
        <></>
      ) : (
        <div className="flex flex-col  ml-10">
          <div className="flex flex-col gap-2 mt-4 bg-white shadow-lg">
            <span className="border-b-2 py-2 px-3">Logo</span>
            <div className="flex flex-col px-2 py-2">
              <div className="flex items-center justify-center  m-auto">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center  rounded-lg cursor-pointer  hover:bg-gray-100   ">
                  <div className="flex flex-col items-center justify-center">
                    {/* <svg
                      className="w-8 h-8 mb-2 text-gray-500 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm ">
                      <span>upload Thumbnail image</span>
                    </p> */}

                    {logoInput ? null : (
                      <label htmlFor="logoInput" className="py-10 px-20">
                        Izaberite Sliku
                      </label>
                    )}
                    <input name="logoInput" id="logoInput" type="file" onChange={handleChange} className="hidden" />
                    <img src={logoInput} className="max-h-[200px]" />
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 shadow-lg bg-white mt-8">
            <span className="border-b-2 py-2 px-3">Thumbnail Slika</span>
            <div className="flex flex-col px-2 py-2">
              <div className="flex items-center justify-center w-full m-auto">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full rounded-lg cursor-pointer  hover:bg-gray-100   ">
                  <div className="flex flex-col items-center justify-center w-full">
                    {/* <svg
                      className="w-8 h-8 mb-2 text-gray-500 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm ">
                      <span>upload Thumbnail image</span>
                    </p> */}

                    {thumbnailInput ? null : (
                      <label htmlFor="thumbnailInput" className="py-10 px-20">
                        Izaberite Sliku
                      </label>
                    )}
                    <input
                      name="thumbnailInput"
                      id="thumbnailInput"
                      type="file"
                      onChange={handleChange}
                      className="hidden"
                    />
                    <img src={thumbnailInput} className="max-h-[200px]" />
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 shadow-lg bg-white mt-8 ">
            <span className="border-b-2 py-2 px-3">Mapa Objekta</span>
            <div className="flex flex-col px-2 py-2">
              <div className="flex items-center justify-center   m-auto">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center rounded-lg cursor-pointer  hover:bg-gray-100   ">
                  <div className="flex flex-col items-center justify-center">
                    {/* <svg
                      className="w-8 h-8 mb-2 text-gray-500 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm ">
                      <span>Mapa cluba</span>
                    </p> */}
                    {mapClubInput ? null : (
                      <label htmlFor="mapClubInput" className="py-10 px-20">
                        Izaberite Sliku
                      </label>
                    )}
                    <input name="mapClubInput" id="mapClubInput" type="file" onChange={handleChange} className="hidden" />
                    <img src={mapClubInput} className="max-h-[400px]" />
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  )
}

export default DashboardGeneralConfig
