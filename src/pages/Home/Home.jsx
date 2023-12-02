import {useEffect, useState} from 'react'

import ClubList from '../../components/ClubList/ClubList'
import EventList from '../../components/EventList/EventList'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'
import {Link} from 'react-router-dom'
import SiteService from '../../services/siteService'
import clocklIcon from '../../assets/clock.svg'
import pathIcon from '../../assets/path.svg'
import surfaceIcon from '../../assets/surface.svg'

function Home(props) {
  const [sliderImages, setSliderImages] = useState(null)
  //events
  const [selectedParams, setSelectedParams] = useState({
    pageNumber: 1,
    pageSize: 6
  })
  const [numberOfPages, setNumberOfPages] = useState(1)
  const [numberOfEvents, setNumberOfEvents] = useState()

  //regular places
  const [selectedRegularParams, setSelectedRegularParams] = useState({
    pageNumber: 1,
    pageSize: 6,
    bannerImage: 'Regular'
  })
  const [numberOfRegularPages, setNumberOfRegularPages] = useState(1)
  const [numberOfRegularClubs, setNumberOfRegularClubs] = useState()

  //premium places
  const [selectedPremiumParams, setSelectedPremiumParams] = useState({
    pageNumber: 1,
    pageSize: 6,
    bannerImage: 'Premijum'
  })
  const [numberOfPremiumPages, setNumberOfPremiumPages] = useState(1)
  const [numberOfPremiumClubs, setNumberOfPremiumClubs] = useState()

  const handleNextPage = (value) => {
    if (value === 'premijum') {
      setSelectedPremiumParams((selectedPremiumParams) => ({
        ...selectedPremiumParams,
        pageNumber: selectedPremiumParams.pageNumber + 1
      }))
    }

    if (value === 'regular') {
      setSelectedRegularParams((selectedRegularParams) => ({
        ...selectedRegularParams,
        pageNumber: selectedRegularParams.pageNumber + 1
      }))
    }

    if (value === 'events') {
      setSelectedParams((selectedParams) => ({
        ...selectedParams,
        pageNumber: selectedParams.pageNumber + 1
      }))
    }
  }

  const handlePrevPage = (value) => {
    if (value === 'premijum') {
      setSelectedPremiumParams((selectedPremiumParams) => ({
        ...selectedPremiumParams,
        pageNumber: selectedPremiumParams.pageNumber - 1
      }))
    }

    if (value === 'regular') {
      setSelectedRegularParams((selectedRegularParams) => ({
        ...selectedRegularParams,
        pageNumber: selectedRegularParams.pageNumber - 1
      }))
    }

    if (value === 'events') {
      setSelectedParams((selectedParams) => ({
        ...selectedParams,
        pageNumber: selectedParams.pageNumber - 1
      }))
    }
  }

  useEffect(() => {
    const fetchSliderImages = async () => {
      try {
        const sliderImages = await SiteService.getSiteSliderImages()
        if (sliderImages) {
          
          setSliderImages(sliderImages)
        }
      } catch (error) {
        // Handle any errors here
        
      }
    }

    fetchSliderImages()
  }, [])

  return (
    <div className="flex flex-col w-full">
      <div className="relative xl:h-h800 sm:h-96 xs:h-48 lg:h-h500 ">
        {sliderImages && <ImageCarousel images={sliderImages.siteSliderImages} />}
        {/* <CarouselText /> */}
      </div>
      <div className="flex justify-center bg-[#F0F4F9] py-12">
        <div className="max-w-screen-xl lg:px-20 xs:px-5">
          <div className="flex xs:flex-col sm:flex-row justify-between mb-6">
            <h3 className="text-2xl font-bold text-black xs:mb-3 sm:mb-0">Premium Mesta</h3>
            <div className="flex items-center">
              <Link to="/clubs" className="mr-5">
                Vidite sve ({numberOfPremiumClubs})
              </Link>
              <button
                onClick={() => handlePrevPage('premijum')}
                disabled={selectedPremiumParams.pageNumber === 1}
                type="button"
                className="rotate-180 text-primary bg-white hover:bg-primary hover:text-white font-medium text-sm p-2.5 text-center inline-flex items-center">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
              <button
                onClick={() => handleNextPage('premijum')}
                disabled={selectedPremiumParams.pageNumber === numberOfPremiumPages}
                type="button"
                className="text-primary bg-white hover:bg-primary hover:text-white font-medium text-sm p-2.5 text-center inline-flex items-center ">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
            </div>
          </div>
          <ClubList
            params={selectedPremiumParams}
            setNumberOfPages={setNumberOfPremiumPages}
            setNumberOfClubs={setNumberOfPremiumClubs}
            bannerImage="Premijum Mesto"
            button="Istraži"
          />
        </div>
      </div>
      <div className="flex justify-center py-12">
        <div className="max-w-screen-xl lg:px-20 xs:px-5">
          <div className="flex xs:flex-col sm:flex-row justify-between mb-6 gap-3">
            <h3 className="text-2xl font-bold text-black xs:mb-3 sm:mb-0">Regularna Mesta</h3>
            <div className="flex items-center">
              <Link to="/clubs" className="mr-5">
              Vidite sve ({numberOfRegularClubs})
              </Link>
              <button
                onClick={() => handlePrevPage('regular')}
                disabled={selectedRegularParams.pageNumber === 1}
                type="button"
                className="rotate-180 text-primary bg-[#F0F4F9] hover:bg-primary hover:text-[#F0F4F9] font-medium text-sm p-2.5 text-center inline-flex items-center ">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
              <button
                onClick={() => handleNextPage('regular')}
                disabled={selectedRegularParams.pageNumber === numberOfRegularPages}
                type="button"
                className="text-primary bg-[#F0F4F9] hover:bg-primary hover:text-[#F0F4F9] font-medium text-sm p-2.5 text-center inline-flex items-center ">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
            </div>
          </div>
          <ClubList
            params={selectedRegularParams}
            setNumberOfPages={setNumberOfRegularPages}
            setNumberOfClubs={setNumberOfRegularClubs}
            bannerImage="Regularno Mesto"
            button="Istraži"
          />
        </div>
      </div>
      <div className="flex justify-center bg-[#F0F4F9] py-12">
        <div className="max-w-screen-xl w-full lg:px-20 px-5">
          <div className="flex xs:flex-col sm:flex-row justify-between mb-6">
            <h3 className="text-2xl font-bold text-black xs:mb-3 sm:mb-0">Događaji</h3>
            <div className="flex items-center">
              <Link to="/events" className="mr-5">
              Vidite sve ({numberOfEvents})
              </Link>
              <button
                onClick={handlePrevPage}
                disabled={selectedParams.pageNumber === 1}
                type="button"
                className="rotate-180 text-primary bg-white hover:bg-primary hover:text-white font-medium text-sm p-2.5 text-center inline-flex items-center ">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
              <button
                onClick={handleNextPage}
                disabled={selectedParams.pageNumber === numberOfPages}
                type="button"
                className="text-primary bg-white hover:bg-primary hover:text-white font-medium text-sm p-2.5 text-center inline-flex items-center ">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
            </div>
          </div>
          <EventList
            params={selectedParams}
            setNumberOfPages={setNumberOfPages}
            setNumberOfEvents={setNumberOfEvents}
            button="Rezerviši"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center max-w-screen-xl px-20 py-20">
          <h2 className="mb-6 text-3xl font-bold datext-blackrk:text-white text-center">
            Zašto <span className="text-primary">izabrati nas?</span>
          </h2>
          <div className="flex md:flex-row xs:flex-col gap-5">
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center w-32 h-32 rounded-full bg-primary mb-5">
                <img className="w-18 h-18" src={clocklIcon} alt="" />
              </div>
              <h6 className="text-lg font-bold text-black mb-3">Izaberite Vreme</h6>
              <p className="leading-6 text-center text-sm font-light text-gray-500 ">
              Gde želite da budete i u koje vreme? Uz Where2Go, lako možete rezervisati stolove, VIP kabine ili karte za najbolja noćna mesta u gradu. Sve što treba da uradite je da pronađete datum i vreme koji vam odgovaraju, a mi ćemo se pobrinuti da vaša noć bude nezaboravna.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center w-32 h-32 rounded-full bg-primary mb-5">
                <img className="w-18 h-18 bg-primary" src={surfaceIcon} alt="" />
              </div>
              <h6 className="text-lg font-bold text-black mb-3">Rezervišite Odmah</h6>
              <p className="leading-6 text-center text-sm font-light text-gray-500 ">
              Izaberite željeni datum i vreme i obezbedite svoje mesto u klubovima i kafanama u gradu. Ne propustite zabavu – rezervišite svoj sto, VIP kabinu ili karte odmah da biste obezbedili fantastičan izlazak.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center w-32 h-32 rounded-full bg-primary mb-5">
                <img className="w-18 h-18 bg-primary" src={pathIcon} alt="" />
              </div>
              <h6 className="text-lg font-bold text-black mb-3">100% Bezbedno</h6>
              <p className="leading-6 text-center text-sm font-light text-gray-500 ">
              Budite sigurni, vaša rezervacija sa Where2Go je 100% sigurna i bezbedna. Vaša privatnost i informacije su naš glavni prioritet. Posvećeni smo tome da vam pružimo bezbrižno i prijatno iskustvo. Rezervišite sa poverenjem, a mi ćemo se pobrinuti za ostalo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
