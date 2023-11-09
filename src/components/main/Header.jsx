import React from "react";
import imgLogo from "../../assets/programming-elements-high-resolution-logo-transparent.png";


const Header = () => {
    return <nav className="p-3 flex justify-between items-center shadow-xl">
        <div className="flex items-center gap-2">
            <img className=" w-16 h-16" src={imgLogo} alt="ImgIcon" />
            <p className="text-xl">Pelements.in</p>
        </div>
        <div className="pr-6">
            <ul className="flex items-center gap-5">
                <li><a href="#"><img className="w-12 h-12" src="https://static.vecteezy.com/system/resources/thumbnails/004/853/492/small/moon-night-moonlight-midnight-line-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg" alt="" /></a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Sign In</a></li>
            </ul>
        </div>
    </nav>
}

export default Header;