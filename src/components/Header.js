import { Link } from 'react-router-dom'
import { AnimateOnChange } from 'react-animation'
import { useContext } from 'react'
import { CartContext } from 'contexts/CartContext'
import { NotificationContext } from 'contexts/NotificationContext'
import { AuthContext } from 'contexts/AuthContext'
import 'react-confirm-alert/src/react-confirm-alert.css'

const Header = () => {
  const { getTotalQuantity } = useContext(CartContext)
  const { getTotalMessage } = useContext(NotificationContext)
  const { me } = useContext(AuthContext)
  const totalQuantity = getTotalQuantity()
  const totalMessage = getTotalMessage()
  return (
    <>
      <header className="navbar navbar-expand-md navbar-light d-print-none">
        <div className="container-xl">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
            <Link to="/">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAADnCAMAAABPJ7iaAAAAclBMVEX///8AAACioqLh4eHu7u5MTExTU1OsrKx4eHguLi7ExMTw8PDHx8doaGhaWlq8vLwMDAwTExOZmZnc3Nz29vYjIyOqqqpGRkY7OzuGhobR0dG0tLSTk5POzs6CgoIoKChxcXFpaWlzc3M/Pz9YWFgXFxdKmrV1AAAD1klEQVR4nO3de1uiQBSAcRQt81IJZCV4Kd3v/xU3pXanGOHMnMFb7/sv4uHX1taD8zBRRERERESkqddW5pCstSm9Q64oGnXaKjWm3LY2pZMdpGWtzTRpeWtToIXtPGjTm37IbqZW2irokI8xEtrm4GG/+lbaa+ApkYT2EnjmMzRl0IIGTZsDLe1qmwtoD+opSepM0/9iTQS0iXpK5+EEtC40ZdB2h6E1B00btN1haM1B0wZtdxhac9C0QdsdhtYcNG3QdoehNQdN2ylokpt1ebHv9d7xvZ8GxVfu9yF7i8/ypdvU9WxcnhgLaP9bvMhHTOLqtTvQzAbyqYPKyeIb42/SGbe2a/ekRe/SqcvqufJ7/k+yGYX12n1pkZRmOVVOm3nP0NAK/y+onJaKZli+MVS0uYy2UNFi0QzrT5qMZv+YXkYbWc60f0y/Mtc5bDJ32r3HCoQfbctDK9HY8rWWb6yGdSMjd5r1gtxok/LQjWhs+dpF9UB42p3tmBdtLRpbvnZcPXDONNlvbRHNsrLuWmij1Ch+1NDG6fcOyn620NDehENUNNv/yKKGZ0+rWbbaIm0CDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgVWhXfGP8OZ9Jyk9Ie/ekOXUa2gDa76ANr5cWF4lbhce6kdPQfIMGDRo0Ja13zrR7VbIlbieiHSNo0KAdJ2jQoB0naNCgHSdo0KAdJ2jQoB0naNCgdToPqmQPCrjIG+NXfM8fGjRo0P4tiZm6dTnrRq54tQ80aOdHm0SZpFOuYvWlXcACXf9/NWjQoEGDBg0aNGjQoEGDBg0aNGjQoEGDBu2yaGMN7dwexL2Ym3U1tG1qvNO3jSdGs9xIReua75Tf5jU0yzuF+XzNHGIRBHro/eP10p6gfRbmKTEBabPyXWxbETXSBt+audPSd+P8pZ121/V9KMfnNj/Fq1lSiGjWIy7bgjS8517Qt7xSRrP/wsz8aaKpHcvmYQ40yyYw0q9fNPKmCZ9pk6hoiWyIbXcmBe1RNtV2rpwmnGHdtMqbthFO7TwraLIf54/W4Wgu2x5OK3/sCGlDhw0B74YqWjxY7hv0HWD7NuvyxFhAyzflRlzSb/h/rb628HrpOdNk+7zVNRfQhBvl1QXNuAxoNUHTBs24DGg1QdNW0vaPF4MGrSZo2qAZlwGtJmjaoBmXAa0maNqgGZcBrSYJraue4kHrJV1dSU9AmyuHfIzJnGnBqqUFC1rYoCmDFrbj0GQ3626CtrXT/mzDjumLaG1UobUStLD9Epr+r1PRmB/FbWUOyVqbYltsREREREQk7y81LuYf5LdVYAAAAABJRU5ErkJggg=="
                width="110"
                height="32"
                alt="Tabler"
                className="navbar-brand-image px-2"
              />
            </Link>
            Helen Store
          </h1>
          <div className="navbar-nav flex-row order-md-last">
            {me && (
              <div className="nav-item dropdown d-none d-md-flex me-3">
                <Link
                  to="/carts"
                  className="nav-link px-0 carts-icon"
                  data-bs-toggle="dropdown"
                  tabIndex="-1"
                  aria-label="Show notifications"
                >
                  <AnimateOnChange
                    animationIn="bounceIn"
                    animationOut="bounceOut"
                    durationOut={500}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="6" cy="19" r="2" />
                      <circle cx="17" cy="19" r="2" />
                      <path d="M17 17h-11v-14h-2" />
                      <path d="M6 5l14 1l-1 7h-13" />
                    </svg>
                    <span className="badge bg-red">{totalQuantity}</span>
                  </AnimateOnChange>
                </Link>
              </div>
            )}
            {me && (
              <div className="nav-item dropdown d-none d-md-flex me-3">
                <Link
                  to="/notifications"
                  className="nav-link px-0 carts-icon"
                  data-bs-toggle="dropdown"
                  tabIndex="-1"
                  aria-label="Show notifications"
                >
                  <AnimateOnChange
                    animationIn="bounceIn"
                    animationOut="bounceOut"
                    durationOut={500}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                      <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                    </svg>
                    <span className="badge bg-red">{totalMessage}</span>
                  </AnimateOnChange>
                </Link>
              </div>
            )}

            <div className="nav-item d-none d-md-flex me-3">
              <div className="btn-list">
                {!me && (
                  <Link to="/login" className="btn btn-outline-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                      <path d="M20 12h-13l3 -3m0 6l-3 -3" />
                    </svg>
                    Login
                  </Link>
                )}
              </div>
            </div>

            {me && (
              <div className="nav-item">
                <Link
                  to="/account"
                  className="nav-link d-flex lh-1 text-reset p-0"
                >
                  <div className="d-none d-xl-block ps-2">
                    <div>{me.name}</div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
