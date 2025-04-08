document.addEventListener("DOMContentLoaded", function () {
    const horarioInput = document.getElementById("horario");
    const addButton = document.querySelector(".btn-primary");
    const sireneButton = document.querySelector(".btn-secondary");

    // Acionar Sirene
    sireneButton.addEventListener("click", function () {
        alert("Sirene acionada!");
    });

    // Adicionar novo horário e data
    addButton.addEventListener("click", function () {
        const horario = horarioInput.value;
        const data = dataInput.value;
        if (horario && data) {
            const formattedDate = new Date(data).toLocaleDateString("pt-BR");
            const formattedTime = new Date(`1970-01-01T${horario}`).toLocaleTimeString("pt-BR", {
                hour: "2-digit", minute: "2-digit"
            });

            const newItem = document.createElement("div");
            newItem.classList.add("schedule-item");
            newItem.innerHTML = `<span class="date-time">${formattedDate} às ${formattedTime}</span> <button class="delete"><i class="fa-solid fa-trash"></i></button>`;
            scheduleList.appendChild(newItem);
            horarioInput.value = "";
            dataInput.value = "";
        } else {
            alert("Por favor, insira uma data e um horário válidos.");
        }
    });

    // Remover horário e data
    scheduleList.addEventListener("click", function (event) {
        if (event.target.classList.contains("fa-trash")) {
            event.target.closest(".schedule-item").remove();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const modalEditar = document.getElementById('modalEditar');
    modalEditar.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;

        const horario = button.getAttribute('data-horario');
        console.log("Horário recebido:", horario);

        document.getElementById('editar-horario-antigo').value = horario;
        document.getElementById('editar-novo-horario').value = horario;
    });

    const excluirModal = document.getElementById('excluirModal');
excluirModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const horario = button.getAttribute('data-horario');
    
    document.getElementById('excluirHorarioInput').value = horario;
    document.getElementById('horarioExclusaoTexto').textContent = horario;
});
});
