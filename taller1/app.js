let tasks = [];

        // Obtener elementos del DOM
        const taskInput = document.getElementById('taskInput');
        const addButton = document.getElementById('addTaskBtn');
        const taskList = document.getElementById('taskList');

        // Función para actualizar la lista de tareas en el DOM
        function updateTaskList() {
            // Limpiar la lista actual
            taskList.innerHTML = '';

            // Recorrer el arreglo de tareas y crear elementos de lista
            tasks.forEach((task, index) => {
                const li = document.createElement('li');
                li.textContent = task;

                // Crear botón de eliminar
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Eliminar';
                deleteButton.onclick = function() {
                    // Eliminar la tarea del arreglo
                    tasks.splice(index, 1);
                    // Actualizar la lista en el DOM
                    updateTaskList();
                };

                // Agregar el botón de eliminar al elemento de lista
                li.appendChild(deleteButton);
                // Agregar el elemento de lista a la lista de tareas
                taskList.appendChild(li);
            });
        }

        // Función para agregar una tarea
        function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText === '') {
                alert('Por favor, ingresa una tarea.');
                return;
            }

            // Agregar la nueva tarea al arreglo
            tasks.push(taskText);
            // Actualizar la lista en el DOM
            updateTaskList();
            // Limpiar el campo de entrada
            taskInput.value = '';
        }

        // Agregar evento al botón de agregar tarea
        addTaskBtn.addEventListener('click', addTask);

        // Permitir agregar tarea al presionar Enter
        taskInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                addTask();
            }
        });
