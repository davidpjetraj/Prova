import { FiSearch } from "react-icons/fi";
import { RiAccountCircleFill } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Login, loginUsername } from "./Login";

export const Header = () => {
  const [loginUsername, setLoginUsername] = useState('')
    return(
        <header className="Header">
          <div className="firstdiv">
            <div className="name">
                <h1>UBT - Market</h1>
            </div>
          </div>
          <div>
            <div className="useri">
                <h3>{loginUsername}<RiAccountCircleFill className="i"/></h3>
                <button><a href="/"><BiLogIn className="i"/></a></button>
            </div>
          </div>
        </header>
    )
}