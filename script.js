
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    var targetElement = event.target;

    
    if (targetElement.classList.contains('Marco_1') || targetElement.classList.contains('Marco_2') || targetElement.classList.contains('Marco_3')) {
        targetElement.appendChild(draggedElement);
    }
}

function agregarTarea() {

    var nuevaTarea = document.createElement("div");
    nuevaTarea.className = "Tarea Lista_item";
    nuevaTarea.draggable = true;
    nuevaTarea.id = "taskItem" + Date.now();  

    var contenidoTarea = prompt("Ingresa el contenido de la tarea:");

    nuevaTarea.innerHTML = "<p>" + (contenidoTarea || "Nueva Tarea") + "</p>";

    nuevaTarea.addEventListener("dragstart", drag);

    var primerMarco = document.querySelector('.Marco_1');
    primerMarco.appendChild(nuevaTarea);
}