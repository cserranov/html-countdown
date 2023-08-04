document.addEventListener("DOMContentLoaded", function () {
    // Establecer la fecha de finalización para la cuenta regresiva (30 de agosto a las 00:00)
    const endDate = new Date("2023-08-30T00:00:00").getTime();
  
    // Actualizar la cuenta regresiva cada segundo
    setInterval(updateCountdown, 1000);
  
    // Obtener la fecha objetivo para la cuenta regresiva (30 de agosto a las 00:00)
    const targetDate = new Date("2023-08-30T00:00:00").getTime();
  
    // Función para actualizar la visualización de la cuenta regresiva
    function updateCountdown() {
      // Obtener la fecha y hora actual
      const currentDate = new Date().getTime();
  
      // Calcular el tiempo restante hasta la fecha objetivo
      const timeRemaining = targetDate - currentDate;
  
      // Si la cuenta regresiva ha alcanzado o superado la fecha objetivo
      if (timeRemaining <= 0) {
        // Mostrar "Expirado" cuando la cuenta regresiva ha terminado
        document.getElementById("countdown").textContent = "Expirado";
      } else {
        // Calcular los días, horas, minutos y segundos restantes
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
        // Mostrar el tiempo restante en el elemento HTML con el id "countdown"
        document.getElementById("countdown").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    }
  
    // Funcionalidad para cambiar el video
    // Obtener todos los elementos de video (miniaturas)
    const videoItems = document.querySelectorAll(".video-item");
    // Obtener el contenedor de video
    const videoContainer = document.getElementById("video");
  
    // Agregar un event listener de clic a cada elemento de video
    videoItems.forEach((item) => {
      item.addEventListener("click", () => {
        // Eliminar la clase "active" de todos los elementos de video
        videoItems.forEach((item) => item.classList.remove("active"));
        // Agregar la clase "active" al elemento de video clickeado para resaltarlo
        item.classList.add("active");
        // Obtener la URL del video desde el atributo de datos "src"
        const videoSrc = item.dataset.src;
        // Actualizar la fuente del contenedor de video con la nueva URL de video
        videoContainer.src = videoSrc;
      });
    });
  });
  