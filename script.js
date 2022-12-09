const productos =
    [
        {
            id: 1,
            nombre: "Jeans Mom",
            tipo: "Mom",
            precio: 8000,
            cantidad: 0
        },

        {
            id: 2,
            nombre: "Short de Jean",
            tipo: "Jean",
            precio: 6000,
            cantidad: 0
        },

        {
            id: 3,
            nombre: "Camisa Estampada",
            tipo: "Estampada",
            precio: 7000,
            cantidad: 0
        },

        {
            id: 4,
            nombre: "Camisa Lisa",
            tipo: "Lisa",
            precio: 6500,
            cantidad: 0
        },

        {
            id: 5,
            nombre: "Remera Estampada",
            tipo: "Estampada",
            precio: 3500,
            cantidad: 0
        },

        {
            id: 6,
            nombre: "Remera Lisa",
            tipo: "Lisa",
            precio: 3000,
            cantidad: 0
        },

        {
            id: 7,
            nombre: "Buzo Estampado",
            tipo: "Estampado",
            precio: 7500,
            cantidad: 0
        },

        {
            id: 8,
            nombre: "Buzo Liso",
            tipo: "Liso",
            precio: 7000,
            cantidad: 0
        }
    ]

const carrito = [];

const ordenarMenorMayor = () => {
    productos.sort((a, b) => a.precio - b.precio)
    mostrarListaOrdenada()
}

const ordenarMayorMenor = () => {
    productos.sort((a, b) => b.precio - a.precio)
    mostrarListaOrdenada()
}

const mostrarListaOrdenada = () => {
    const listaOrdenada = productos.map(producto => {
        return '- ' + producto.nombre + ' $' + producto.precio
    });
    alert('Lista de precios:' + '\n\n' + listaOrdenada.join('\n'))
    comprarProductos(listaOrdenada)
};

const comprarProductos = (listaDeProductos) => {
    let otroProducto = false;
    let productoNombre = '';
    let productoCantidad = 0;

    do {
        productoNombre = prompt('¿Que producto desea comprar?' + '\n\n' + listaDeProductos.join('\n'));
        productoCantidad = parseInt(prompt('Escriba la cantidad'));
        if (Number.isNaN(productoCantidad) || productoCantidad === 0) {
            if (productoCantidad !== 0) {
                alert('Debe agregar un número.')
                mostrarListaOrdenada()
            } else {
                alert('Debe agregar la cantidad de productos.')
                mostrarListaOrdenada()
            }
            return productoCantidad;
        }
        else {
            const producto = productos.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase())
            if (producto) {
                agregarAlCarrito(producto, producto.id, productoCantidad)
            } else {
                alert('El producto no se encuentra en el catálogo')
            }

            otroProducto = confirm('¿Desea agregar otro producto?')
        }


    } while (otroProducto);
    confirmarCompra();
};

const agregarAlCarrito = (producto, productoId, productoCantidad) => {
    const productoRepetido = carrito.find(producto => producto.id === productoId);
    if (productoRepetido) {
        productoRepetido.cantidad += productoCantidad
    } else {
        producto.cantidad += productoCantidad
        carrito.push(producto)
    }
};

const eliminarProductoCarrito = (productoNombre) => {
    carrito.forEach((producto, posicion) => {
        if (producto.nombre.toLowerCase() === productoNombre.toLowerCase()) {
            if (producto.cantidad > 1) {
                producto.cantidad--
            } else {
                carrito.splice(posicion, 1)
            }
        }
    })
    confirmarCompra()
};

const confirmarCompra = () => {
    const listaProductos = carrito.map(producto => {
        return '- ' + producto.nombre + ' | Cantidad: ' + producto.cantidad
    });

    const confirmar = confirm('Gracias por su compra! '
        + '\n\n' + listaProductos.join('\n')
        + '\n\nPara terminar presione "Aceptar" sino "Cancelar" para eliminar productos del carrito'
    );

    if (confirmar) {
        finalizarCompra(listaProductos)
    } else {
        const productoAEliminar = prompt('Ingrese el nombre del producto a eliminar:')
        eliminarProductoCarrito(productoAEliminar)
    }
};



const finalizarCompra = (listaProductos) => {
    const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0)
    const precioTotal = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)
    listaProductos = 0
    cantidadTotal = 0
    precioTotal = 0
}

const comprar = () => {
    const productosBaratos = confirm('Para comenzar, ¿deseas ver la Lista de Productos odenada por precio de menor a mayor?');

    if (productosBaratos) {
        ordenarMenorMayor();
    } else {
        ordenarMayorMenor();
    }
};

comprar();