import logo from "../../../assets/imgs/logo.png" 
import { Link, redirect, useNavigation, useRouteError, useSubmit } from "react-router-dom";
import { useForm } from "react-hook-form";
import { httpService } from "../../../core/http-service";
const Login = () => {

    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();

    const submitForm = useSubmit();
    const onSubmit = data =>{
      submitForm(data, {method: 'post'})
    };
    const navigation = useNavigation();
    const isSubmitting = navigation.state !== 'idle';
    const routeErrors = useRouteError();
  return (
    <>
      <div className="text-center mt-4">
        <img src={logo} style={{ height: "100px" }} />
        <h1 className="h2 text-success my-3">ورود به <span className="text-danger">گلستان</span></h1>
       {/*  <p className="lead">
          جهت ورود لازم است از طریق موبایل و رمز عبور خود اقدام کنید
        </p> */}
      </div>

      <div className="card">
        <div className="card-body shadow">
          <div className="m-sm-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">موبایل</label>
                <input
                {...register("mobile", {
                    required: "موبایل الزامی است",
                    minLength: 11,
                    maxLength: 11
                  })}
                  className={`form-control form-control-lg ${
                    errors.mobile && "is-invalid"
                  }`}
                />
                {errors.mobile && errors.mobile.type === "required" && (
                  <p className="text-danger small fw-bolder mt-1">
                    {errors.mobile?.message}
                  </p>
                )}
                {errors.mobile && (errors.mobile.type === "minLength" || errors.mobile.type === 'maxLength') && (
                  <p className="text-danger small fw-bolder mt-1">
                  موبایل باید 11 رقم باشد
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">رمز عبور</label>
                <input
                  {...register("password", { required: "رمز عبور الزامی است" })}
                  className={`form-control form-control-lg ${
                    errors.password && "is-invalid"
                  }`}
                  type="password"
                />
                {errors.password && (
                  <p className="text-danger small fw-bolder mt-1">
                    {errors.password?.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                
              </div>
              <div className="text-center mt-3">
                <button disabled={isSubmitting} type="submit" className="btn btn-lg btn-success">
                 {isSubmitting ? 'در حال ورود' : 'ثبت نام کنید'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        <p className="lead text-center m-4 card p-3 bg-light fs-bold">
          قبلا ثبت نام نکرده اید؟
          <Link to="/register" className="me-2 text-success">ثبت نام کنید </Link>
        </p>
        {
                routeErrors && (
                  <div className="alert alert-danger text-danger p-2 mt-3">{
                    routeErrors.response?.data.map(error => <p className="mb-0">{error.description}</p>)
                  }</div>
                )
              }
    </>
  );
};

export async function loginAction({request}){
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await httpService.post('Users/login' , data);
if (response.status === 200 ) {
  localStorage.setItem('token' , response?.data.token)
  return redirect('/')
}
}
export default Login;
