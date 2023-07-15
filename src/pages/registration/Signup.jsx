import React, { useContext } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../../firebase/firebaseConfig'
import { useState } from 'react';
import Loader from '../../components/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import allContext from '../../context/allContext/allContext';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)

  const signup = async () => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth,email,password)
      toast.success('Signin Successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      setLoading(false);
    } catch (error) {
      toast.error('Sigin Failed', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
        setLoading(false);
    }
  }

  const context = useContext(allContext)
  const { toggleMode, mode} = context
  return (
    <div>
      {loading && <Loader />}
      <div className="flex min-h-full items-center justify-center px-4 py-32 md:py-36 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="img/logot.png"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900" style={{color: mode === 'dark' ? 'white' : ''}}>
              Sign up to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link to={'/login'} className="font-medium text-violet-600 hover:text-violet-500" >
                login
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 px-2 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0 sm:text-sm sm:leading-6 "
                  placeholder="Email address"
                  style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0  px-2 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0 sm:text-sm sm:leading-6"
                  placeholder="Password"
                  style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}
                />
              </div>
            </div>
          </form>
          <div>
              <button
                type="submit"
                onClick={signup}
                className="group relative flex w-full justify-center rounded-md bg-violet-600 px-3 py-2.5 text-sm font-semibold text-white hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-violet-500 group-hover:text-violet-400" aria-hidden="true" />
                </span>
                Sign up
              </button>
              <ToastContainer/>
              <button aria-label="Continue with google" role="button" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-2.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-5">
                <svg width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z" fill="#4285F4" />
                  <path d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z" fill="#34A853" />
                  <path d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z" fill="#FBBC05" />
                  <path d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z" fill="#EB4335" />
                </svg>
                <p className="text-base font-medium ml-4 text-gray-700"  style={{color: mode === 'dark' ? 'white' : ''}}>Continue with Google</p>
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signup