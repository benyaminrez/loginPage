/* eslint-disable react/react-in-jsx-scope */
import { Suspense, useState } from "react";
import { Await, defer, useLoaderData, useNavigate } from "react-router-dom"
import CategoryList from "../features/categories/components/category-list";
import { httpInterceptedService } from "../core/http-service"
import Modal from "../components/modal";
import { toast } from "react-toastify";
//import { render } from "react-dom";
import AddOrUpdateCategory from "../features/categories/components/add-or-update-category";
import { useCategoryContext } from "../features/categories/category-context";

const ProductsCategories = () => {
  const [showAddCategory , setShowAddCategory] = useState(false);
  const [showDeleteModal , setShowDeleteModal] = useState(false);
  const [selectedCategory , setSelectedCategory] = useState();

  const {category} = useCategoryContext()
  const data = useLoaderData();  
  const navigate = useNavigate();
 
  const deleteCategory = (catgoryId) => {
    setSelectedCategory(catgoryId);
    setShowDeleteModal(true);
  }
  
  const handleDeleteCategory = async () => {
    setShowDeleteModal(false);
    const res =  httpInterceptedService.delete(`/CourseCategory/${selectedCategory}`);

    toast.promise(
      res,
      {
        pending: "در حال حذف ...",
        success: {
          render() {
            const url = new URL(window.location.href);
            navigate(url.pathname + url.search);
            return "عملیات با موفقیت انجام شد";
            
          },
        },
        error: {
          render() {
            return ("عملیات امکان پذیر نمیباشد" );
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
    
  }

  
  return(
    <>
    <h1 className="display-1 text-center">محصولات</h1>
    <hr />
    <div className="row m-0">
  <div className="col-md-12">
    <div className="d-flex align-items-center justify-content-between mb-5">
      <h5 className="display-5  ms-5 m-1 border h4 px-4 py-3 rounded border-danger shadow">  کل دسته ها</h5>
      <button  className="btn btn-lg btn-outline-success fw-bolder shadow p-4 me-5 m-1" onClick={()=>setShowAddCategory(true)}>
        <i className="bi bi-plus-square me-2"></i>افزودن دسته جدید
      </button>
    </div>
   {
    (showAddCategory || category) && <AddOrUpdateCategory setShowAddCategory={setShowAddCategory}/>
   }
    <Suspense fallback={<p className="test-secondary display-3">...در حال دریافت داده ها</p>}>

    <Await resolve={data.categories}>
      {  
        (loadedCategories) => (<CategoryList deleteCategory={deleteCategory} categories={loadedCategories}/> 
    )}
    </Await>
      </Suspense>
  </div>
</div>
<Modal
 isOpen={showDeleteModal}
open={setShowDeleteModal}
 title={"حذف"}
  body={"آیا از حذف دسته اطمینان دارید؟"}>
    <button 
    type="button" 
    className="btn btn-secondary" 
    onClick={()=> setShowDeleteModal(false) }
    data-bs-dismiss="modal">
      انصراف
      </button>
        <button type="button" className="btn btn-outline-info" onClick={handleDeleteCategory}>
          حذف
          </button>
        </Modal>
    </>

       
    )
};
const loadCategories = async (request) => {
  const page = new URL(request.url).searchParams.get('page') || 1;
  const pageSize = import.meta.env.VITE_PAGE_SIZE; 
  let url = '/CourseCategory/sieve';

  url += `?page=${page}&pageSize=${pageSize}`;

  const response = await httpInterceptedService.get(url);
  return response.data;
};

export async function categoriesLoader({request}){
  return defer({
    categories: loadCategories(request)
  })
  
}
export default ProductsCategories