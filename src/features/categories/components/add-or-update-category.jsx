/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useForm } from "react-hook-form"
import { httpInterceptedService } from "../../../core/http-service"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useCategoryContext } from "../category-context";
import { useEffect } from "react";


function AddOrUpdateCategory({ setShowAddCategory }) {
  
  
  
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  
  const {category , setCategory} = useCategoryContext();

  const navigate = useNavigate();
useEffect(()=>{
  if (category){
    setValue('name', category.name);
    setValue('id', category.id);
  }
},[category])
  

const close = () =>{
  setShowAddCategory(false)
  setCategory(null)
}
  const onSubmit = (data) => {
    const res = httpInterceptedService.post(`/CourseCategory/`, data);
    setShowAddCategory(false);
    toast.promise(
      res,
      {
        pending: "در حال ذخیره اطلاعات ...",
        success: {
          render() {
            const url = new URL(window.location.href);
            navigate(url.pathname + url.search);
            if(category){
              setCategory(null)
            }
            return "عملیات با موفقیت انجام شد";

          },
        },
        error: {
          render({ data }) {
            if (data.res.status === 400) {

              return ("عملیات امکان پذیر نمیباشد" + data.res.data.code);
            } else {
              return 'خطا در اجرای عملیات';
            }
          },
        },
      },
      {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: "colored",
        pauseOnFocusLoss: true,
        pauseOnHover: true
      }
    );
  };

  return (
    <>

      <div className="card container bg-dark text-light ">
        <div className="container-fluid shadow-sm py-4">


          <form  className="row d-flex justify-content-between form-floating text-center" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-6 d-flex">
              <label className="visually-hidden-focusable">...نام دسته بندی جدید</label>
                <button type="submit" className="btn btn-success shadow-lg d-flex fw-bolder" >  ذخیره <i className="bi bi-check2 h4"></i></button>
              <div className="form-control">

                <input type="text" className={`form-control  ${ errors.name  && "is-invalid"}`}
                  {...register("name", { required: true })} dir="rtl"
                  placeholder=" نام دسته بندی جدید..." />
                   </div>
                 {errors.name && errors.name.type === 'required' && (
                  <label className="text-danger mx-3 small fw-bolder d-flex text-center">نام الزامی است</label>
                )} 

            </div>



            <div className="col-md-5 d-flex justify-content-between">
              <h3 className="hide">: افزودن نام دسته بندی جدید </h3>
              <button type="button" className="btn btn-sm shadow-lg btn-outline-info ms-2 m-1 fw-bolder d-flex" onClick={()=>close()}> <i className="bi bi-x h5"></i>خروج</button>
            </div>
          </form>
        </div>
      </div>
    </>

  );
}
export default AddOrUpdateCategory