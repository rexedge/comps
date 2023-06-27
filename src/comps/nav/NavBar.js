import React from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import { CTA_BUTTON, NAV_ITEMS } from "../../consts";
import CTAButton from "./CTAButton";

function NavBar() {
     return (
          <nav className=" bg-gray-200">
               <div className="container mx-auto flex justify-between items-center">
                    <Logo />
                    <div>
                         <ul className="flex">
                              {
                                   NAV_ITEMS.map((navItem, index) => (
                                        <NavItem key={index} link={navItem.link} title={navItem.title} />
                                   ))
                              }
                         </ul>
                    </div>
                    {
                         CTA_BUTTON.map((button, index) => (
                              <CTAButton link={button.link} title={button.title} />
                         ))
                    }
                    <div className="hidden">menu</div>
                    <div className="hidden">dropdown</div>
               </div>
          </nav>
     )
}

export default NavBar