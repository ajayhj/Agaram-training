import App from "./app";
import { Outlet,Link } from "react-router-dom";

function Header(){
    return(
        <>
          <ul>
            <li><Link to={'/Homepage'}>Todo</Link></li>
            <li><Link to={'/'}>Todo</Link></li>
          </ul>
        </>
    )
}

export default Header;