
# Proyecto de Creación de Podcasts

Este proyecto es una aplicación de creación de podcasts desarrollada con **Next.js**, **Convex**, **Clerk**, y **TypeScript**. La aplicación permite a los usuarios generar podcasts de manera sencilla utilizando la API de OpenAI.

## Tecnologías Utilizadas

- **Next.js**: Framework para aplicaciones web basadas en React.
- **Convex**: Plataforma de backend serverless que maneja la persistencia y la lógica de la aplicación.
- **Clerk**: Manejo de autenticación y gestión de usuarios.
- **TypeScript**: Un superset de JavaScript que añade tipos estáticos.

## Estado Actual

### Limitaciones

Actualmente, la funcionalidad de creación de podcasts está limitada debido a un **rate limit** impuesto por la API de OpenAI. Esto significa que, en este momento, no es posible generar nuevos podcasts a través de la aplicación.

### Solución

Para habilitar la creación de podcasts, necesitarás:

1. Crear una API Key en OpenAI.
2. Configurar la API Key en tu entorno para que la aplicación pueda utilizarla.

## Configuración de la API Key

Para configurar la API Key de OpenAI:

1. **Obtener API Key**: Regístrate en [OpenAI](https://platform.openai.com/signup) y obtén tu API Key.
2. **Configurar Entorno**: Agrega tu API Key en un archivo `.env` en la raíz del proyecto de la siguiente manera:

```env
OPENAI_API_KEY=tu-api-key-aqui
```

3. **Reiniciar la Aplicación**: Asegúrate de reiniciar la aplicación para que los cambios surtan efecto.

## Uso

1. Clona el repositorio.
2. Instala las dependencias utilizando `npm install` o `yarn`.
3. Configura la API Key como se describe en la sección anterior.
4. Ejecuta la aplicación con `npm run dev` o `yarn dev`.

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún problema o tienes alguna sugerencia, no dudes en abrir un issue o un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
