import logo_dimidev from './../assets/logo_dimidev.png'
const Navbar = () => {
  return (
    <div className="flex justify-between items-center gap-3 md:px-10  px-3 py-3 shadow-lg min-h-24 flex-wrap mb-5">
      <span className="text-first font-bold">
        <img src={logo_dimidev} alt='logo' className="w-20 h-14"></img>
        {/* Dimi<strong className="text-green ">Dev</strong> */}
      </span>
      <nav className="flex justify-center items-center gap-7 flex-wrap">
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
        <a href="#contact" className="text-link">
          Contact
        </a>
      </nav>
      <a href="https://wa.me/674606328"  className="btn-one" rel="noreferrer">Me contacter</a>
    </div>
  );
};
export default Navbar;
