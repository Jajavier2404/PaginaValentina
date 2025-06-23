import React from 'react';
import { Target, Thermometer, Zap, Home, Recycle, Fish, TreePine, Handshake, Globe, Leaf, Wind, Factory, Users, Calendar, TrendingDown } from 'lucide-react';
import Navbar from "../components/navbar"

const ONUHuellaCarbono = () => {
    const objetivosRelacionados = [
        {
        numero: 1,
        titulo: "Energía Asequible y No Contaminante",
        descripcion: "Transición hacia energías renovables (solar, eólica, hidráulica)",
        impacto: "Promover energías limpias",
        color: "from-lime-500 to-yellow-400", // Nuevos colores
        bgColor: "bg-lime-50",
        borderColor: "border-lime-200"
        },
        {
        numero: 2,
        titulo: "Ciudades y Comunidades Sostenibles",
        descripcion: "Reducir emisiones por transporte, construcción y residuos urbanos",
        impacto: "Fomentar ciudades sostenibles",
        color: "from-fuchsia-500 to-pink-400", // Nuevos colores
        bgColor: "bg-fuchsia-50",
        borderColor: "border-fuchsia-200"
        },
        {
        numero: 3,
        titulo: "Producción y Consumo Responsables",
        descripcion: "Menos desperdicio, uso eficiente de recursos, economía circular",
        impacto: "Transformar modelos de producción",
        color: "from-sky-500 to-cyan-400", // Nuevos colores
        bgColor: "bg-sky-50",
        borderColor: "border-sky-200"
        },
        {
        numero: 4,
        titulo: "Acción por el Clima",
        descripcion: "Adoptar medidas urgentes para combatir el cambio climático y sus efectos",
        impacto: "Objetivo principal contra el cambio climático",
        color: "from-rose-500 to-orange-400", // Nuevos colores
        bgColor: "bg-rose-50",
        borderColor: "border-rose-200",
        destacado: true
        },
        {
        numero: 5,
        titulo: "Vida Submarina",
        descripcion: "Los océanos absorben CO₂. Protegerlos ayuda a reducir la huella global",
        impacto: "Proteger ecosistemas marinos",
        color: "from-indigo-500 to-blue-400", // Nuevos colores
        bgColor: "bg-indigo-50",
        borderColor: "border-indigo-200"
        },
        {
        numero: 6,
        titulo: "Vida de Ecosistemas Terrestres",
        descripcion: "Los bosques absorben CO₂. Su protección reduce la huella global",
        impacto: "Proteger ecosistemas terrestres",
        color: "from-green-700 to-lime-400", // Nuevos colores
        bgColor: "bg-green-50",
        borderColor: "border-green-200"
        },
        {
        numero: 7,
        titulo: "Alianzas para Lograr los Objetivos",
        descripcion: "Cooperación internacional para lograr neutralidad de carbono",
        impacto: "Apoyar alianzas globales",
        color: "from-cyan-700 to-teal-400", // Nuevos colores
        bgColor: "bg-cyan-50",
        borderColor: "border-cyan-200"
        }
    ];

    const metasGlobales = [
        {
        titulo: "Neutralidad de Carbono para 2050",
        descripcion: "Reducir las emisiones al máximo posible y compensar el resto (por ejemplo, con reforestación)",
        color: "from-yellow-600 to-lime-600" // Nuevos colores
        },
        {
        titulo: "Limitar Calentamiento a 1.5°C",
        descripcion: "Acuerdo de París: Implica recortes profundos en la huella de carbono global",
        color: "from-pink-500 to-orange-500" // Nuevos colores
        },
        {
        titulo: "Involucrar a Todos los Sectores",
        descripcion: "Gobiernos, empresas y ciudadanos tienen un rol en medir, reducir y compensar su huella",
        color: "from-blue-600 to-sky-400" // Nuevos colores
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 ml-72">
            <Navbar />

        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16 px-8">
            <div className="max-w-6xl mx-auto">
            <div className="text-center">
                <div className="flex justify-center mb-6">
                </div>
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                ONU y Huella de Carbono
                </h1>
                <p className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
                La reducción de la huella de carbono está directamente ligada a varios Objetivos de Desarrollo Sostenible, 
                especialmente al <strong>ODS 13: Acción por el clima</strong>
                </p>
            </div>
            </div>
        </div>

        {/* Concepto principal */}
        <div className="max-w-6xl mx-auto px-8 py-12">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-3xl p-8 border-2 border-red-200 mb-12">
            <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-br from-red-500 to-pink-500 text-white rounded-full p-6 shadow-xl">
                <Target className="h-12 w-12" />
                </div>
            </div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                🎯 Objetivo Principal Relacionado con la Huella de Carbono
            </h2>
            <div className="text-center">
                <h3 className="text-2xl font-bold text-red-600 mb-3">
                ODS 13 – Acción por el Clima
                </h3>
                <p className="text-lg text-gray-700 italic mb-4">
                "Adoptar medidas urgentes para combatir el cambio climático y sus efectos"
                </p>
                <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                La ONU busca reducir drásticamente las emisiones de gases de efecto invernadero (GEI) 
                —entre ellos el dióxido de carbono (CO₂)— que causan el calentamiento global. 
                <strong> La huella de carbono</strong> mide justamente esas emisiones en actividades humanas.
                </p>
            </div>
            </div>

            {/* Objetivos relacionados */}
            <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                📌 Objetivos Específicos Asociados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {objetivosRelacionados.map((objetivo) => (
                <div
                    key={objetivo.numero}
                    className={`${objetivo.bgColor} ${objetivo.borderColor} border-2 rounded-2xl p-6 shadow-lg`}
                >
                    <div className="flex items-start space-x-4 mb-4">
                    <div className={`bg-gradient-to-br ${objetivo.color} text-white rounded-xl p-3 shadow-lg`}>
                        <span className="text-xl font-bold">{objetivo.numero}</span>
                    </div>
                    </div>
                    <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {objetivo.titulo}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                        {objetivo.descripcion}
                    </p>
                    <div className="bg-white/60 rounded-lg p-3 border border-gray-200">
                        <p className="text-xs font-semibold text-gray-700">
                        💡 {objetivo.impacto}
                        </p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>

            {/* Metas globales */}
            <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                🌍 ¿Qué Busca la ONU Respecto a la Huella de Carbono?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {metasGlobales.map((meta, index) => (
                <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
                >
                    <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                    {meta.titulo}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                    {meta.descripcion}
                    </p>
                </div>
                ))}
            </div>
            </div>

            {/* Sección de contexto */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-200">
            <div className="text-center">
                <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-full p-4 shadow-lg">
                    <Wind className="h-10 w-10" />
                </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Compromiso Global para el Futuro
                </h2>
                <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
                La ONU no establece un único "objetivo de huella de carbono" como tal, pero reconoce que 
                la reducción de emisiones es fundamental para el cumplimiento de múltiples ODS. 
                La medición y reducción de la huella de carbono se ha convertido en una herramienta clave 
                para evaluar el progreso hacia un desarrollo sostenible.
                </p>
                <div className="bg-white/60 rounded-xl p-6 border border-emerald-200 max-w-2xl mx-auto">
                <p className="text-emerald-700 font-semibold text-lg">
                    💡 La huella de carbono mide las emisiones de gases de efecto invernadero 
                    en actividades humanas, siendo esencial para lograr los objetivos climáticos globales.
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default ONUHuellaCarbono;