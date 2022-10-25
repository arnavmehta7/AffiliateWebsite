import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import w4 from "../assets/images/w4.png";
import w5 from "../assets/images/w5.png";
import w1 from "../assets/images/w1.png";
import w2 from "../assets/images/w2.png";
import logoColor from "../assets/images/logo-color.png";
import w3 from "../assets/images/w3.png";
const WithHeaderFooter = () => {
    return (
    <div>
        <Header w3={w3} logoColor={logoColor} w4={w4} />
		<Outlet/>
		<Footer/>
		
	</div>
    )
}

export default WithHeaderFooter;