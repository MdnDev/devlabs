import React from 'react'

const Footer = () => {
  return (
    <div>
       <div className='footer text-center p-3'>
          &copy; {new Date().getFullYear()}{' '}
          <a className='text-dark' href='https://devlabstech.com/'>
            devlabstech.com
          </a>
          
        </div>
    </div>
  )
}

export default Footer