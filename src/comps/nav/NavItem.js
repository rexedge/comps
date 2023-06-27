import React from 'react'

const NavItem = ({ link = '/link', title = 'Title' }) => {
     return (
          <a href={link}>
               <li className="hover:bg-gray-500 py-1 px-3 transition-all duration-300">
                    {title}
               </li>
          </a>
     )
}

export default NavItem