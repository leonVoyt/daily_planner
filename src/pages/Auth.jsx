import React, { useState } from 'react'
import money from '../assets/money.svg'
import bgBudget from '../assets/Budget-Transparent.png'
import { inject, observer } from 'mobx-react'
import { useNavigate } from 'react-router-dom'
import { SETTINGS_ROUTE } from '../utils/consts'

const Auth = inject('budget')(
  observer(({ budget: { auth } }) => {
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const history = useNavigate()
    const handleOnSubmit = async (e) => {
      e.preventDefault()
      await auth.validation({ password: passwordInput, email: emailInput })
      console.log(auth)
      if (auth.isAuth) {
        history(SETTINGS_ROUTE)
      }
      setEmailInput('')
      setPasswordInput('')
    }
    return (
      <section className="h-screen flex overflow-hidden ">
        <div className="flex-1  flex flex-col items-center justify-center gap-5">
          <img src={money} alt="" width={20} />
          <h1>Sign in Simple budget</h1>

          <form
            action=""
            className="w-1/2 flex flex-col gap-5"
            onSubmit={(e) => handleOnSubmit(e)}
          >
            <input
              type="text"
              name="email"
              placeholder="Email address"
              className="border-2 focus:border-purple-600 focus:outline-none px-2 py-1 rounded-md"
              onChange={(e) => setEmailInput(e.target.value)}
              value={emailInput}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border-2 px-2 py-1 rounded-md focus:border-purple-600 focus:outline-none"
              onChange={(e) => setPasswordInput(e.target.value)}
              value={passwordInput}
            />

            <button className="border-2 bg-purple-600 px-2 py-1 rounded-md text-white hover:opacity-80">
              Sign in
            </button>
          </form>
          <p>
            Email : testLogin22
            <br />
            Password : {`s#dDA23@44#Ds`}
          </p>
        </div>
        <div className="bg-green-400 w-1/2 auth__bg bg-cover right-0 flex items-center justify-center">
          <img src={bgBudget} alt="" className="w-4/5  bg-cover right-0" />
        </div>
      </section>
    )
  })
)

export default Auth
