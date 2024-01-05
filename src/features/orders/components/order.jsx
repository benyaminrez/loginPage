import { Link } from "react-router-dom"

const Order = ({id,title, coverImageUrl, courseLevel,description, duration, numOfReviews} )=>{

    return(<>
   
   <div className="card shadow-sm">
   <img src={coverImageUrl} alt="" className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <Link to={`/courses/${id}`} className="btn btn-primary">`${numOfReviews} سفارشات`</Link>
  </div>
</div>
       
   
    </>)
}
export default Order