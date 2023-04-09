function CartItems(props){

    return (

        <div className="collapse" id="collapseExample">
            <div className="card">
                <h5>{props.titulo}</h5>
                <ul className="list-group">
                    <li className="list-group-item">Articulo 1 - $ 100</li>
                    <li className="list-group-item">Articulo 2 - $ 100</li>
                    <li className="list-group-item">Articulo 3 - $ 100</li>
                    <li className="list-group-item">Articulo 4 - $ 100</li>
                    <li className="list-group-item">Articulo 5 - $ 100</li>
                </ul>
            </div>
        </div>

    )

}

export default CartItems