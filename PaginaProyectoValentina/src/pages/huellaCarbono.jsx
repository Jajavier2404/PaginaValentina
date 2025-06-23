import React, { useState } from 'react';
import { Calculator, Zap, Car, Home, Plane, Leaf, RotateCcw } from 'lucide-react';
import Navbar from "../components/navbar"

const CarbonFootprintCalculator = () => {
    const [activities, setActivities] = useState({
        electricity: 0,    // kWh por mes
        transport: 0,      // km por mes en auto
        flights: 0,        // horas de vuelo por año
        heating: 0         // m³ de gas por mes
    });

    const [result, setResult] = useState(null);

    // Factores de emisión simplificados (kg CO₂e)
    const emissionFactors = {
        electricity: 0.233,  // kg CO₂e por kWh
        transport: 0.21,     // kg CO₂e por km
        flights: 90,         // kg CO₂e por hora de vuelo
        heating: 2.0         // kg CO₂e por m³ de gas
    };

    const handleInputChange = (activity, value) => {
        setActivities(prev => ({
        ...prev,
        [activity]: parseFloat(value) || 0
        }));
    };

    const calculateFootprint = () => {
        const monthlyElectricity = activities.electricity * emissionFactors.electricity;
        const monthlyTransport = activities.transport * emissionFactors.transport;
        const monthlyFlights = (activities.flights * emissionFactors.flights) / 12; // Anual a mensual
        const monthlyHeating = activities.heating * emissionFactors.heating;

        const totalMonthly = monthlyElectricity + monthlyTransport + monthlyFlights + monthlyHeating;
        const totalAnnual = totalMonthly * 12;

        setResult({
        monthly: totalMonthly,
        annual: totalAnnual,
        breakdown: {
            electricity: monthlyElectricity,
            transport: monthlyTransport,
            flights: monthlyFlights,
            heating: monthlyHeating
        }
        });
    };

    const resetForm = () => {
        setActivities({
        electricity: 0,
        transport: 0,
        flights: 0,
        heating: 0
        });
        setResult(null);
    };

    const getImpactLevel = (annual) => {
        if (annual < 2000) return { level: 'Bajo', color: 'text-emerald-500', bg: 'bg-emerald-500/10' };
        if (annual < 5000) return { level: 'Moderado', color: 'text-yellow-500', bg: 'bg-yellow-500/10' };
        return { level: 'Alto', color: 'text-red-500', bg: 'bg-red-500/10' };
    };

    const impact = result ? getImpactLevel(result.annual) : null;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 ml-72">
            <Navbar />

        {/* Efecto de textura de fondo */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIiBmaWxsPSJyZ2JhKDE2LCAxODUsIDEyOSwgMC4wNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative z-10 p-8">
            {/* Header */}
            <div className="mb-12">
                <div className="flex flex-col items-center mb-10 mt-5">   
                    <h1 className="text-4xl font-bold text-gray-800 text-center">Calculadora de Huella de Carbono</h1>
                    <p className="text-gray-600 text-lg mt-2 text-center">Descubre tu impacto ambiental de forma sencilla</p>
                </div>
                {/* Fórmula */}
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-emerald-200/50 shadow-sm flex flex-col items-center justify-center">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">Fórmula aplicada:</h3>
                    <p className="text-emerald-700 font-mono text-lg text-center">
                        <strong>Huella de Carbono (kg CO₂e) = Σ(Actividad × Factor de Emisión)</strong>
                    </p>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
            {/* Formulario */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-emerald-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Leaf className="h-6 w-6 text-emerald-600 mr-3" />
                Ingresa tus datos
                </h2>

                <div className="space-y-6">
                {/* Electricidad */}
                <div className="group">
                    <label className="flex items-center text-gray-700 font-medium mb-3">
                    <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                    Consumo eléctrico mensual (kWh)
                    </label>
                    <input
                    type="number"
                    min="0"
                    value={activities.electricity}
                    onChange={(e) => handleInputChange('electricity', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 group-hover:border-emerald-300"
                    placeholder="Ej: 300"
                    />
                </div>

                {/* Transporte */}
                <div className="group">
                    <label className="flex items-center text-gray-700 font-medium mb-3">
                    <Car className="h-5 w-5 text-blue-500 mr-2" />
                    Kilómetros en auto por mes
                    </label>
                    <input
                    type="number"
                    min="0"
                    value={activities.transport}
                    onChange={(e) => handleInputChange('transport', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 group-hover:border-emerald-300"
                    placeholder="Ej: 800"
                    />
                </div>

                {/* Vuelos */}
                <div className="group">
                    <label className="flex items-center text-gray-700 font-medium mb-3">
                    <Plane className="h-5 w-5 text-indigo-500 mr-2" />
                    Horas de vuelo al año
                    </label>
                    <input
                    type="number"
                    min="0"
                    value={activities.flights}
                    onChange={(e) => handleInputChange('flights', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 group-hover:border-emerald-300"
                    placeholder="Ej: 10"
                    />
                </div>

                {/* Calefacción */}
                <div className="group">
                    <label className="flex items-center text-gray-700 font-medium mb-3">
                    <Home className="h-5 w-5 text-orange-500 mr-2" />
                    Gas para calefacción mensual (m³)
                    </label>
                    <input
                    type="number"
                    min="0"
                    value={activities.heating}
                    onChange={(e) => handleInputChange('heating', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 group-hover:border-emerald-300"
                    placeholder="Ej: 50"
                    />
                </div>
                </div>

                {/* Botones */}
                <div className="flex space-x-4 mt-8">
                <button
                    onClick={calculateFootprint}
                    className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
                >
                    Calcular Huella
                </button>
                <button
                    onClick={resetForm}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200 flex items-center"
                >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Limpiar
                </button>
                </div>
            </div>

            {/* Resultados */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-emerald-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Resultados</h2>

                {result ? (
                <div className="space-y-6">
                    {/* Resultado principal */}
                    <div className={`p-6 rounded-xl ${impact?.bg} border-2 border-emerald-200/50`}>
                    <div className="text-center">
                        <p className="text-gray-600 mb-2">Tu huella de carbono anual es:</p>
                        <p className="text-4xl font-bold text-gray-800">
                        {result.annual.toLocaleString('es-ES', { maximumFractionDigits: 0 })}
                        </p>
                        <p className="text-gray-500 text-sm">kg CO₂e por año</p>
                        <div className={`mt-3 inline-block px-4 py-2 rounded-full ${impact?.bg}`}>
                        <span className={`font-medium ${impact?.color}`}>
                            Impacto {impact?.level}
                        </span>
                        </div>
                    </div>
                    </div>

                    {/* Desglose mensual */}
                    <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-700 mb-4">Desglose mensual (kg CO₂e):</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex justify-between">
                        <span className="text-gray-600">Electricidad:</span>
                        <span className="font-medium">{result.breakdown.electricity.toFixed(1)}</span>
                        </div>
                        <div className="flex justify-between">
                        <span className="text-gray-600">Transporte:</span>
                        <span className="font-medium">{result.breakdown.transport.toFixed(1)}</span>
                        </div>
                        <div className="flex justify-between">
                        <span className="text-gray-600">Vuelos:</span>
                        <span className="font-medium">{result.breakdown.flights.toFixed(1)}</span>
                        </div>
                        <div className="flex justify-between">
                        <span className="text-gray-600">Calefacción:</span>
                        <span className="font-medium">{result.breakdown.heating.toFixed(1)}</span>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 mt-4 pt-4">
                        <div className="flex justify-between font-semibold">
                        <span>Total mensual:</span>
                        <span>{result.monthly.toFixed(1)} kg CO₂e</span>
                        </div>
                    </div>
                    </div>
                </div>
                ) : (
                <div className="text-center py-12">
                    <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                    <Calculator className="h-8 w-8 text-gray-400" />
                    </div>
                    <p className="text-gray-500 text-lg">Ingresa tus datos para calcular tu huella de carbono</p>
                    <p className="text-gray-400 text-sm mt-2">Los resultados aparecerán aquí</p>
                </div>
                )}
            </div>
            </div>
        </div>
        </div>
    );
};

export default CarbonFootprintCalculator;