import React from 'react';
// Elimina los imports de iconos, solo deja Navbar
import Navbar from "../components/navbar"

const ODSPage = () => {
    const objetivos = [
        {
        numero: 1,
        titulo: "Fin de la pobreza",
        descripcion: "Erradicar la pobreza en todas sus formas y en todo el mundo.",
        color: "from-violet-500 to-violet-600",
        bgColor: "bg-violet-50",
        borderColor: "border-violet-200"
        },
        {
        numero: 2,
        titulo: "Hambre cero",
        descripcion: "Poner fin al hambre, lograr la seguridad alimentaria, mejorar la nutrición y promover la agricultura sostenible.",
        color: "from-red-500 to-red-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-200"
        },
        {
        numero: 3,
        titulo: "Salud y bienestar",
        descripcion: "Garantizar una vida sana y promover el bienestar para todos en todas las edades.",
        color: "from-yellow-500 to-yellow-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200"
        },
        {
        numero: 4,
        titulo: "Educación de calidad",
        descripcion: "Garantizar una educación inclusiva, equitativa y de calidad y promover oportunidades de aprendizaje durante toda la vida.",
        color: "from-green-500 to-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200"
        },
        {
        numero: 5,
        titulo: "Igualdad de género",
        descripcion: "Lograr la igualdad entre los géneros y empoderar a todas las mujeres y niñas.",
        color: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
        },
        {
        numero: 6,
        titulo: "Agua limpia y saneamiento",
        descripcion: "Garantizar la disponibilidad de agua y su gestión sostenible y el saneamiento para todos.",
        color: "from-pink-500 to-pink-600",
        bgColor: "bg-pink-50",
        borderColor: "border-pink-200"
        },
        {
        numero: 7,
        titulo: "Energía asequible y no contaminante",
        descripcion: "Garantizar el acceso a una energía asequible, segura, sostenible y moderna para todos.",
        color: "from-cyan-500 to-cyan-600",
        bgColor: "bg-cyan-50",
        borderColor: "border-cyan-200"
        },
        {
        numero: 8,
        titulo: "Trabajo decente y crecimiento económico",
        descripcion: "Promover el crecimiento económico sostenido, inclusivo y sostenible, el empleo pleno y productivo, y el trabajo decente para todos.",
        color: "from-amber-500 to-amber-600",
        bgColor: "bg-amber-50",
        borderColor: "border-amber-200"
        },
        {
        numero: 9,
        titulo: "Industria, innovación e infraestructura",
        descripcion: "Construir infraestructuras resilientes, promover la industrialización sostenible y fomentar la innovación.",
        color: "from-purple-500 to-purple-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200"
        },
        {
        numero: 10,
        titulo: "Reducción de las desigualdades",
        descripcion: "Reducir la desigualdad en y entre los países.",
        color: "from-orange-500 to-orange-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200"
        },
        {
        numero: 11,
        titulo: "Ciudades y comunidades sostenibles",
        descripcion: "Lograr que las ciudades y los asentamientos humanos sean inclusivos, seguros, resilientes y sostenibles.",
        color: "from-rose-500 to-rose-600",
        bgColor: "bg-rose-50",
        borderColor: "border-rose-200"
        },
        {
        numero: 12,
        titulo: "Producción y consumo responsables",
        descripcion: "Garantizar modalidades de consumo y producción sostenibles.",
        color: "from-indigo-500 to-indigo-600",
        bgColor: "bg-indigo-50",
        borderColor: "border-indigo-200"
        },
        {
        numero: 13,
        titulo: "Acción por el clima",
        descripcion: "Adoptar medidas urgentes para combatir el cambio climático y sus efectos.",
        color: "from-teal-500 to-teal-600",
        bgColor: "bg-teal-50",
        borderColor: "border-teal-200"
        },
        {
        numero: 14,
        titulo: "Vida submarina",
        descripcion: "Conservar y utilizar de forma sostenible los océanos, los mares y los recursos marinos.",
        color: "from-emerald-500 to-emerald-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200"
        },
        {
        numero: 15,
        titulo: "Vida de ecosistemas terrestres",
        descripcion: "Gestionar sosteniblemente los bosques, luchar contra la desertificación, detener y revertir la degradación de las tierras y frenar la pérdida de biodiversidad.",
        color: "from-blue-400 to-blue-500",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
        },
        {
        numero: 16,
        titulo: "Paz, justicia e instituciones sólidas",
        descripcion: "Promover sociedades pacíficas e inclusivas, facilitar el acceso a la justicia y construir instituciones eficaces.",
        color: "from-green-600 to-green-700",
        bgColor: "bg-green-50",
        borderColor: "border-green-200"
        },
        {
        numero: 17,
        titulo: "Alianzas para lograr los objetivos",
        descripcion: "Revitalizar la Alianza Mundial para el Desarrollo Sostenible y fortalecer los medios de implementación.",
        color: "from-slate-500 to-slate-600",
        bgColor: "bg-slate-50",
        borderColor: "border-slate-200"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 ml-72">

        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16 px-8">
            <Navbar />
            <div className="max-w-6xl mx-auto">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                Objetivos de la ONU
                </h1>
                <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                Los 17 Objetivos de Desarrollo Sostenible (ODS) constituyen un llamado universal a la acción para poner fin a la pobreza, proteger el planeta y garantizar que todas las personas gocen de paz y prosperidad para 2030.
                </p>
            </div>
            </div>
        </div>

        {/* Contenido principal */}
        <div className="max-w-7xl mx-auto px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objetivos.map((objetivo) => (
                <div
                    key={objetivo.numero}
                    className={`${objetivo.bgColor} ${objetivo.borderColor} border-2 rounded-2xl p-6 shadow-lg`}
                >
                    <div className="flex items-start space-x-4">
                        {/* Número del objetivo */}
                        <div className={`bg-gradient-to-br ${objetivo.color} text-white rounded-xl p-3 shadow-lg`}>
                            <span className="text-xl font-bold">{objetivo.numero}</span>
                        </div>
                    </div>

                    {/* Contenido */}
                    <div className="mt-4">
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                            {objetivo.titulo}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            {objetivo.descripcion}
                        </p>
                    </div>
                </div>
            ))}
            </div>

            {/* Sección informativa adicional */}
            <div className="mt-16 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-200">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Agenda 2030 para el Desarrollo Sostenible
                </h2>
                <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Adoptada por todos los Estados Miembros de las Naciones Unidas en 2015, la Agenda 2030 
                proporciona un plan compartido para la paz y la prosperidad de las personas y el planeta, 
                ahora y en el futuro. Los ODS reconocen que la erradicación de la pobreza debe ir acompañada 
                de estrategias que fomenten el crecimiento económico y aborden una serie de necesidades sociales, 
                incluidas la educación, la salud, la protección social y las oportunidades de empleo, 
                al tiempo que se lucha contra el cambio climático y se protege el medio ambiente.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default ODSPage;