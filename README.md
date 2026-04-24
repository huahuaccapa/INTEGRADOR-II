# 🛍️ FashionStore – Sistema Web de Gestión de Ventas

## 📌 Descripción del proyecto

**FashionStore** es un prototipo de sistema web orientado a la gestión de ventas de productos de moda (ropa, calzado y accesorios).  
El sistema integra funcionalidades tanto para el **cliente (front público)** como para la **gestión interna (panel administrativo)**.

El objetivo del proyecto es demostrar la implementación de un sistema completo que permita:

- Gestión de productos
- Registro de ventas
- Control de inventario
- Reportes y dashboard
- Gestión de proveedores y órdenes de compra

---

## 🎯 Objetivos

- Desarrollar un sistema web funcional y modular
- Aplicar buenas prácticas de desarrollo frontend
- Implementar persistencia de datos mediante `localStorage`
- Simular un flujo real de negocio (ventas + abastecimiento)

---

## 🧩 Funcionalidades principales

### 🧑‍💻 Panel Administrativo

- Gestión de usuarios (admin / vendedor)
- Registro, edición y control de productos
- Activación / inactivación de productos
- Control de stock
- Registro de ventas con carrito
- Anulación de ventas (recuperación de stock)
- Dashboard con indicadores:
  - Total de ventas
  - Productos activos / inactivos
  - Stock total
  - Alertas de inventario
- Reportes:
  - Productos más vendidos
  - Métodos de pago más usados
  - Alertas de stock

---

### 🛒 Módulo de Ventas

- Carrito dinámico
- Validación de stock en tiempo real
- Cálculo automático:
  - Subtotal
  - IGV (18%)
  - Total
- Registro de venta
- Historial de ventas

---

### 🚚 Gestión de Proveedores

- Registro de proveedores
- Creación de órdenes de compra
- Órdenes con múltiples productos
- Control de facturas:
  - Pendientes
  - Pagadas
- Indicadores:
  - Total de proveedores
  - Órdenes registradas
  - Facturas pendientes
  - Alertas de stock

---

### 🌐 Front público (cliente)

- Página de inicio
- Catálogo dinámico de productos
- Filtros:
  - Categoría
  - Color
  - Talla
- Carrito persistente (localStorage)
- Simulación de compra

---

## 🏗️ Arquitectura del proyecto

```
fashionstore-prototipo/
│
├── index.html              → Panel administrativo
├── landing.html            → Página principal
├── catalogo.html           → Catálogo
├── carrito.html            → Carrito cliente
├── contacto.html           → Contacto
│
├── css/
│   ├── styles.css          → Estilos panel admin
│   └── landing.css         → Estilos frontend
│
├── js/
│   ├── app.js              → Inicialización y navegación
│   ├── auth.js             → Autenticación
│   ├── usuarios.js         → CRUD usuarios
│   ├── productos.js        → CRUD productos
│   ├── ventas.js           → Lógica de ventas
│   ├── proveedores.js      → Compras y proveedores
│   ├── dashboard.js        → Indicadores
│   ├── reportes.js         → Reportes
│   ├── catalogo.js         → Catálogo público
│   └── carrito.js          → Carrito cliente
```

---

## 💾 Persistencia de datos

El sistema utiliza:

```
localStorage
```

Para almacenar:

- Productos
- Usuarios
- Ventas
- Carrito
- Proveedores
- Órdenes de compra

---

## 👥 Integrantes del equipo

- 👨‍💻 Luis – Integración general, dashboard, autenticación
- 👩‍💻 Leydi – Front público (landing, catálogo, carrito)
- 👨‍💻 Kevin – Módulos operativos (productos, ventas, proveedores)

---

## 🔄 Flujo del sistema

```
Productos → Stock
Ventas → Reduce stock
Anulación → Recupera stock
Órdenes de compra → Aumentan stock
Dashboard → Muestra indicadores
Reportes → Analiza datos
```

---

## 🚀 Cómo ejecutar el proyecto

1. Clonar repositorio:

```bash
git clone <url-del-repositorio>
```

2. Abrir en navegador:

```
index.html
```

3. Credenciales por defecto:

```
Usuario: admin
Contraseña: 123456
```

---

## ⚠️ Limitaciones

- No usa base de datos real
- No tiene backend (solo frontend)
- Seguridad básica (no encriptación)
- No integración con APIs externas

---

## 🔥 Posibles mejoras

- Integración con backend (FastAPI / Node.js)
- Base de datos (MySQL / PostgreSQL)
- Autenticación segura (JWT)
- Reportes con gráficos (Chart.js)
- Integración con SUNAT (facturación electrónica)

---

## 📌 Conclusión

Este prototipo demuestra un sistema completo de gestión de ventas con enfoque modular, integrando:

- Operaciones comerciales
- Control de inventario
- Abastecimiento (proveedores)
- Experiencia de usuario frontend

Sirve como base para escalar hacia una solución empresarial real.