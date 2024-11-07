console.log(JSON.parse(localStorage.getItem("users")));
        const users = JSON.parse(localStorage.getItem("users"));

        const logged = users.find(user => user.iniciado === "Si");
        const links = document.querySelectorAll("a");
        links.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const zonaClickeada = link.textContent;
                if (logged.zona != zonaClickeada) {
                    alert("Esta Zona no le corresponde");
                }
                else {
                    window.location.href = link.getAttribute("href");
                }
            })
        });