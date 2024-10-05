const Navbar = () => {
  return (
    <div className="flex justify-between items-center gap-3 md:px-10  px-3 py-3 shadow-lg min-h-24 flex-wrap mb-5">
      <span className="text-first font-bold">
        Dimi<strong className="text-green ">Dev</strong>
      </span>
      <nav className="flex justify-center items-center gap-7 flex-wrap">
        <a href="#" className="text-link">
          Acceuil
        </a>
        <a href="#" className="text-link">
          Apropos
        </a>
        <a href="#" className="text-link">
          Competences
        </a>
        <a href="#" className="text-link">
          Services
        </a>
        <a href="#" className="text-link">
          Projets
        </a>
        <a href="#" className="text-link">
          Contact
        </a>
      </nav>
      <a href="#" className="btn-one">
        Me contacter
      </a>
    </div>
  );
};
export default Navbar;
