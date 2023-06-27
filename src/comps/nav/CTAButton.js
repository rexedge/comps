import React from 'react'

export default function CTAButton({ link, onClick, title = 'CTA Button' }) {
     {
          if (!link || '') {
               return (
                    <button onClick={onClick} className="flex gap-0 hover:gap-5 text-sm px-4 py-1 rounded-sm cursor-pointer text-white bg-purple-800 hover:bg-purple-800/80 transition-all duration-500">
                         <span>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                              </svg>
                         </span>
                         {title}
                         <span>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                              </svg>
                         </span>
                    </button>
               )
          } else {
               return (
                    <a href={link} className="flex gap-0 hover:gap-5 text-sm px-4 py-1 rounded-sm cursor-pointer text-white bg-purple-800 hover:bg-purple-800/80 transition-all duration-500">
                         <span>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                              </svg>
                         </span>
                         {title}
                         <span>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                              </svg>
                         </span>
                    </a>
               )
          }
     }
}