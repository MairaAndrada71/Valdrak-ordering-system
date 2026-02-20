# Ordering System

Este proyecto comenzó como una práctica simple para conectar un frontend con un backend usando JavaScript y Node.js. La idea inicial era poder enviar pedidos desde una interfaz básica y recibirlos en el servidor.

A medida que fue avanzando el desarrollo, decidí enfocarlo en un escenario más realista de restaurante, donde las comandas se envían directamente a cocina, sin intermediarios y con la menor cantidad de pasos posibles.

Al principio el sistema incluía nombre de cliente y una lógica más general, pero con el tiempo lo fui reformando para mejorar la claridad y la performance. Eliminé datos innecesarios y dejé únicamente el número de mesa, ya que en cocina es la información más importante y reduce errores.

También adapté la estructura del pedido para permitir cantidades de comida y bebida, lo que hizo el sistema más flexible y más cercano a un uso real.

En el backend me enfoqué en que las rutas fueran simples y rápidas. El servidor recibe, valida y guarda las órdenes en memoria, evitando procesamiento extra. Los pedidos se ordenan por tiempo y se pueden actualizar por estado sin reenviar toda la información, lo que mejora el rendimiento general.

En el frontend prioricé una interacción rápida. El formulario envía solo los datos necesarios, se evita recargar la página y la cocina recibe los pedidos de forma clara y ordenada. Las funciones están pensadas para hacer una sola cosa y hacerla bien, manteniendo el código fácil de leer y de mantener.

Este proyecto me permitió entender mejor cómo diseñar el flujo completo de una aplicación, tomar decisiones pensando en rendimiento y adaptar el código a medida que el sistema crecía, siempre buscando una solución más simple y eficiente.
