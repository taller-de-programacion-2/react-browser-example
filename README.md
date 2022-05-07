# 2 Login Connectado
* package.json: se agrega axios para el manejo de request http `npm add axios`.
* screen/Login/Login.js: se agrega mas estado para manejar errores, indicadores de actividad y almacenamiento del token de login. 
*Principios de UX*: 
    - Visibilidad del estado del sistema: esta procesando el request.
    - Prevención de errores: se deshabilitan los controles cuando se esta procesando el request, para evitar request duplicados.
* screen/Login/service.js: hace el request de login utilizando axios. 
Notar el uso de async/await + try/catch, para simplificar el encadenado de promises(la programación imperativa es un feature, es mas facil seguir los pasos en el orden de lectura). 
Notar el manejo de errores mediante exceptions.

# 1 Login Desconectado
* javascript vs nodejs: import/export
* index.js: setup de react para montar el componente del proyecto `App` sobre el nodo root de `public/index.html`
* App.js: componente raiz que representa a la applicación.
Va a ser el coordinador de las pantallas y componentes de alto nivel de la app. 
* screens/Login.js: pantalla de login, hace uso de `useState` para manejar el estado interno de la pantalla.
conecta los eventos de los distintos componentes con handlers que actualizan el estado.
Notar que los handler se puede utilizar inline.
Como validar los datos al ingreso?

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
