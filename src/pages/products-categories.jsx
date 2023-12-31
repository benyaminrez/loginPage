import { Await, defer, useLoaderData } from "react-router-dom"
import { httpInterceptedService } from "../core/http-service"
import CategoryList from "../features/categories/components/category-list";
import { Suspense } from "react";

const ProductsCategories =()=>{
  
  const data = useLoaderData();
  return(
    <>
    <h1 className="display-1 text-center">محصولات</h1>
    <hr />
    <div className="row m-0">
  <div className="col-md-12">
    <div className="d-flex align-items-center justify-content-between mb-5">
      <h5 className="display-5  ms-5 m-1 border h4 px-4 py-3 rounded border-danger shadow">  کل دسته ها</h5>
      <a href="#" className="btn btn-lg btn-outline-success fw-bolder shadow p-4 me-5 m-1">
        <i className="bi bi-plus-square me-2"></i>افزودن دسته جدید
      </a>
    </div>
    <Suspense fallback={<p className="test-secondary display-3">...در حال دریافت داده ها</p>}>

    <Await resolve={data.categories}>
      {  
        (loadedCategories) => <CategoryList categories={loadedCategories}/> 
    }
    </Await>
      </Suspense>
  </div>
</div>

    </>

       
    )
};
const loadCategories = async (request) => {
  const page = new URL(request.url).searchParams.get('page') || 1;
  const pageSize = 10;
  let url = '/CourseCategory/sieve';

  url += `?page=${page}&pageSize=${pageSize}`;

  const response = await httpInterceptedService.get(url);
  return response.data;
};

// eslint-disable-next-line react-refresh/only-export-components
export async function categoriesLoader({request}){
  return defer({
    categories: loadCategories(request)
  })
  
}
export default ProductsCategories