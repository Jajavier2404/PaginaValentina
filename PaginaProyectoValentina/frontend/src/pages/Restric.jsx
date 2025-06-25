import React, { useState } from 'react';
import { Globe, Wifi, WifiOff, Factory, AlertTriangle, Shield, Zap, Database, Server, Monitor } from 'lucide-react';

// Componente Navbar simplificado para el ejemplo
const Navbar = () => {
    return (
        <nav className="fixed left-0 top-0 h-full w-72 bg-gradient-to-b from-emerald-900 via-emerald-800 to-teal-900 shadow-2xl border-r border-emerald-700/30 z-50">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5"></div>
            <div className="relative z-10 flex flex-col h-full p-6">
                <div className="mb-12">
                    <div className="group flex items-center space-x-4 text-emerald-100 w-full">
                        <div className="flex flex-col items-start">
                            <span className="font-bold text-xl text-white">Pagina Final ADS</span>
                            <span className="text-emerald-300 text-sm font-medium">Dashboard</span>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col space-y-3">
                    <div className="flex items-center px-4 py-4 rounded-xl text-emerald-200 font-medium">
                        <div className="w-2 h-2 rounded-full mr-4 bg-emerald-400"></div>
                        <span className="text-base">Objetivos de la Onu</span>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20 flex items-center px-4 py-4 rounded-xl font-medium">
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"></div>
                        <div className="w-2 h-2 rounded-full mr-4 bg-white shadow-sm"></div>
                        <span className="text-base">Restricciones De los paises</span>
                    </div>
                    <div className="flex items-center px-4 py-4 rounded-xl text-emerald-200 font-medium">
                        <div className="w-2 h-2 rounded-full mr-4 bg-emerald-400"></div>
                        <span className="text-base">Objetivos de la Huella de carbono</span>
                    </div>
                    <div className="flex items-center px-4 py-4 rounded-xl text-emerald-200 font-medium">
                        <div className="w-2 h-2 rounded-full mr-4 bg-emerald-400"></div>
                        <span className="text-base">Calculadora Huella Carbono</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const RestriccionesDigitales = () => {
    const [continenteSeleccionado, setContinenteSeleccionado] = useState(null);

    const continentesData = [
        {
            continente: "América del Norte",
            emoji: "🌎",
            color: "from-emerald-600 to-teal-700",
            paises: ["Estados Unidos", "Canadá", "México"],
            restriccionesInternet: [
                { tipo: "Neutralidad de la Red", descripcion: "Regulaciones estrictas en varios estados de EE.UU.", severidad: "alta", icono: <Wifi className="w-5 h-5" /> },
                { tipo: "Privacidad de Datos", descripcion: "CCPA en California, regulaciones federales canadienses", severidad: "alta", icono: <Shield className="w-5 h-5" /> },
                { tipo: "Contenido Digital", descripcion: "Restricciones en plataformas sociales para menores", severidad: "media", icono: <Monitor className="w-5 h-5" /> }
            ],
            huellaCarbonoDigital: {
                centrosDatos: "40% de la energía renovable",
                consumoEnergetico: "45 TWh/año",
                emisiones: "25.2 Mt CO2/año",
                tendencia: "reduciendo",
                restricciones: [
                    "Límites de eficiencia energética PUE < 1.4",
                    "Carbono neutro para tech giants en 2030",
                    "Impuestos a centros de datos intensivos"
                ]
            },
            estadisticas: { usuarios: "366M", penetracion: "89%", velocidad: "180 Mbps" }
        },
        {
            continente: "Europa",
            emoji: "🌍",
            color: "from-teal-600 to-emerald-700",
            paises: ["Alemania", "Francia", "Reino Unido", "Países Bajos"],
            restriccionesInternet: [
                { tipo: "GDPR", descripcion: "Regulación más estricta del mundo para protección de datos", severidad: "alta", icono: <Shield className="w-5 h-5" /> },
                { tipo: "Ley de Servicios Digitales", descripcion: "Control de contenido y algoritmos en plataformas", severidad: "alta", icono: <Database className="w-5 h-5" /> },
                { tipo: "Cookies y Tracking", descripcion: "Consentimiento obligatorio para todas las cookies", severidad: "media", icono: <Monitor className="w-5 h-5" /> }
            ],
            huellaCarbonoDigital: {
                centrosDatos: "65% de la energía renovable",
                consumoEnergetico: "78 TWh/año",
                emisiones: "18.4 Mt CO2/año",
                tendencia: "reduciendo rápidamente",
                restricciones: [
                    "Green Deal: centros de datos 100% renovables 2030",
                    "Impuesto carbono digital desde 2025",
                    "Etiquetado obligatorio de huella carbono apps"
                ]
            },
            estadisticas: { usuarios: "727M", penetracion: "87%", velocidad: "95 Mbps" }
        },
        {
            continente: "Asia-Pacífico",
            emoji: "🌏",
            color: "from-emerald-500 to-teal-600",
            paises: ["China", "Japón", "Singapur", "Australia"],
            restriccionesInternet: [
                { tipo: "Great Firewall", descripcion: "Bloqueo masivo de sitios occidentales en China", severidad: "alta", icono: <WifiOff className="w-5 h-5" /> },
                { tipo: "Regulación de IA", descripcion: "Japón y Singapur lideran normativas de IA", severidad: "alta", icono: <Database className="w-5 h-5" /> },
                { tipo: "Redes Sociales", descripcion: "Restricciones de edad y tiempo de uso", severidad: "media", icono: <Monitor className="w-5 h-5" /> }
            ],
            huellaCarbonoDigital: {
                centrosDatos: "35% de la energía renovable",
                consumoEnergetico: "156 TWh/año",
                emisiones: "89.3 Mt CO2/año",
                tendencia: "creciendo pero con compromisos",
                restricciones: [
                    "China: PUE máximo 1.3 para nuevos centros",
                    "Japón: carbono neutro sector tech 2050",
                    "Cuotas de emisiones para big tech"
                ]
            },
            estadisticas: { usuarios: "2.8B", penetracion: "67%", velocidad: "85 Mbps" }
        },
        {
            continente: "América Latina",
            emoji: "🌎",
            color: "from-teal-500 to-emerald-600",
            paises: ["Brasil", "México", "Argentina", "Chile"],
            restriccionesInternet: [
                { tipo: "Marco Civil da Internet", descripcion: "Brasil lidera con regulación integral", severidad: "media", icono: <Wifi className="w-5 h-5" /> },
                { tipo: "Protección de Datos", descripcion: "LGPD brasileña similar al GDPR", severidad: "media", icono: <Shield className="w-5 h-5" /> },
                { tipo: "Desinformación", descripcion: "Regulaciones durante procesos electorales", severidad: "baja", icono: <Monitor className="w-5 h-5" /> }
            ],
            huellaCarbonoDigital: {
                centrosDatos: "70% de la energía renovable",
                consumoEnergetico: "25 TWh/año",
                emisiones: "8.7 Mt CO2/año",
                tendencia: "estable con mejoras",
                restricciones: [
                    "Brasil: incentivos fiscales para centros verdes",
                    "Chile: 100% renovables obligatorio 2035",
                    "Estándares regionales de eficiencia"
                ]
            },
            estadisticas: { usuarios: "467M", penetracion: "73%", velocidad: "42 Mbps" }
        },
        {
            continente: "África",
            emoji: "🌍",
            color: "from-emerald-700 to-teal-800",
            paises: ["Sudáfrica", "Nigeria", "Kenia", "Egipto"],
            restriccionesInternet: [
                { tipo: "Cortes de Internet", descripcion: "Restricciones durante conflictos políticos", severidad: "alta", icono: <WifiOff className="w-5 h-5" /> },
                { tipo: "Regulación de Contenido", descripcion: "Censura variable según el país", severidad: "media", icono: <Monitor className="w-5 h-5" /> },
                { tipo: "Impuestos Digitales", descripcion: "Tasas sobre uso de redes sociales", severidad: "baja", icono: <Database className="w-5 h-5" /> }
            ],
            huellaCarbonoDigital: {
                centrosDatos: "25% de la energía renovable",
                consumoEnergetico: "12 TWh/año",
                emisiones: "8.9 Mt CO2/año",
                tendencia: "creciendo rápidamente",
                restricciones: [
                    "Sudáfrica: incentivos para energía solar",
                    "Kenia: regulaciones mínimas actuales",
                    "Planes continentales de digitalización verde"
                ]
            },
            estadisticas: { usuarios: "570M", penetracion: "43%", velocidad: "25 Mbps" }
        },
        {
            continente: "Oceanía",
            emoji: "🏝️",
            color: "from-teal-700 to-emerald-800",
            paises: ["Australia", "Nueva Zelanda", "Fiji"],
            restriccionesInternet: [
                { tipo: "Ley de Asistencia", descripcion: "Australia: acceso gubernamental a encriptación", severidad: "alta", icono: <Shield className="w-5 h-5" /> },
                { tipo: "Censura de Contenido", descripcion: "Bloqueo de sitios de violencia extrema", severidad: "media", icono: <WifiOff className="w-5 h-5" /> },
                { tipo: "Privacidad", descripcion: "Regulaciones similares al GDPR", severidad: "media", icono: <Database className="w-5 h-5" /> }
            ],
            huellaCarbonoDigital: {
                centrosDatos: "85% de la energía renovable",
                consumoEnergetico: "8 TWh/año",
                emisiones: "2.1 Mt CO2/año",
                tendencia: "líder en sostenibilidad",
                restricciones: [
                    "Australia: 100% renovables tech sector 2030",
                    "Nueva Zelanda: carbono neutro 2025",
                    "Estándares más estrictos del mundo"
                ]
            },
            estadisticas: { usuarios: "30M", penetracion: "88%", velocidad: "52 Mbps" }
        }
    ];

    const getSeveridadColor = (severidad) => {
        switch (severidad) {
            case 'alta': return 'bg-red-500 text-white';
            case 'media': return 'bg-yellow-500 text-white';
            case 'baja': return 'bg-emerald-500 text-white';
            default: return 'bg-gray-500 text-white';
        }
    };

    const getTendenciaColor = (tendencia) => {
        if (tendencia.includes('reduciendo')) return 'text-emerald-600';
        if (tendencia.includes('creciendo')) return 'text-red-600';
        return 'text-yellow-600';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <Navbar />
            
            <div className="ml-72">
                {/* Header Hero */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16 px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                                Restricciones Digitales Globales
                            </h1>
                            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed mb-8">
                                Mapeo interactivo de restricciones de internet y regulaciones de huella de carbono digital por continente
                            </p>
                            
                            {/* Métricas globales */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                                    <div className="text-3xl font-bold text-emerald-100">4.2B</div>
                                    <div className="text-emerald-200 text-sm">Usuarios Globales</div>
                                </div>
                                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                                    <div className="text-3xl font-bold text-teal-100">324</div>
                                    <div className="text-emerald-200 text-sm">TWh/año Consumo</div>
                                </div>
                                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                                    <div className="text-3xl font-bold text-red-300">152</div>
                                    <div className="text-emerald-200 text-sm">Mt CO₂/año</div>
                                </div>
                                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                                    <div className="text-3xl font-bold text-emerald-200">52%</div>
                                    <div className="text-emerald-200 text-sm">Energía Renovable</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mapa de continentes interactivo */}
                <div className="px-8 py-12">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                            Selecciona un Continente para Ver Detalles
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {continentesData.map((continente, index) => (
                                <div
                                    key={index}
                                    className={`relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                                        continenteSeleccionado === index ? 'ring-4 ring-emerald-400 scale-105 shadow-2xl shadow-emerald-500/20' : ''
                                    }`}
                                    onClick={() => setContinenteSeleccionado(continenteSeleccionado === index ? null : index)}
                                >
                                    <div className={`bg-gradient-to-br ${continente.color} p-8 h-full`}>
                                        <div className="text-center text-white">
                                            <div className="text-6xl mb-4">{continente.emoji}</div>
                                            <h3 className="text-2xl font-bold mb-2">{continente.continente}</h3>
                                            <div className="space-y-2 text-sm opacity-90">
                                                <div>{continente.estadisticas.usuarios} usuarios</div>
                                                <div>{continente.estadisticas.penetracion} penetración</div>
                                                <div>{continente.estadisticas.velocidad} velocidad promedio</div>
                                            </div>
                                            
                                            {/* Indicadores rápidos */}
                                            <div className="mt-6 flex justify-center space-x-2">
                                                {continente.restriccionesInternet.map((rest, idx) => (
                                                    <div key={idx} className={`w-3 h-3 rounded-full ${getSeveridadColor(rest.severidad)}`}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Panel de detalles */}
                        {continenteSeleccionado !== null && (
                            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border-2 border-emerald-200 p-8 shadow-lg">
                                <div className="text-gray-800">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center space-x-4">
                                            <div className="text-4xl">{continentesData[continenteSeleccionado].emoji}</div>
                                            <h3 className="text-3xl font-bold text-emerald-800">{continentesData[continenteSeleccionado].continente}</h3>
                                        </div>
                                        <button
                                            onClick={() => setContinenteSeleccionado(null)}
                                            className="text-gray-400 hover:text-emerald-600 transition-colors text-2xl font-bold"
                                        >
                                            ✕
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        {/* Restricciones de Internet */}
                                        <div className="space-y-6">
                                            <h4 className="text-2xl font-bold text-emerald-700 flex items-center">
                                                <Wifi className="w-6 h-6 mr-2" />
                                                Restricciones de Internet
                                            </h4>
                                            
                                            <div className="space-y-4">
                                                {continentesData[continenteSeleccionado].restriccionesInternet.map((restriccion, idx) => (
                                                    <div key={idx} className="bg-white rounded-xl p-6 border border-emerald-200 shadow-sm">
                                                        <div className="flex items-start space-x-4">
                                                            <div className="text-emerald-600 mt-1">
                                                                {restriccion.icono}
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="flex items-center justify-between mb-2">
                                                                    <h5 className="font-semibold text-lg text-gray-800">{restriccion.tipo}</h5>
                                                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getSeveridadColor(restriccion.severidad)}`}>
                                                                        {restriccion.severidad.toUpperCase()}
                                                                    </span>
                                                                </div>
                                                                <p className="text-gray-600 leading-relaxed">{restriccion.descripcion}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Huella de Carbono Digital */}
                                        <div className="space-y-6">
                                            <h4 className="text-2xl font-bold text-teal-700 flex items-center">
                                                <Factory className="w-6 h-6 mr-2" />
                                                Huella de Carbono Digital
                                            </h4>
                                            
                                            <div className="bg-white rounded-xl p-6 border border-emerald-200 shadow-sm">
                                                <div className="grid grid-cols-2 gap-4 mb-6">
                                                    <div className="text-center">
                                                        <div className="text-2xl font-bold text-emerald-600">
                                                            {continentesData[continenteSeleccionado].huellaCarbonoDigital.centrosDatos}
                                                        </div>
                                                        <div className="text-sm text-gray-600">Energía Renovable</div>
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="text-2xl font-bold text-red-500">
                                                            {continentesData[continenteSeleccionado].huellaCarbonoDigital.emisiones}
                                                        </div>
                                                        <div className="text-sm text-gray-600">Emisiones</div>
                                                    </div>
                                                </div>
                                                
                                                <div className="mb-4">
                                                    <div className="text-sm text-gray-600 mb-2">Tendencia:</div>
                                                    <div className={`font-semibold ${getTendenciaColor(continentesData[continenteSeleccionado].huellaCarbonoDigital.tendencia)}`}>
                                                        {continentesData[continenteSeleccionado].huellaCarbonoDigital.tendencia}
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="text-sm text-gray-600 mb-3">Restricciones Implementadas:</div>
                                                    <div className="space-y-2">
                                                        {continentesData[continenteSeleccionado].huellaCarbonoDigital.restricciones.map((restriccion, idx) => (
                                                            <div key={idx} className="flex items-start space-x-2">
                                                                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                                                                <div className="text-sm text-gray-700">{restriccion}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer con información adicional */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-12">
                    <div className="max-w-6xl mx-auto text-center text-white">
                        <h3 className="text-2xl font-bold mb-4">Impacto Global de las Restricciones Digitales</h3>
                        <p className="text-emerald-100 text-lg leading-relaxed max-w-4xl mx-auto">
                            Las regulaciones digitales y las políticas de huella de carbono están redefiniendo el panorama tecnológico mundial. 
                            Desde la privacidad de datos hasta la sostenibilidad energética, cada continente desarrolla su propio enfoque 
                            para equilibrar la innovación digital con la responsabilidad ambiental y social.
                        </p>
                        
                        <div className="mt-8 text-sm text-emerald-200">
                            Datos actualizados • Junio 2025 • Fuentes: Organizaciones gubernamentales y tech reports
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestriccionesDigitales;