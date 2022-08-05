import React from 'react'
import {FcGoogle} from "react-icons/fc"
import {IoIosSend} from "react-icons/io"
import {FaFacebookSquare} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"

const Footer = () => {
  return (
    <div className='w-100 bg-dark d-flex justify-content-around py-5 align-items-center'>
      <div className="text-light">
          <span className='d-flex align-items-center gap-3 mb-3'><FaFacebookSquare className='fs-3' /> Min Thiha</span>
          <span className='d-flex align-items-center gap-3 mb-3'><BsGithub className='fs-3' />DevMinthiha</span>
          <span className='d-flex align-items-center gap-3 mb-3'><AiOutlineMail className='fs-3' />devminthiha@gmail.com</span>
      </div>
      <div className="d-flex flex-column gap-2">
          <button className="btn btn-primary" style={{ width: "150px", }}>Download App</button>
          <button className="btn btn-light" style={{ width: "150px", }}>
              <FcGoogle />
          </button>
      </div>
      <div className="text-light">
          <h5 className="">Send Message</h5>
          <textarea name="" id="" cols="30" rows="4"></textarea> <br />
          <button className="btn btn-primary btn-sm rounded-circle text-light mt-1">
              <IoIosSend />
          </button>
      </div>
    </div>
  )
}

export default Footer
