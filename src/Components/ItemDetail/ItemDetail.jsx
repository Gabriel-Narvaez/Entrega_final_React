import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <h3>ID: {id} </h3>
      <img src={img} alt={nombre} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quaerat ut libero facilis quis enim molestiae pariatur in. Quibusdam a facilis commodi error ut tempore dolor aspernatur blanditiis, ipsam reiciendis iusto dolore quis obcaecati! Minima blanditiis placeat, ad unde sit neque molestiae iure reprehenderit eveniet fugiat porro atque vero quisquam dicta tenetur ex natus at eos laborum aspernatur distinctio. Fuga minima nihil voluptates voluptatem odit enim, beatae accusantium dicta facere magni eligendi dolorum ut, aliquid quod quaerat consectetur quidem, illo totam officiis odio libero. Natus asperiores quia repellendus temporibus alias aliquam, officia, eveniet quod consequatur voluptate aspernatur numquam corporis magni!</p>

    </div>
  )
}

export default ItemDetail