import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <>
        <div className="container justify-content-center d-flex position-relative">
            
        <h1 className=" position-fixed text-center">صفحه مورد نظر شما یافت نشد</h1>
        <img src="public/Artboard 1.png" alt="Not Found" className=" w-100 h-100 mt-3" />
        <Link className="btn btn-outline-success position-fixed mb-4 bottom-0 start-50 translate-middle-x"
        to={"/Login"} 
        > بازگشت به صفحه ی اصلی</Link>
        </div>
        
        
        </>
    )
}
export default NotFound