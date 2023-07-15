import React, { useContext } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../../firebase/firebaseConfig'
import { useState } from 'react';
import Loader from '../../components/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import allContext from '../../context/allContext/allContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signup = async () => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      localStorage.setItem('currentUser',JSON.stringify(result));
      localStorage.setItem('currentAdmin', JSON.stringify(result));
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
      // window.location.href='/'
      navigate('/')
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
        <div className="w-full max-w-md space-y-8 bg-gray-300 p-3 rounded-2xl">
          <div>
          <img
              className="mx-auto h-12 w-auto bg-gray-400 p-1"
              src="https://opencart.mahardhi.com/MT05/paudha/image/catalog/logo.png"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"  style={{color: mode === 'dark' ? 'white' : ''}}>
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link to={'/signup'} className="font-medium text-violet-600 hover:text-violet-500">
                signup
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
                  className="relative block w-full bg-gray-200 rounded-t-md border-0 px-2 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0 sm:text-sm sm:leading-6 "
                  placeholder="Email address" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}
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
                  className="relative block w-full bg-gray-200 rounded-b-md border-0  px-2 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0 sm:text-sm sm:leading-6"
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
              className="group relative flex w-full justify-center rounded-md bg-violet-600 px-3 py-2.5 text-sm font-semibold text-white hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 bg-green-600"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-violet-500 group-hover:text-violet-400" aria-hidden="true" />
              </span>
              Sign in
            </button>
            <ToastContainer />
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login