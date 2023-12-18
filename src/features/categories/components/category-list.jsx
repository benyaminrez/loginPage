import { Link } from "react-router-dom"

const CategoryList = ({categories:{totalRecords , data}})=>{

    return(
        <>
        <h2 className="display-2 text-center container">لیست کتگوری</h2>
        <hr />
        <br />
        <table className="table table-success table-striped container text-center  border border-success  rounded shadow" dir="rtl">
  <thead> 
    <tr>
      <th scope="col">#</th>
      <th scope="col">نام</th>
      <th scope="col">عملیات</th>

    </tr>
  </thead>
  <tbody>
   {
    data.map((category) => {
        return(
            <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td className="">
                    <Link  className="">
                    <i className="bi bi-pencil-square link-dark "></i>
                    </Link>
                    
                    <Link className="me-3">
                    <i className="bi bi-dash-square link-dark"></i>
                    </Link>
              
                </td>

            </tr>
        )
    })
   }
  </tbody>
</table>
        </>
    )
}
export default CategoryList