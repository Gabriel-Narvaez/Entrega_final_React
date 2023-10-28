const misProductos = [
    { id: "1", nombre: "Casco Rookie Ls2", stock:20, precio: 60000, img: "../img/casco.jpeg", idCat: "3", descripcion:"El Integral LS2 352 es un casco perfecto para cualquier experiencia en dos ruedas gracias a su diseño ligero, su seguridad y su alto nivel de confort. Del mismo modo, Rookie tiene una amplia gama de gráficas diseñadas para todos los gustos, para que puedas elegir el estilo que mejor se adapte a tu moto." },
    { id: "2", nombre: "Campera Ls2", stock:40, precio: 140000, img: "../img/campera.jpeg", idCat: "2", descripcion: "La nueva campera de LS2 puede llevarte a cualquier parte, desde viajes alrededordel mundo hasta el brutal Rally Dakar. Su caracter utilitario es insuperable, comenzando con su exterior de cordura resistente a la abrasion, su membrana resistente al agua y respirable garantizan un viaje comfortable y su interior termico desmontable expande su uso incluso en condiciones mas frias. Ofrece una ventilacion increible sobre sus brazos y cuerpo, que promueve activamente el flujo de aire. Con muchas opciones de almacenamiento la Gallant abre el camino para su proxima aventura, dentro y fuera de la carretera.Incluyen tecnologia de proteccion contra impactos en espalda, codos y hombros con certificacion europea EN1621-1:2012, Level 1 detalles reflectivos y sistema de acoplecon el Pantalon Chart de LS2 Cordura." },
    { id: "3", nombre: "Guante Ls2", stock:80, precio: 30000, img: "../img/guante.jpeg", idCat: "3", descripcion:"Es un guante de diseño moderno que aporta comodidad y protección al motociclista urbano. La protección en los nudillos, el slider en la palma, y la pared lateral en el dedo meñique son grandes aliados de este guante a nivel seguridad. Posee touch screen en el dedo meñique, ajuste de velcro en la muñeca y tela con spandex entre los dedos, permitiéndote que manejes tu moto con todo el confort necesario." },
    { id: "4", nombre: "Traje de Lluvia Ls2", stock:100, precio: 20000, img: "../img/traje.jpeg", idCat: "2", descripcion:"Rompe-viento, con membrana impermeable te mantendrá seco y con estilo gracias a su diseño urbano. Todos sus prints son reflectivos para hacerte visible bajo la lluvia. Cuando pare la lluvia puedes enpacarlo nuevamente." },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })

}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}