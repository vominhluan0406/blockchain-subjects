import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import {Link} from 'react-router-dom';

import logo from '../../image/logo.png'
import { useState } from 'react'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" width={50} />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <Link className={`mx-4 cursor-pointer`} to="/market">Market</Link>
        <Link className={`mx-4 cursor-pointer`} to="">Transaction</Link>
      </ul>
    </nav>
  )
}

export default Navbar
