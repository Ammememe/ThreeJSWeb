import React from 'react'

const Footer = () => {
  return (
    <footer className='c-space pt-7 pt-3 border-t border-black-300 flex justify-between flex-grap gap-5'>
        <div className='text-white-500 flex gap-2'>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>

        </div>
        
        <div className='flex gap-3'>
            <div className='social-icon'>
                <img src='/assets/github.svg' alt='github'  />
                
            </div>
            
            <div className='social-icon'>
                <img src='/assets/linkedin.png' alt='linkedin'/>
                
            </div>
            

        </div>

        <p className="text-white-500"> 2024 Amir Khatiby. All Rights reserved</p>
        
        </footer>
  )
}

export default Footer