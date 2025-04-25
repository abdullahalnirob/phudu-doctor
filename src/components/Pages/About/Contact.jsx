import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-11 bg-gray-50">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          {/* Error Icon */}
          <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-2">Oops!</h1>
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Error 404</h2>
          <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or is temporarily unavailable.</p>

          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
