import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar(){
    return (
        <header className="bg-indigo-900">
            <div className="container mx-auto flex justify-between">
                <nav ClassName="flex">
                    <NavLink
                     to="/"
                     exact 
                    activeClassName="text-white"
                    className="inline-flex items-center py-9 px-6 mr-5 text-blue-100 hover:text-blue-800 text-4xl font-bold cursive tracking-widest"
                    >
                        Shamil Abubacker 
                    </NavLink>
                    <NavLink
                     to="/post" 
                    className="inline-flex items-center  py-3 px-3 my-6 rounded text-orange-800 font-bold hover:text-blue-800"
                    activeClassName="text-blue-100 bg-blue-700"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink 
                    to="/project"
                    className="inline-flex items-center  py-3 px-3 my-6 rounded text-blue-800 font-bold hover:text-blue-800"
                    activeClassName="text-blue-100 bg-blue-700"
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                    to="/about" 
                    className ="inline-flex items-center  py-3 px-3 my-6 rounded text-blue-200 hover:text-orange-800"
                    activeClassName="text-blue-100 bg-blue-700"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon 
                    url="https://www.instagram.com/shamil_abubacker/" 
                    className="mr-4" 
                    target="blank" 
                    fgcolor="#fff" 
                    style={{height: 45, width: 45}}
                    />
                    <SocialIcon 
                    url="https://www.facebook.com/shamil.rocker" 
                    className="mr-4" 
                    target="blank" 
                    fgcolor="#fff" 
                    style={{height: 45, width: 45}}
                    />
                    <SocialIcon 
                    url="https://twitter.com/Abzshamil0" 
                    className="mr-4" 
                    target="blank" 
                    fgcolor="#fff" 
                    style={{height: 45, width: 45}}
                    />

                </div>
            </div>
        </header>
    )
}