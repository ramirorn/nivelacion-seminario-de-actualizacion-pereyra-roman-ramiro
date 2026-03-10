# Nivelación Seminario de Actualización

Este proyecto contiene tres implementaciones de una aplicación web simple con caja de texto y cambio de colores.

## Estructura del Proyecto

```
📁 proyecto/
├── 📁 cliente/          # Versión HTML/JS estática
├── 📁 servidor-nodejs/  # Servidor con Express (Node.js)
└── 📁 servidor-python/  # Servidor con Flask (Python)
```

---

## 1. Cliente (HTML/JavaScript estático)

Esta versión no requiere servidor backend y se ejecuta directamente en el navegador.

### Instalación

No requiere instalación de dependencias.

### Ejecución

**Opción 1: Abrir directamente en el navegador**

1. Navegar a la carpeta `cliente/`
2. Hacer doble clic en el archivo `index.html`
3. Se abrirá automáticamente en tu navegador predeterminado

**Opción 2: Usando Live Server en VS Code**

1. Instalar la extensión "Live Server" en VS Code
2. Abrir el archivo `cliente/index.html`
3. Clic derecho → "Open with Live Server"
4. Se abrirá en `http://localhost:5500` (o el puerto configurado)

### Prueba de Funcionalidad

1. **Escribir en la caja de texto** y presionar `Enter`:
   - Debe mostrarse una alerta con el texto ingresado
   - El texto debe aparecer en el área de resultado
2. **Hacer clic en "Cambiar colores"**:
   - Primera vez: Fondo blanco, texto negro
   - Segunda vez: Fondo negro, texto blanco
   - Tercera vez: Fondo azul cielo, texto rojo
   - Se repite el ciclo

---

## 2. Servidor Node.js (Express)

Esta versión sirve la aplicación desde un servidor Express.

### Requisitos Previos

- Node.js versión 18 o superior
- npm (viene incluido con Node.js)

### Instalación

1. Abrir una terminal y navegar a la carpeta del servidor:

```powershell
cd servidor-nodejs
```

2. Instalar las dependencias:

```powershell
npm install
```

### Ejecución

**Opción 1: Modo desarrollo (con auto-recarga)**

```powershell
npm run dev
```

**Opción 2: Ejecución normal**

```powershell
node app.js
```

El servidor se iniciará en `http://localhost:3000`

### Prueba de Funcionalidad

1. Abrir el navegador en `http://localhost:3000`
2. Probar las mismas funcionalidades que en el cliente estático:
   - Escribir texto y presionar Enter
   - Cambiar colores con el botón

### Detener el Servidor

Presionar `Ctrl + C` en la terminal

---

## 3. Servidor Python (Flask)

Esta versión sirve la aplicación desde un servidor Flask.

### Requisitos Previos

- Python 3.8 o superior
- pip (gestor de paquetes de Python)

### Instalación

1. Abrir una terminal y navegar a la carpeta del servidor:

```powershell
cd servidor-python
```

2. (Recomendado) Crear un entorno virtual:

```powershell
python -m venv venv
```

3. Activar el entorno virtual:

```powershell
# Windows PowerShell
.\venv\Scripts\Activate.ps1

# Windows CMD
.\venv\Scripts\activate.bat

# Linux/Mac
source venv/bin/activate
```

4. Instalar las dependencias:

```powershell
pip install -r requirements.txt
```

### Ejecución

**Opción 1: Ejecución directa**

```powershell
python main.py
```

**Opción 2: Usando Flask CLI**

```powershell
flask run --port 5000
```

El servidor se iniciará en `http://localhost:5000`

### Prueba de Funcionalidad

1. Abrir el navegador en `http://localhost:5000`
2. Probar las mismas funcionalidades:
   - Escribir texto y presionar Enter
   - Cambiar colores con el botón

### Detener el Servidor

Presionar `Ctrl + C` en la terminal

### Desactivar el Entorno Virtual (cuando termines)

```powershell
deactivate
```

---

## Comparación de las Tres Versiones

| Característica     | Cliente Estático | Servidor Node.js | Servidor Python |
| ------------------ | ---------------- | ---------------- | --------------- |
| Puerto             | N/A              | 3000             | 5000            |
| Tecnología Backend | Ninguna          | Express.js       | Flask           |
| Requiere servidor  | No               | Sí               | Sí              |
| Dependencias       | Ninguna          | npm packages     | pip packages    |
| Complejidad        | Mínima           | Media            | Media           |

---

## Notas Adicionales

- Las tres versiones tienen la misma funcionalidad visual y de interacción
- El código JavaScript es prácticamente idéntico en todas las versiones
- La diferencia principal está en cómo se sirve el contenido HTML
- Puedes ejecutar las tres versiones simultáneamente (usan puertos diferentes)

---

## Autor

Pereyra Roman, Ramiro

## Fecha

Marzo 2026
