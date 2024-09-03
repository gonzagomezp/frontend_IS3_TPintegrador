# Usa una imagen base de Node.js con la versión 19
FROM node:19-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Expone el puerto que utiliza la aplicación
EXPOSE 3000

# Configura la variable de entorno para producción
ENV NODE_ENV=production

# Comando para ejecutar la aplicación en modo producción
CMD ["npm", "run", "start"]
