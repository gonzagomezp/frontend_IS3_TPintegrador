
import React from 'react';

const Info = () => {
  return (
    <div className="grid pb-40">

      <h1 className=" mt-10 flex justify-center text-2xl md:text-3xl font-medium">Trabajo Práctico Integrador</h1>
      <div className="flex justify-center  ">

        <div className="max-w-[1200px] w-full mx-4 bg-neutral-950 p-4 md:p-10 mt-10 rounded-lg">
          <h2 className="text-xl ml-2 md:ml-10">1- Lo que debe contemplar el proyecto integrador</h2>
          <ul className="grid grid-cols-1 gap-2 ml-6 mr-2 md:!mx-20 md:mt-2">
            <div></div>
            <li> • Utilizar una aplicación (desarrollo propio o de un proyecto en github) que tenga al menos un servicio de backend, otro de frontend e interacción con base(s) de datos.</li>
            <li> • La aplicación debe estar en un repositorio de Git público.</li>
            <li> • Tener la construcción de la salida automatizada, utilizando alguna de las herramientas vistas en clase (Jenkins, GitHub Actions o alguna similar).</li>
            <li> • Cada commit a master deberá construir la aplicación.</li>
            <li> • Se deberán correr los test de unidad y eventualmente recolectar y mostrar los resultados.</li>
            <li> • La salida de la construcción deberá ser una Imagen de Docker.</li>
            <li> • Esta imagen deberá ser almacenada en DockerHub.</li>
            <li> • Desplegar la aplicación (Docker) en un entorno: Puede ser Cloud (AWS, GCloud, Heroku): Esto debe estar automatizado y ser parte del pipeline como por ejemplo otro job en Jenkins o alguna herramienta de las anteriormente mencionadas.</li>
            <li> • Una vez desplegado, correr test de integración (codeceptjs). Se puede correr desde un Job o step en Jenkins.</li>
            <li> • Mostrar alguna mejora o cambio en el código que se haya realizado (en el caso de usar un proyecto de github en lugar de un desarrollo propio).</li>
            <li> • Mostrar los test cases escritos (tests de integración e2e).</li>
            <li> • Cualquier agregado y/o mejora de lo antes descrito se tendrá en consideración para la nota del mismo.</li>
          </ul>

          <h2 className="text-xl ml-2 md:ml-10 mt-4">2- Validación</h2>
          <ul className="grid grid-cols-1 gap-2 ml-6 mr-2 md:!mx-20 md:mt-2">
            <li> • Se correrán Tests de Aceptación de Usuario automatizados contra la versión de producción.</li>
            <li> • El profesor requerirá un pequeño cambio de código y se validará que la nueva versión en producción tenga dicha modificación.</li>
          </ul></div>

      </div></div>
  );
};

export default Info;
