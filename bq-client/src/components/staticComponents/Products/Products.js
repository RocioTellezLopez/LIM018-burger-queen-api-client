import './style.css';

function Products(props) {
    return (
        <div className="product"  id={props.item.id}>
            <picture>
                <img src={props.item.image} alt={props.item.name}/>
            </picture>
            <p>{props.item.name}</p>
            <p>$ {props.item.price}</p>
            <div className="box-product-button">
                <button>-</button>
                <p>0</p>
                <button>+</button>
            </div>
        </div>
    )
}

export default Products;