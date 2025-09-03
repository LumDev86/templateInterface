function Nav() {
  return (
    <nav 
      className="relative h-64 bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/assets/bannerHero.png')" }}
    >
      {/* Overlay más claro para que el logo destaque mejor */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center">
          
          {/* Logo (izquierda) con mejor contraste */}
          <div className="flex justify-start">
            <div className="bg-white bg-opacity-20 backdrop-blur-md p-2 rounded-lg">
              <img 
                src="/assets/Logo.png" 
                alt="Logo" 
                className="h-20 w-auto border-2 border-white border-opacity-50 rounded-lg p-1"
              />
            </div>
          </div>
          
          {/* Sección "Quienes Somos" (centro) */}
          <div className="text-white flex justify-center">
            <button className="text-sm font-medium bg-white bg-opacity-25 backdrop-blur-md px-4 py-2 rounded-full hover:bg-opacity-35 transition">
              Quiénes Somos
            </button>
          </div>
          
          {/* Icono carrito (derecha) */}
          <div className="text-white flex justify-end">
            <button className="p-2 bg-white bg-opacity-25 backdrop-blur-md rounded-full hover:bg-opacity-35 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;