import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickOnu = () => {
    navigate('/pagina1');
  };

  const handleClickRestric = () => {
    navigate('/pagina2');
  };

  const handleClickObjetivosHc = () => {
    navigate('/pagina3');
  };

  const handleClickHuellaCarbono = () => {
    navigate('/pagina4');
  };

  const navigationItems = [
    { name: 'Objetivos de la Onu', path: '/pagina1', handler: handleClickOnu },
    { name: 'Restricciones De los paises', path: '/pagina2', handler: handleClickRestric },
    { name: 'Objetivos de la Huella de carbono', path: '/pagina3', handler: handleClickObjetivosHc },
    { name: 'Calculadora Huella Carbono', path: '/pagina', handler: handleClickHuellaCarbono }
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed left-0 top-0 h-full w-72 bg-gradient-to-b from-emerald-900 via-emerald-800 to-teal-900 shadow-2xl border-r border-emerald-700/30 z-50">
      {/* Efecto de textura sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
      
      <div className="relative z-10 flex flex-col h-full p-6">
        {/* Logo */}
        <div className="mb-12">
          <button 
            onClick={handleClickOnu}
            className="group flex items-center space-x-4 text-emerald-100 hover:text-white transition-all duration-300 w-full"
          >
            <div className="relative">              
              <div className="absolute inset-0 bg-emerald-400 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-bold text-xl text-white">Pagina Final ADS</span>
              <span className="text-emerald-300 text-sm font-medium">Dashboard</span>
            </div>
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col space-y-3">
          {navigationItems.map((item, index) => (
            <button
              key={item.name}
              onClick={item.handler}
              className={`group relative flex items-center px-4 py-4 rounded-xl text-left font-medium transition-all duration-300 transform hover:scale-105 ${
                isActivePath(item.path)
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20'
                  : 'text-emerald-200 hover:text-white hover:bg-emerald-800/50'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Indicador lateral activo */}
              {isActivePath(item.path) && (
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"></div>
              )}
              
              {/* Efecto de brillo en hover */}
              <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
                isActivePath(item.path) 
                  ? 'opacity-0' 
                  : 'opacity-0 group-hover:opacity-10 bg-gradient-to-r from-emerald-400 to-teal-400'
              }`}></div>
              
              {/* Icono decorativo */}
              <div className={`w-2 h-2 rounded-full mr-4 transition-all duration-300 ${
                isActivePath(item.path) 
                  ? 'bg-white shadow-sm' 
                  : 'bg-emerald-400 group-hover:bg-emerald-300'
              }`}></div>
              
              {/* Texto del botón */}
              <span className="relative z-10 text-base">{item.name}</span>
              
              {/* Efecto de resplandor para item activo */}
              {isActivePath(item.path) && (
                <div className="absolute right-4 w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        
      </div>
      
      {/* Línea decorativa derecha */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-60"></div>
    </nav>
  );
};

export default Navbar;