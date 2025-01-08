import useSticky from '../hooks/fixedNavbar';
import logo_dimidev from './../assets/logo_dimidev.png'
import { FaFacebookF, FaWhatsapp, FaPaperPlane, FaEnvelope } from "react-icons/fa"; //importer les  react-icon pour acceder aux icons
const Navbar = () => {
  const { stickyRef, sticky } = useSticky();
  return (
    <div     ref={stickyRef} className={`flex justify-between bg-green text-white items-center gap-3 md:px-10  px-3 py-3 shadow-md shadow-slate-50 sha min-h-24 flex-wrap mb-5 ${sticky ? 'fixed top-0 left-0 w-full text-black shadow-green-400 bg-white z-50' : ''}`}>
      <span className="text-first font-bold bg-white py-1 rounded-lg">
        <img src={logo_dimidev} alt='logo' className="w-20 h-14 "></img>
      </span>
      <nav className="order-3 md:order-2 flex justify-center items-center gap-7 flex-wrap">
        <a href="#acceuil" className="text-link">
          Acceuil
        </a>
        <a href="#about" className="text-link">
          Apropos
        </a>
        <a href="#competences" className="text-link">
          Competences
        </a>
        <a href="#services" className="text-link">
          Services
        </a>
        <a href="#projets" className="text-link">
          Projets
        </a>
        {/* <a href="#contact" className="text-link">
          Contact
        </a> */}
      </nav>
      <div className=" md:w-fit me-3 md:order-3 flex gap-2 md:gap-5 justify-center items-center  ">
      <a href="https://wa.me/674606328"  className="bg-white rounded-lg text-green px-4 font-medium hover:scale-105 py-3 hidden md:flex" rel="noreferrer">Me contacter</a>
      <div className="me-3 flex justify-center items-center gap-3">
      <a
            href="https://wa.me/674606328"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-12 h-12 rounded-full bg-white text-light px-3 hover:scale-110 border-4 border-green cursor-pointer"
          >
            <FaWhatsapp className="text-green text-2xl" />
          </a>
      <a
            href="https://web.facebook.com/profile.php?id=100087894947502"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-12 h-12 rounded-full bg-white text-light px-3 hover:scale-110 border-4 border-green cursor-pointer"
          >
            <FaFacebookF className="text-green text-2xl" />
          </a>
      
          <a
            href="https://t.me/dimidev237"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-12 h-12 rounded-full bg-white text-light px-3 hover:scale-110 border-4 border-green cursor-pointer"
          >
            <FaPaperPlane className="text-green text-2xl" />
          </a>
          <a
            href="mailto:dimitribonsou26@gmail.com"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-12 h-12 rounded-full bg-white text-light px-3 hover:scale-110 border-4 border-green cursor-pointer"
          >
            <FaEnvelope className="text-green text-2xl" />
          </a>
        
      </div>
      </div>
    
    </div>
  );
};
export default Navbar;
