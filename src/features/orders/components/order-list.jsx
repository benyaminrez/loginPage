import { useLoaderData } from "react-router-dom"
import Order from "./order";

const OrderList = ({orders}) => {
    
//const loadedorders = useLoaderData();
return (
    <>
    <div className="row">
        {orders.map((course) =>(
            <div className="col-md-3" key={course.id}>
                <Order {...course}/>
            </div>
        ))}
    </div>
    </>
)

}
export default OrderList