import {useRef, useState} from 'react'

import ClubsService from '../../../services/clubsService'
import SiteService from '../../../services/siteService'
import convertToBase64 from '../../../helpers/base64Converter'

const DashboardSliderConfig = (props) => {
  const [imageNames, setImageNames] = useState(Array(6).fill('')) // Initialize with empty strings
  const imageRefs = Array.from({length: 6}, () => useRef())

  const ncUser = JSON.parse(localStorage.getItem('nc_user'))
  console.log('ncUser')
  console.log(ncUser)
  const clubId = ncUser ? ncUser.clubId : undefined
  const userRole = ncUser ? ncUser.role : null

  const handleImageChange = (index) => {
    const file = imageRefs[index].current.files[0]
    if (file) {
      setImageNames((imageNames) => [
        ...imageNames.slice(0, index), // Keep the previous image names as they are
        file.name, // Set the image name
        ...imageNames.slice(index + 1) // Keep the rest of the image names as they are
      ])
    }
  }

  const handleImagesForm = async (event) => {
    event.preventDefault()
    const dataToSend = await getDataToUpload()
    if (userRole !== 'admin') {
      await ClubsService.updateClub(clubId, dataToSend)
    } else {
      await SiteService.editSingleSite(dataToSend)
    }
    // window.location.reload()
  }

  const getDataToUpload = async () => {
    let formData = new FormData()

    formData.append('clubId', clubId)

    const sliderImages = []

    for (let i = 0; i < 6; i++) {
      if (imageRefs[i].current.files[0]) {
        formData.append('files', imageRefs[i].current.files[0])
        sliderImages.push({
          name: `image${i + 1}`,
          originalname: imageRefs[i].current.files[0].name
        })
      }
    }
    formData.append('sliderImages', JSON.stringify(sliderImages))

    return formData
  }

  return (
    <>
      <form className="flex flex-col items-center w-4/12 ml-10 mt-4 bg-white shadow-lg px-4 py-4 gap-4 h-fit">
        <span className="flex">Slider Slike</span>
        <div className="flex w-full justify-between flex-col">
          {Array.from({length: 6}).map((_, index) => (
            <div className="flex flex-col gap-2" key={`image${index + 1}`}>
              <div className="flex gap-5">
                <label htmlFor={`image${index + 1}`}>{`Slika ${index + 1} :`}</label>
                {imageNames[index] && <span className="z-10">{imageNames[index]}</span>}
              </div>
              <div className="flex items-center relative rounded-lg overflow-hidden">
                <input
                  type="file"
                  id={`image${index + 1}`}
                  ref={imageRefs[index]}
                  className="w-full h-10 opacity-0 z-0"
                  onChange={() => handleImageChange(index)}
                />
                <label
                  htmlFor={`image${index + 1}`}
                  className="absolute right-0 left-0 top-0 bottom-0 cursor-pointer z-1 rounded-lg bg-gray-200 text-gray-700 hover-bg-gray-300 hover:text-gray-800 transition duration-300 ease-in-out text-center p-2">
                  Postavi
                </label>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleImagesForm} className="flex bg-primary text-white py-3 px-12 rounded-lg">
          Potvrdi
        </button>
      </form>
    </>
  )
}

export default DashboardSliderConfig
