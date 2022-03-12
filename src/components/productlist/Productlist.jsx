import "./Productlist.css"
import Product from "../product/Product"
import {products} from "../../data"
const Productlist=() => {
    return(
        <div className="p1">
            <div className="p1-text">
                <h1 className="p1-title">Create & inspire. It's Abdullah</h1>
                    <p className="p1-desc">
                        This is a creative portfolio that your work has been waiting for.
                        Beautiful websites, stunning portfolio styles & a whole lot more awaits
                        inside.
                    </p>
            </div>
            <div className="p1-list">
                {products.map((item) => (
                    <Product 
                    key = {item.id}
                    img = {item.img}
                    link = {item.link}
                    />
                ))}
            </div>
        </div>
    )
}
export default Productlist