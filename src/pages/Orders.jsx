import { Await, defer, useLoaderData } from "react-router-dom";
import { httpService,httpInterceptedService } from "../core/http-service";
import OrderList from "../features/orders/components/order-list";
import { Suspense } from "react";

const Orders = ()=>{
const data = useLoaderData();

    
    return(
        <>

        <h1 className="display-1 text-center">محصولات</h1>
        <hr />
        <div className="row m-0">
      <div className="col-md-12">
        <div className="d-flex align-items-center justify-content-between mb-5">
          <h5 className="display-5  ms-5 m-1 border h4 px-4 py-3 rounded border-danger shadow">  کل محصولات</h5>
          <a href="#" className="btn btn-lg btn-outline-success fw-bolder shadow p-4 me-5 m-1">
            <i className="bi bi-plus me-2"></i>افزودن محصول جدید
          </a>
        </div>
        <Suspense fallback={<p className="test-secondary display-3">...در حال دریافت داده ها</p>}>

        <Await resolve={data.orders}>
          {  
            (loadOreders) => <OrderList orders={loadOreders}/> 
          }
        </Await>
          </Suspense>
      </div>
    </div>

        </>
    );
};
//OrederLoader-------
/* 
export async function ordersLoader() {
  const response = await httpInterceptedService.get("/Course/list");
  console.log(response.data);
  return response.data;
}
*/
//defer-----
export async function ordersLoader() {
return defer({
  orders: loadOrders(),
})

}
const loadOrders = async() =>{
  const response = await httpInterceptedService.get("/Course/list");
  return response.data;
};

export default Orders