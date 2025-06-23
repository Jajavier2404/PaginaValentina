import React from 'react';
import { AlertTriangle, Shield, Zap, Factory, Car, Plane, Home, Droplets, TreePine } from 'lucide-react';
import Navbar from "../components/navbar"

const RestriccionesPaises = () => {
    const paisesRestricciones = [
        {
        pais: "Estados Unidos",
        bandera: "🇺🇸",
        restricciones: [
            { tipo: "Emisiones CO2", limite: "Reducción 50% para 2030", icono: <Factory className="w-4 h-4" />, severidad: "alta" },
            { tipo: "Vehículos", limite: "Solo eléctricos en CA desde 2035", icono: <Car className="w-4 h-4" />, severidad: "alta" },
            { tipo: "Energía", limite: "100% renovable para 2050", icono: <Zap className="w-4 h-4" />, severidad: "media" }
        ]
        },
        {
        pais: "Alemania",
        bandera: "🇩🇪",
        restricciones: [
            { tipo: "Carbón", limite: "Eliminación total para 2038", icono: <Factory className="w-4 h-4" />, severidad: "alta" },
            { tipo: "Transporte", limite: "Zonas libres de emisiones", icono: <Car className="w-4 h-4" />, severidad: "media" },
            { tipo: "Edificios", limite: "Eficiencia energética obligatoria", icono: <Home className="w-4 h-4" />, severidad: "media" }
        ]
        },
        {
        pais: "Francia",
        bandera: "🇫🇷",
        restricciones: [
            { tipo: "Vuelos domésticos", limite: "Prohibidos si hay tren <2.5h", icono: <Plane className="w-4 h-4" />, severidad: "alta" },
            { tipo: "Combustibles fósiles", limite: "Sin exploración desde 2040", icono: <Factory className="w-4 h-4" />, severidad: "alta" },
            { tipo: "Plásticos", limite: "Prohibición de uso único", icono: <AlertTriangle className="w-4 h-4" />, severidad: "media" }
        ]
        },
        {
        pais: "Reino Unido",
        bandera: "🇬🇧",
        restricciones: [
            { tipo: "Vehículos", limite: "Sin gasolina/diésel desde 2030", icono: <Car className="w-4 h-4" />, severidad: "alta" },
            { tipo: "Gas natural", limite: "Prohibición en casas nuevas", icono: <Home className="w-4 h-4" />, severidad: "media" },
            { tipo: "Emisiones", limite: "Net-zero para 2050", icono: <Factory className="w-4 h-4" />, severidad: "alta" }
        ]
        },
        {
        pais: "Japón",
        bandera: "🇯🇵",
        restricciones: [
            { tipo: "Carbón", limite: "Reducción 90% para 2050", icono: <Factory className="w-4 h-4" />, severidad: "alta" },
            { tipo: "Vehículos", limite: "100% eléctricos para 2035", icono: <Car className="w-4 h-4" />, severidad: "media" },
            { tipo: "Energía nuclear", limite: "Máximo 20-22% del mix", icono: <Zap className="w-4 h-4" />, severidad: "baja" }
        ]
        },
        {
        pais: "Canadá",
        bandera: "🇨🇦",
        restricciones: [
            { tipo: "Petróleo", limite: "Sin nuevas licencias offshore", icono: <Droplets className="w-4 h-4" />, severidad: "alta" },
            { tipo: "Metano", limite: "Reducción 75% para 2030", icono: <Factory className="w-4 h-4" />, severidad: "alta" },
            { tipo: "Deforestación", limite: "Cero deforestación neta", icono: <TreePine className="w-4 h-4" />, severidad: "media" }
        ]
        },
        {
        pais: "Australia",
        bandera: "🇦🇺",
        restricciones: [
            { tipo: "Emisiones", limite: "Reducción 43% para 2030", icono: <Factory className="w-4 h-4" />, severidad: "media" },
            { tipo: "Carbón", limite: "Sin nuevas minas térmicas", icono: <Factory className="w-4 h-4" />, severidad: "alta" },
            { tipo: "Agua", limite: "Restricciones severas por sequía", icono: <Droplets className="w-4 h-4" />, severidad: "alta" }
        ]
        },
        {
        pais: "Noruega",
        bandera: "🇳🇴",
        restricciones: [
            { tipo: "Vehículos", limite: "Solo eléctricos desde 2025", icono: <Car className="w-4 h-4" />, severidad: "alta" },
            { tipo: "Calefacción", limite: "Prohibido combustible fósil", icono: <Home className="w-4 h-4" />, severidad: "alta" },
            { tipo: "Aviación", limite: "Biocombustibles obligatorios", icono: <Plane className="w-4 h-4" />, severidad: "media" }
        ]
        },
        {
        pais: "Países Bajos",
        bandera: "🇳🇱",
        restricciones: [
            { tipo: "Nitrógeno", limite: "Reducción 50% para 2030", icono: <Factory className="w-4 h-4" />, severidad: "alta" },
            { tipo: "Gas natural", limite: "Eliminación para 2050", icono: <Home className="w-4 h-4" />, severidad: "media" },
            { tipo: "Agricultura", limite: "Límites estrictos de emisiones", icono: <TreePine className="w-4 h-4" />, severidad: "alta" }
        ]
        },
        {
        pais: "Dinamarca",
        bandera: "🇩🇰",
        restricciones: [
            { tipo: "Petróleo", limite: "Sin exploración desde 2050", icono: <Droplets className="w-4 h-4" />, severidad: "alta" },
            { tipo: "Carbón", limite: "Eliminación total para 2030", icono: <Factory className="w-4 h-4" />, severidad: "alta" },
            { tipo: "Agricultura", limite: "Impuesto CO2 ganadería", icono: <TreePine className="w-4 h-4" />, severidad: "media" }
        ]
        },
        {
        pais: "Suecia",
        bandera: "🇸🇪",
        restricciones: [
            { tipo: "Aviación", limite: "Impuesto vuelos domésticos", icono: <Plane className="w-4 h-4" />, severidad: "media" },
            { tipo: "Transporte", limite: "Zonas libres de fósiles", icono: <Car className="w-4 h-4" />, severidad: "alta" },
            { tipo: "Plásticos", limite: "Prohibición envases único uso", icono: <AlertTriangle className="w-4 h-4" />, severidad: "media" }
        ]
        },
        {
        pais: "Costa Rica",
        bandera: "🇨🇷",
        restricciones: [
            { tipo: "Petróleo", limite: "Prohibición exploración", icono: <Droplets className="w-4 h-4" />, severidad: "alta" },
            { tipo: "Deforestación", limite: "Cero deforestación", icono: <TreePine className="w-4 h-4" />, severidad: "alta" },
            { tipo: "Plásticos", limite: "Prohibición productos desechables", icono: <AlertTriangle className="w-4 h-4" />, severidad: "media" }
        ]
        },
        {
        pais: "Nueva Zelanda",
        bandera: "🇳🇿",
        restricciones: [
            { tipo: "Petróleo", limite: "Sin nuevas licencias offshore", icono: <Droplets className="w-4 h-4" />, severidad: "alta" },
            { tipo: "Metano", limite: "Reducción 47% para 2050", icono: <Factory className="w-4 h-4" />, severidad: "alta" },
            { tipo: "Plásticos", limite: "Prohibición bolsas desechables", icono: <AlertTriangle className="w-4 h-4" />, severidad: "baja" }
        ]
        },
        {
        pais: "Singapur",
        bandera: "🇸🇬",
        restricciones: [
            { tipo: "Vehículos", limite: "Límite total de automóviles", icono: <Car className="w-4 h-4" />, severidad: "alta" },
            { tipo: "Agua", limite: "Restricciones severas uso", icono: <Droplets className="w-4 h-4" />, severidad: "alta" },
            { tipo: "Edificios", limite: "Estándares eficiencia obligatorios", icono: <Home className="w-4 h-4" />, severidad: "media" }
        ]
        },
        {
        pais: "Islandia",
        bandera: "🇮🇸",
        restricciones: [
            { tipo: "Energía", limite: "100% renovable objetivo", icono: <Zap className="w-4 h-4" />, severidad: "baja" },
            { tipo: "Pesca", limite: "Cuotas estrictas por especie", icono: <Droplets className="w-4 h-4" />, severidad: "media" },
            { tipo: "Turismo", limite: "Límites en áreas protegidas", icono: <TreePine className="w-4 h-4" />, severidad: "media" }
        ]
        }
    ];

    const getSeveridadColor = (severidad) => {
        switch (severidad) {
        case 'alta': return 'bg-red-100 text-red-800 border-red-200';
        case 'media': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
        case 'baja': return 'bg-green-100 text-green-800 border-green-200';
        default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getSeveridadDot = (severidad) => {
        switch (severidad) {
        case 'alta': return 'bg-red-500';
        case 'media': return 'bg-yellow-500';
        case 'baja': return 'bg-green-500';
        default: return 'bg-gray-500';
        }
    };

    return (
        <div className="ml-72 min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/20">
            <Navbar />

        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 shadow-xl">
            <div className="px-8 py-12">
            <div className="flex items-center space-x-4 mb-4">
                <div>
                <h1 className="text-4xl font-bold text-white">Restricciones Ambientales</h1>
                <p className="text-emerald-200 text-lg mt-2">Políticas y limitaciones por país para combatir el cambio climático</p>
                </div>
            </div>
            
            {/* Estadísticas rápidas */}
            <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                <div className="text-emerald-300 text-sm font-medium">Países Analizados</div>
                <div className="text-white text-2xl font-bold">15</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                <div className="text-emerald-300 text-sm font-medium">Restricciones Altas</div>
                <div className="text-white text-2xl font-bold">28</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                <div className="text-emerald-300 text-sm font-medium">Sectores Afectados</div>
                <div className="text-white text-2xl font-bold">9</div>
                </div>
            </div>
            </div>
        </div>

        {/* Contenido principal */}
        <div className="p-8">
            {/* Leyenda de severidad */}
            <div className="mb-8 bg-white rounded-xl shadow-sm border border-emerald-100 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-emerald-600" />
                Nivel de Severidad
            </h2>
            <div className="flex space-x-6">
                <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Alta - Restricciones estrictas y obligatorias</span>
                </div>
                <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Media - Regulaciones moderadas</span>
                </div>
                <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Baja - Medidas voluntarias o futuras</span>
                </div>
            </div>
            </div>

            {/* Grid de países */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {paisesRestricciones.map((pais) => (
                <div 
                key={pais.pais} 
                className="bg-white rounded-xl shadow-sm border border-emerald-100"
                >
                {/* Header del país */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 rounded-t-xl">
                    <div className="flex items-center">
                        {/* Quitado el span con la bandera */}
                        <h3 className="text-lg font-bold text-white">{pais.pais}</h3>
                        <p className="text-emerald-100 text-sm ml-4">{pais.restricciones.length} restricciones activas</p>
                    </div>
                </div>

                {/* Lista de restricciones */}
                <div className="p-5">
                    <div className="space-y-4">
                    {pais.restricciones.map((restriccion, idx) => (
                        <div key={idx} className="relative">
                        <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 transition-colors duration-200">
                            {/* Icono y dot de severidad */}
                            <div className="relative">
                            <div className="text-emerald-600 mt-1">
                                {restriccion.icono}
                            </div>
                            <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${getSeveridadDot(restriccion.severidad)}`}></div>
                            </div>
                            
                            {/* Contenido */}
                            <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                                <h4 className="font-semibold text-gray-800 text-sm">{restriccion.tipo}</h4>
                                <span className={`text-xs px-2 py-1 rounded-full border font-medium ${getSeveridadColor(restriccion.severidad)}`}>
                                {restriccion.severidad.toUpperCase()}
                                </span>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">{restriccion.limite}</p>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Footer con resumen */}
                <div className="px-5 pb-4">
                    <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <div className="flex space-x-4 text-xs text-gray-500">
                        <span className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                        {pais.restricciones.filter(r => r.severidad === 'alta').length}
                        </span>
                        <span className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                        {pais.restricciones.filter(r => r.severidad === 'media').length}
                        </span>
                        <span className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                        {pais.restricciones.filter(r => r.severidad === 'baja').length}
                        </span>
                    </div>
                    <div className="text-xs text-emerald-600 font-medium">
                        Actualizado 2025
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>

            {/* Footer informativo */}
            <div className="mt-12 bg-gradient-to-r from-emerald-900 to-teal-900 rounded-xl p-8 text-white">
            <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Información Importante</h3>
                <p className="text-emerald-200 max-w-4xl mx-auto">
                Las restricciones mostradas representan las políticas ambientales más significativas implementadas por cada país. 
                Estas medidas están diseñadas para reducir las emisiones de gases de efecto invernadero y combatir el cambio climático. 
                La información se actualiza regularmente para reflejar los cambios en las políticas gubernamentales.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default RestriccionesPaises;