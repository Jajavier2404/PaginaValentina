import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // The 'error' state is kept, but it will only be used for empty fields
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(""); // Clear any previous errors

        // Still check for empty fields to provide user feedback
        if (username.trim() === "" || password.trim() === "") {
        setError("Por favor, ingresa tu usuario y contraseña.");
            return; // Stop the function if fields are empty
        }
        fetch("http://localhost:4000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
        .then(async (res) => {
            const data = await res.json();
            
            if (!res.ok) {
                throw new Error(data.message || "Error al registrar usuario");
            }

            console.log("Respuesta del servidor:", data);
            navigate("/pagina1");
        })
        .catch((error) => {
            console.error("Error al registrar usuario:", error);
            setError(error.message); // ⬅️ Mostrar error al usuario
        });

    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl p-10 w-full max-w-md transform transition-all duration-500 hover:scale-105">
            <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
            Bienvenido
            </h2>
            <p className="text-center text-gray-600 mb-8">
            Inicia sesión para acceder a tu cuenta
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="username" className="sr-only">
                Usuario
                </label>
                <input
                type="text"
                id="username"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 transition duration-200 text-lg"
                aria-label="Campo de usuario"
                />
            </div>

            <div>
                <label htmlFor="password" className="sr-only">
                Contraseña
                </label>
                <input
                type="password"
                id="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 transition duration-200 text-lg"
                aria-label="Campo de contraseña"
                />
            </div>

            {error && (
                <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
                >
                <span className="block sm:inline">{error}</span>
                </div>
            )}

            <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-4 rounded-lg hover:from-emerald-700 hover:to-teal-800 transition duration-300 font-bold text-xl shadow-lg transform hover:-translate-y-1"
            >
                Ingresar
            </button>
            </form>

            

            
        </div>
        </div>
    );
}