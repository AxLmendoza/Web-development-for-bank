app.post("/login", async (req, res) => {
    const { matricula, password } = req.body;
    
    // Llamar a la API del sistema de la universidad
    const response = await fetch("https://siut.uttecam.edu.mx/api/auth", {
        method: "POST",
        body: JSON.stringify({ matricula, password }),
        headers: { "Content-Type": "application/json" }
    });

    const data = await response.json();
    if (!data.success) return res.status(401).json({ message: "Credenciales inválidas" });

    res.json({ token: data.token }); // Guardar token para mantener sesión activa
});