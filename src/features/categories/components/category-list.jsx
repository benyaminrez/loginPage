/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useNavigation } from "react-router";

import { Link,  } from "react-router-dom"
import Pagination from "../../../components/pagination"
import Spinner from "../../../components/spinner";
import { memo } from "react";


const CategoryList = memo(({ categories:  { data, totalRecords },
deleteCategory }) => {
    const navigation = useNavigation();
    /*const navigation = useNavigation();*/
 return (
    <>
        <h2 className="display-2 text-center container">لیست کتگوری</h2>
        <hr />
        <br />
        {navigation.state !== "idle" && <Spinner/>}
        <table className="table table-success table-striped container text-center  border border-success  rounded shadow" dir="rtl">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">نام</th>
                    <th scope="col">عملیات</th>

                </tr>
            </thead>
            <tbody>
                {data.map((category) => {
                    return (
                    <>
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td>
                                <Link className="">
                                    <i className="bi bi-pencil-square link-dark "></i>
                                </Link>

                                <Link className="me-3" onClick={()=> deleteCategory(category.id)}>
                                    <i className="bi bi-dash-square link-dark"></i>
                                </Link>

                            </td>

                        </tr>
                    </>
                    );
                })}
            </tbody>
        </table>
        <div className="nav justify-content-center border-bottom pb-3 mb-3">
            <Pagination totalRecords={totalRecords} />
        </div>
    </>
);
});
export default CategoryList
