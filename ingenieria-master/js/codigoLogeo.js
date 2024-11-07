document.addEventListener("DOMContentLoaded", () => {
    localStorage.clear();

    const usuarios = [
        {
            "nombre": "Nereo",
            "tipo": "Coordinador",
            "password": "1",
            "zona": "San Miguel",
            "iniciado": "No"
        },
        {
            "nombre": "Naza",
            "tipo": "Coordinador",
            "password": "2",
            "zona": "Muñiz",
            "iniciado": "No"
        },
        {
            "nombre": "Naim",
            "tipo": "Paciente",
            "password": "1",
            "atendido": ["Larcade", "Militar"],
            "iniciado": "No"
        },
        {
            "nombre": "Juan",
            "tipo": "Paciente",
            "password": "1",
            "atendido": ["Bessone", "Militar"],
            "iniciado": "No"
        }
    ];
    
    localStorage.setItem("users", JSON.stringify(usuarios));

    const logForm = document.getElementById("login-form");
    logForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const userFound = existeUsuario(usuarios);

        if (userFound) {
            localStorage.setItem("usuarioLogueado", userFound.nombre);
            if (userFound.tipo === "Coordinador") {
                const usersActual = JSON.parse(localStorage.getItem("users"));

                const sameUser = usersActual.find(user => user.nombre === userFound.nombre);
                sameUser.iniciado = "Si";

                localStorage.setItem("users", JSON.stringify(usersActual));

                window.location.href = "indexCor.html";
            }
            if (userFound.tipo === "Paciente") {
                const usersActual = JSON.parse(localStorage.getItem("users"));

                const sameUser = usersActual.find(user => user.nombre === userFound.nombre);
                sameUser.iniciado = "Si";

                localStorage.setItem("users", JSON.stringify(usersActual));

                window.location.href = "indexPac.html";
            }
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });

    function existeUsuario(usuarios) {
        const username = document.querySelector("#username").value;
        const pass = document.querySelector("#password").value;

        const userFound = usuarios.find(user => user.nombre === username && user.password === pass);

        return userFound;
    }
});