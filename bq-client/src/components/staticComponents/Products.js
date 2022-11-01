
function Products(props) {
    return (
        <div>
            <picture>
                <img src={props.item.image} alt={props.item.name}/>
            </picture>
            <p>{props.item.name}</p>
            <p>{props.item.price}</p>
            <div>
                <button>-</button>
                <p>0</p>
                <button>+</button>
            </div>
        </div>
    )
}

export default Products;