import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

(() => {
    'use strict'
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(tooltipTriggerEl => {
      new bootstrap.Tooltip(tooltipTriggerEl)
    })
  })()
  
const MainLayout = () =>{
const token = localStorage.getItem('token')
const navigate = useNavigate();
useEffect(()=>{
  
  if(!token) {
    navigate('/Login')
  }
},[])
    return(
        <>
  <nav className="navbar navbar-dark bg-dark" aria-label="Dark offcanvas navbar">
    <div className="container-fluid">
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="src/assets/imgs/person.png" alt="" width={"40"} height={"40"} className="rounded-circle me-2" />
        <strong>ناشناس</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a className="dropdown-item" href="#">...پست جدید</a></li>
        <li><a className="dropdown-item" href="#">تنظیمات</a></li>
        <li><a className="dropdown-item" href="#">پروفایل</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">خروج</a></li>
      </ul>
    </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDark" aria-controls="offcanvasNavbarDark">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasNavbarDark" aria-labelledby="offcanvasNavbarDarkLabel">
        <div className="offcanvas-header bg-primary bg-opacity-25 fw-bold h4">
          <img src="src/assets/imgs/logo.png" width={"70px"} alt="" />
          پنل گلخانه
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" dir="rtl" >
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
    <div className="card bg-dark text-bg-dark mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="src/assets/imgs/person.png" className="img-fluid rounded-start"  alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">ناشناس</h5>
        <p className="card-text">خوش آمدید</p>
        
             </div>
    </div>
  </div>
</div>
    </a>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
          خانه
          <i className="bi bi-house me-4" width={"18"} height={"18"}></i>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          داشبرد
          <i className="bi bi-speedometer2 text-light me-3" width={"18"} height={"18"}></i>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          سفارشات
          <i className="bi bi-cart-check me-3" width={"18"} height={"18"}></i>
        </a>
      </li>
    
   
      <li>
        <button className="btn btn-dark d-inline-flex align-items-center collapsed border-0 " data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#contents-collapse" aria-controls="contents-collapse"> دسته بندی ها <i className="bi bi-chevron-down me-3"></i></button>
        <ul className="list-unstyled ps-3 collapse" id="contents-collapse">
          <li><a className="d-inline-flex align-items-center rounded text-decoration-none opacity-75 btn btn-outline-info my-3 " href="#typography">لیست دسته  بندی ها  <i className="bi bi-list-task me-3"></i></a></li>
          <li><a className="d-inline-flex align-items-center rounded text-decoration-none opacity-75 btn btn-outline-info " href="#images">ثبت دسته بندی <i className="bi bi-node-plus me-3"></i> </a></li>
      
        </ul>
      </li>
      
    </ul>
    <hr />
    
  </div>


      </div>
    </div>
  </nav>
       {/*  <Outlet /> */}

        </>
    )
}
export default MainLayout