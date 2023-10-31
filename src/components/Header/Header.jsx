import {BsFillTelephoneFill, BsInstagram} from 'react-icons/bs'
import {useEffect, useState} from 'react'

import {BiLogoFacebook} from 'react-icons/bi'
import {FaEnvelope} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import React from 'react'
import SiteService from '../../services/siteService'

function Header() {
  const [info, setInfo] = useState('')
  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await SiteService.getSingleSite()
        setInfo(response)
      } catch (error) {
        // Handle any errors here
        console.error('An error occurred while fetching club info:', error)
      }
    }

    fetchInfo()
  }, [])

  return (
    <>
      {info && (
        <header className="relative bg-primary">
          <div className="container mx-auto px-4 flex items-center justify-center lg:justify-between text-white">
            <div>
              <a href="mailto:info@where2go.vip" className="lg:flex items-center justify-center hidden lg:inline-block">
                <FaEnvelope className="m-2 fill-white" />
                <span className="m-2 text-white">{info.email}</span>
              </a>
            </div>

            <div className="flex items-center justify-center">
              <Link to={info.socialMedia.find((x) => x.name === 'Facebook').link} className="m-2">
                <BiLogoFacebook className="fill-white" size="1.1rem" />
              </Link>
              <Link to={info.socialMedia.find((x) => x.name === 'WhatsApp').link} className="m-2">
                <BsFillTelephoneFill className="fill-white" />
              </Link>
              <Link to={info.socialMedia.find((x) => x.name === 'Instagram').link} className="m-2">
                <BsInstagram className="fill-white" />
              </Link>
            </div>
          </div>
        </header>
      )}
    </>
  )
}

export default Header
