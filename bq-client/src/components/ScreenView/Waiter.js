import Logo from "../staticComponents/Logo";
import '../Waiter.css'
import Products from "../staticComponents/Products";

function Waiter() {

    const itemProduct = {
        id: 1,
        name: 'Café Americano',
        price: '10',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwFavrjmYxmdJoWvm57Qi_MhHDqedlcT_C8A&usqp=CAU',
    } // peticiones al servidor para obtener los la lista de productos

    return (
        <section>
            <Logo className='logo' />
            <div>
                <button>Desayuno</button>
                <button>Almuerzo y Cena</button>
                <div>
                    <Products item={itemProduct} />
                </div>
            </div>
        </section>
    )
}

export default Waiter;