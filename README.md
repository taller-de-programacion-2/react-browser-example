# 5 Reducer
* screens/Login.js: ahora con useReducers.

# 4 Routes & Context
* package.json: `npm add react-router-dom`
* contexts/auth: define un contexto de react para manejar la autenticacion y mostrar contenido en base al estado de autenticación.
* App.js: utiliza router para navegar entre Home.js y About.js
* components/Listing: se extraer el componente para listar items. Tener en cuenta, es simplemente un ejemplo, no es la unica forma de hacerlo. 

# 3 Local Storage & Use Effect
* App.js: useEffect para recuperar el token de session guardado en LocalStoraged. Si tiene el token muestra un componente, sino muestra el Login.
useState ahora el token se guarda aqui.
* screens/Home/Home.js: useEffect para recuperar el listado de usuarios cuando se monta el componente.
* LocalStorage: chrome/application/localstorage, es un key-value store de strings.
* can't update unmounted component: se esta modificando el estado de un componente que ya no se pinta. 
¿Cual? ¿Como lo corregimos?
* useEffect: 
 - unmount hook, se usa para limpieza cuando el componente se desmonta.
 - condicional, podemos ejecutar el hook cada vez que cambie el valor de un state.
 

# 2 Login Connectado
* agregar .env con la siguiente envvar:
  REACT_APP_API_URL=https://reqres.in
  Para probar login usar este usuario y pass:
   * "email": "eve.holt@reqres.in"
   * "password": "pistol"
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
