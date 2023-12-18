import { useLoaderData } from "react-router-dom";
import { httpInterceptedService } from "../../../core/http-service";

const OrderDetails = () =>{
    const data = useLoaderData()

    return (
        <>
        <h2 className="display-2 text-center">جزئیات محصول</h2>
        <hr />
        <div className="container justify-content-center d-flex">
        <div className="card bg-dark text-white">

<img src={data.coverImageUrl}className="img-overly"  alt="..."/>
<div className="card-img-overlay">
    <h3 className="card-title" dir="rtl">{data.title}</h3>
    <p dir="rtl">{data.description}</p>
    </div>
        </div>
        

        </div>
        
        <div className="row m-3 mt-5 text-center">
            <div className="col-md-3">
                <div className="card text-dark bg-light mb-3">
  <div className="card-header">عمر گل</div>
  <div className="card-body">
    <h5 className="card-title">{data.duration + " ساعت"}</h5>
   
  </div>
</div>
</div>
            <div className="col-md-3">
            <div className="card text-dark bg-light mb-3">
  <div className="card-header">میانگین نظرات</div>
  <div className="card-body">
    <h5 className="card-title">{data.averageReviewRating + " از 5"}</h5>
   
  </div>
</div>
            </div>
            <div className="col-md-3">
            <div className="card text-dark bg-light mb-3">
  <div className="card-header">تعداد نظرات</div>
  <div className="card-body">
    <h5 className="card-title">{data.numOfReviews + " نظر"}</h5>
   
  </div>
</div>
            </div>
            <div className="col-md-3">
            <div className="card text-dark bg-light mb-3">
  <div className="card-header">تعداد فروش</div>
  <div className="card-body">
    <h5 className="card-title">{data.numOfLectures + " فروش"}</h5>
   
  </div>
</div>
            </div>
        </div>
        </>
    )
}

export async function  orderDetailsLoader({params}){
const response = await httpInterceptedService.get(`/Course/by-id/${params.id}`)
return response.data;
}

export default OrderDetails;