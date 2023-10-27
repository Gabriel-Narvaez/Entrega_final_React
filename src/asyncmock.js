const misProductos = [
    { id: 1, nombre: "Casco Rookie Ls2", precio: "$60.000,00", img: "./img/casco.jpeg" },
    { id: 2, nombre: "Campera Ls2", precio: "$14.0000,00", img: "./img/campera.jpeg" },
    { id: 3, nombre: "Guante Ls2", precio: "$30.000,00", img: "./img/guante.jpeg" },
    { id: 4, nombre: "Traje de Lluvia Ls2", precio: "$20.000,00", img: "./img/traje.jpeg" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 500)
    })

}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 500)
    })
}