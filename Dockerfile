# Calculadora Taller - Dockerfile
# Imagen base con Node.js LTS
FROM node:20-alpine

# Definir directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración
COPY package*.json ./

# Instalar dependencias
RUN npm ci --only=production

# Copiar código fuente
COPY src/ ./src/

# Exponer puerto 3000 (si se necesita)
EXPOSE 3000

# Comando por defecto
CMD ["node", "src/index.js"]