function CartWidget() {

    return (

        <div className="d-flex">
            <a className="cart" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            <i className="fa-solid fa-cart-shopping"></i> <span className="badge bg-primary rounded-pill">5</span>
            </a>
        </div>
        

    )

}

export default CartWidget