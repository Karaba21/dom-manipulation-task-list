let tasks = [
  {
    id: 0,
    owner: "Pelado Cáceres",
    name: "Wash the car",
    description: "Wash the car before crash it 💥🚗",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSynqaOG2CBeapwLA8A7W3C8kmHhNnNraWl7c2rz1eykm_dY_cjB9erHZawnIFOIo3MbcAts4L7N8W7otPrEPvFmzg9UJo7LONUpVhyPpz1gjDfbMOcetAy52k0YdDDoNaZSQ&usqp=CAc",
  },
  {
    id: 1,
    owner: "Developer #432",
    name: "Take humans out of Earth",
    description: "Looking for a new planet to destroy 🌎",
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/1020/1/213/world-of-warcraft-battle-for-azeroth-video-games-warcraft-alliance-wallpaper-thumb.jpg",
  },
  {
    id: 2,
    owner: "Another big fish",
    name: "Testing in Production",
    description: `We don't worry about testing, we test in production 🤪`,
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg",
  },
  {
    id: 3,
    owner: "The return of the Pug",
    name: "Thinking about all the mankind problems",
    description: "Eat, Sleep and wear a jedi robe in order to solve it 🐶",
    imgUrl:
      "https://w0.peakpx.com/wallpaper/381/236/HD-wallpaper-pug-dog-pet-funny-sad.jpg",
  },
  {
    id: 4,
    owner: "Mark Zuckerberg",
    name: "Destroy the entire planet earth",
    description: "Encourage people to live in a metaverse🌈",
    imgUrl: "https://pbs.twimg.com/media/Ew2_PGEWgAE3V5-.jpg",
  },
];

let currentIdNumber = tasks.length;

// 0 - Bajar repo, todos los ejercicios seran parte
// del mismo proyecto js-dom-manipulation-essentials
// Hacer una funcion que cree dinamicamente las task
function createTaskComponent(task) {
  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
      <h4>${task.name}</h4>
      <p>Owner: ${task.owner}</p>
      <p>Description: ${task.description}</p>
      <img src="${task.imgUrl}" alt="${task.name}" width="100">
  `;
  
  // Añadir evento para eliminar tarea al hacer clic
  taskItem.addEventListener('click', () => deleteTaskHandler(taskItem));
  
  return taskItem;
}

function loadTasks() {
  const taskList = document.querySelector('ul');
}

// 1 - Funcion
// Mostrar en un mensaje de alerta los valores del form
function addTaskAlert(newTask) {
  alert(`Task Name: ${newTask.name}\nTask Owner: ${newTask.owner}\nTask Description: ${newTask.description}\nTask Image URL: ${newTask.imgUrl}`);
}

// 2 - Funcion
// Agregar elemento en la lista al llenar el formulario

function addTaskHandler(event) {
  event.preventDefault();
  
  // Obtener valores del formulario
  const taskName = document.getElementById('nameInput').value;
  const taskOwner = document.getElementById('ownerInput').value;
  const taskDescription = document.getElementById('descriptionInput').value;
  const taskImgUrl = document.getElementById('imgUrlInput').value;

  // Crear objeto de la tarea
  const newTask = {
      name: taskName,
      owner: taskOwner,
      description: taskDescription,
      imgUrl: taskImgUrl
  };
  
  // 1) Mostrar alerta con los valores
  addTaskAlert(newTask);

  // Crear el componente de la tarea
  const taskItem = createTaskComponent(newTask);
  
  // Añadir tarea a la lista
  document.querySelector('ul').appendChild(taskItem);

  // Limpiar el formulario
  event.target.reset();
}

// 3 - Funcion
// Eliminar elemento en la lista al hacer click sobre el elemento
function deleteTaskHandler(taskElement) {
  taskElement.remove();
  redirectWhenNoTask(); // Verificar si no quedan tareas
}

// 4 - Funcion
// Crear un boton para vaciar/eliminar todas las tareas
function deleteAllTaskHandler() {
  const taskList = document.querySelector('ul');
  taskList.innerHTML = ''; // Eliminar todas las tareas
  redirectWhenNoTask(); // Verificar si no quedan tareas
}

// 5 - Funcion
// Si ya no quedan tareas navegar programaticamente
// a www.youtube.com
function redirectWhenNoTask() {
  const taskList = document.querySelector('ul');
  if (taskList.children.length === 0) {
      window.location.href = 'https://www.youtube.com';
  }
}

// Asociar eventos al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.main__form');
  const clearButton = document.querySelector('.clear-button');

  form.addEventListener('submit', addTaskHandler);
  clearButton.addEventListener('click', (e) => {
      e.preventDefault();
      deleteAllTaskHandler();
  });

  // Cargar las tareas previas (si es necesario)
  loadTasks();
});
