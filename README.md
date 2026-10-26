# OroChat — prototipo inicial

OroChat es un prototipo de interfaz para una aplicación social multiplataforma. Está hecho con HTML, CSS y JavaScript sin dependencias externas.

## Qué funciona en esta demo
- Interfaz adaptable a móvil y computadora.
- Perfiles ficticios y cambio entre conversaciones.
- Envío local de mensajes de demostración.
- Edición de nombre y biografía guardados en el dispositivo.
- Selector de idioma con textos de interfaz iniciales en español, inglés, francés, portugués y árabe.
- Oro virtual mostrado como ilimitado para la demostración.

## Importante: qué NO está conectado todavía
Esta versión no tiene cuentas reales, mensajes entre dispositivos, verificación por teléfono/correo, base de datos en la nube, moderación central ni notificaciones. Los perfiles y mensajes son datos locales de demostración; no se envían a otros usuarios. No uses datos personales reales en la demo.

## Cómo probarlo
1. Descomprime la carpeta.
2. Abre `index.html` en un navegador moderno.
3. Para una prueba más fiable de PWA, sube la carpeta a un alojamiento estático con HTTPS (por ejemplo, GitHub Pages, Netlify o Cloudflare Pages).
4. En el teléfono, abre el enlace en Chrome/Safari y usa “Añadir a pantalla de inicio” si el navegador lo ofrece.

## Siguiente etapa para convertirlo en un servicio real
1. Crear un proyecto de backend (por ejemplo, Firebase o Supabase).
2. Añadir autenticación segura por correo y teléfono con verificación.
3. Crear tablas/colecciones para perfiles, amistades, conversaciones, mensajes y bloqueos.
4. Aplicar reglas de acceso para que solo participantes puedan leer sus conversaciones.
5. Añadir controles de abuso: bloquear/reportar, límites anti-spam, eliminación de cuenta y política de privacidad.
6. Implementar mensajes en tiempo real y notificaciones.
7. Traducir/revisar los textos con hablantes humanos; el selector actual es solo un punto de partida.
8. Publicar y probar en distintos dispositivos.

## Seguridad y diseño
- No guardar contraseñas directamente.
- No incluir claves secretas en el frontend.
- Usar HTTPS y reglas de acceso del servidor.
- Tratar el oro como una moneda virtual sin valor monetario real en esta primera versión.
- Antes de abrir al público, publicar términos de uso, política de privacidad y reglas de comunidad, y preparar un proceso de reportes y moderación.
