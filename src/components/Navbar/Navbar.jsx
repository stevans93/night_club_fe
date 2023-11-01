import {NavLink, useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'

import {GiHamburgerMenu} from 'react-icons/gi'
import React from 'react'
import SiteService from '../../services/siteService'
import UserProfile from '../UserProfile/UserProfile'
import {logOutUser} from '../../store/userSlice'
import logo from '../../assets/where2go.png'
import {toast} from 'react-toastify'
import {useDispatch} from 'react-redux'

function Navbar() {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [info, setInfo] = useState()

  useEffect(() => {
    const fetchSiteInfo = async () => {
      try {
        const siteInfo = await SiteService.getSingleSite()
        setInfo(siteInfo)
      } catch (error) {
        // Handle any errors here
        console.error('An error occurred while fetching site info:', error)
      }
    }

    fetchSiteInfo()
  }, [])

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleLogOut = () => {
    dispatch(logOutUser())
    navigate('/')
    toast.success('Uspešno ste se odjavili!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    })
  }

  const ncUser = JSON.parse(localStorage.getItem('nc_user'))

  // Get the user's role from the parsed user object
  const userRole = ncUser ? ncUser.role : null

  // Extract the clubId if ncUser is available
  const clubId = ncUser ? ncUser.clubId : null

  if (clubId) {
    // Do something with clubId
    
  } else {
    // Handle the case when clubId is not found in ncUser
    
  }

  

  return (
    <>
      <nav className="bg-secondary relative z-10">
        <div className=" flex justify-between items-center container mx-auto px-4 py-5 text-sm">
          <a href="/" className="m-2">
            <img src={logo} alt="where2go" className="w-[150px]" />
          </a>

          <div className="lg:hidden right-4 absolute">
            <button className="navbar-burger flex items-center text-blue-600 p-3" position="right" onClick={handleOpen}>
              <GiHamburgerMenu className="block h-7 w-7 fill-current" position="right" />
            </button>
          </div>

          {localStorage.hasOwnProperty('nc_user') ? (
            <div className="flex items-center">
              <div className="hidden lg:flex lg:justify-center lg:items-center w-full">
                <NavLink to="/" className="m-2" style={{ textDecoration: 'none' }}>
                  Početna
                </NavLink>
                <NavLink to="/clubs" className="m-2" style={{ textDecoration: 'none' }}>
                  Ugostiteljski Objekti
                </NavLink>
                <NavLink to="https://www.wheretogo.fun/o-nama/" target="_blank" className="m-2" style={{ textDecoration: 'none' }}>
                  O Nama
                </NavLink>
                <NavLink to="/contact" className="m-2" style={{ textDecoration: 'none' }}>
                  Kontaktirajte Nas
                </NavLink>
                <NavLink
                  to="/events"
                  style={{ textDecoration: 'none' }}
                  className="m-2 border-2 border-solid text-primary hover:bg-primary hover:text-white border-primary rounded-3xl px-4 py-2">
                  Događaji
                </NavLink>
                {userRole !== 'user' && (
                  <NavLink
                    to={`/dashboard`}
                    style={{ textDecoration: 'none' }}
                    className="m-2 border-2 border-primary bg-primary hover:bg-secondary hover:text-primary text-white rounded-3xl px-5 py-2">
                    Komandna Tabla
                  </NavLink>
                )}
                <button
                  onClick={handleLogOut}
                  className="m-2 border-2 border-primary bg-primary hover:bg-secondary hover:text-primary text-white rounded-3xl px-5 py-2">
                  Odjaviti se
                </button>

                <UserProfile user={ncUser} />
              </div>
            </div>
          ) : (
            <div className="hidden lg:inline-block">
              <NavLink to="/" className="m-2" style={{ textDecoration: 'none' }}>
                Početna
              </NavLink>
              <NavLink to="/clubs" className="m-2" style={{ textDecoration: 'none' }}>
                Ugostiteljski Objekti
              </NavLink>
              <NavLink to="https://www.wheretogo.fun/o-nama/" target="_blank" className="m-2" style={{ textDecoration: 'none' }}>
                O Nama
              </NavLink>
              <NavLink to="/contact" className="m-2" style={{ textDecoration: 'none' }}>
                Kontaktirajte Nas
              </NavLink>
              <NavLink
                to="/events"
                style={{ textDecoration: 'none' }}
                className="m-2 border-2 border-solid text-primary hover:bg-primary hover:text-white border-primary rounded-3xl px-4 py-2">
                Događaji
              </NavLink>
              <NavLink
                to="/main/login"
                style={{ textDecoration: 'none' }}
                className="m-2 border-2 border-primary bg-primary hover:bg-secondary hover:text-primary text-white rounded-3xl px-5 py-2">
                Ulogujte se
              </NavLink>
              <NavLink
                to="/main/register"
                style={{ textDecoration: 'none' }}
                className="m-2 border-2 border-primary bg-primary hover:bg-secondary hover:text-primary text-white rounded-3xl px-5 py-2">
                Registrujte se
              </NavLink>
            </div>
          )}
        </div>

        {localStorage.hasOwnProperty('nc_user') ? (
          <div
            className={`${
              open ? '' : 'hidden'
            } dropdown absolute flex flex-col justify-center items-center left-0 text-center bg-secondary w-[100%]`}>
            <NavLink to="/" className="m-2" style={{ textDecoration: 'none' }}>
              Početna
            </NavLink>
            <NavLink to="/clubs" className="m-2" style={{ textDecoration: 'none' }}>
              Ugostiteljski Objekti
            </NavLink>
            <NavLink to="/about" className="m-2" style={{ textDecoration: 'none' }}>
              O Nama
            </NavLink>
            <NavLink to="/contact" className="m-2" style={{ textDecoration: 'none' }}>
              Kontaktirajte Nas
            </NavLink>
            <NavLink
              to="/events"
              style={{ textDecoration: 'none' }}
              className="m-2 border-2 border-solid text-primary hover:bg-primary hover:text-white border-primary rounded-3xl px-4 py-2">
              Događaji
            </NavLink>
            {userRole !== 'user' && (
              <NavLink
                to={`/dashboard`}
                style={{ textDecoration: 'none' }}
                className="no-underline m-2 border-2 border-primary bg-primary hover:bg-secondary hover:text-primary text-white rounded-3xl px-5 py-2">
                Komandna Tabla
              </NavLink>
            )}
            <button
              onClick={handleLogOut}
              className="m-2 border-2 border-primary bg-primary hover:bg-secondary hover:text-primary text-white rounded-3xl px-5 py-2">
              Odjaviti se
            </button>
          </div>
        ) : (
          <div
            className={`${
              open ? '' : 'hidden'
            } dropdown absolute flex flex-col justify-center items-center left-0 text-center bg-secondary w-[100%]`}>
            <NavLink to="/" className="m-2" style={{ textDecoration: 'none' }}>
              Početna
            </NavLink>
            <NavLink to="/clubs" className="m-2" style={{ textDecoration: 'none' }}>
              Ugostiteljski Objekti
            </NavLink>
            <NavLink to="/about" className="m-2" style={{ textDecoration: 'none' }}>
              O Nama
            </NavLink>
            <NavLink to="/contact" className="m-2" style={{ textDecoration: 'none' }}>
              Kontaktirajte Nas
            </NavLink>
            <NavLink
              to="/events"
              style={{ textDecoration: 'none' }}
              className="m-2 border-2 border-solid text-primary hover:bg-primary hover:text-white border-primary rounded-3xl px-4 py-2">
              Događaji
            </NavLink>
            <NavLink
              to="/main/login"
              style={{ textDecoration: 'none' }}
              className="m-2 border-2 border-primary bg-primary hover:bg-secondary hover:text-primary text-white rounded-3xl px-5 py-2">
              Ulogujte se
            </NavLink>
            <NavLink
              to="/main/register"
              style={{ textDecoration: 'none' }}
              className="m-2 border-2 border-primary bg-primary hover:bg-secondary hover:text-primary text-white rounded-3xl px-5 py-2">
              Registrujte se
            </NavLink>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
