import logo from "../../../assets/imgs/logo.png" 
import { useForm } from "react-hook-form";
import { Link, redirect, useActionData, Form ,useNavigation, useSubmit, useNavigate,useRouteError } from "react-router-dom";
import { httpService } from "../../../core/http-service";
import { useEffect } from "react";
const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const submitForm = useSubmit();

  const onSubmit = (data) => {
    const {confirmPassword, ...userData}=data;
  submitForm(userData , {method: 'post'})
  }
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== 'idle';
  const isSuccessOperatin = useActionData();

  const navigate = useNavigate();

  const routeErrors = useRouteError();
  useEffect(() =>{
    if (isSuccessOperatin) {{
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }}
  }, [isSuccessOperatin])

  return (
    <>
      <div className="text-center">
        <img src={logo} style={{ height: "100px" }} className="mt-3"/>
        <h1 className="h2 text-success my-3">عضویت در <span className="text-danger">گلستان</span></h1>
        <div className="card px-3 py-1">

        <p className="lead d-flex ">
          جهت استفاده از ویژگی های سایت گلستان ثبت نام کنید
        </p>
        <p className="lead fs-bold">
          قبلا ثبت نام کرده اید؟
          <Link to="/login" className="me-2 text-success">
            وارد شوید{" "}
          </Link>
        </p>
        </div>
      </div>

      <div className="card shadow">
        <div className="card-body">
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
                <label className="form-label">تکرار رمز عبور</label>
                <input
                  {...register("confirmPassword", {
                    required: "تکرار رمز عبور الزامی است",
                    validate: (value) => {
                      if (watch("password") !== value) {
                        return "عدم تطابق با رمز عبور وارد شده";
                      }
                    },
                  })}
                  className={`form-control form-control-lg ${
                    errors.confirmPassword && "is-invalid"
                  }`}
                  type="password"
                />
                {errors.confirmPassword &&
                  errors.confirmPassword.type === "required" && (
                    <p className="text-danger small fw-bolder mt-1">
                      {errors.confirmPassword?.message}
                    </p>
                  )}
                {errors.confirmPassword &&
                  errors.confirmPassword.type === "validate" && (
                    <p className="text-danger small fw-bolder mt-1">
                      {errors.confirmPassword?.message}
                    </p>
                  )}
              </div>
              <div className="text-center mt-3">
                <button type="submit" disabled={isSubmitting} className="btn btn-lg btn-outline-success">
                  {isSubmitting ? '...در حال انجام عملیات' : 'ثبت نام کنید'}
                </button>
              {
                isSuccessOperatin && 
                <div className="alert alert-success text-success p-2 mt-3">
                  عملیات با موفقیت انجام شد به صفحه ی ورود منتقل می شوید
                </div>
              }
              {
                routeErrors && (
                  <div className="alert alert-danger text-danger p-2 mt-3">{
                    routeErrors.response?.data.map(error => <p className="mb-0">{error.description}</p>)
                  }</div>
                )
              }
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};


export async function registerAction({request}){
  //etellat ro ke karbar vared form mikone be soorate key value be sabet FormData agsin mishe
  const formData = await request.formData();  
  //key value ro be shekl object dar miare convert
  const data = Object.fromEntries(formData);
  //data ro be onvan body be post pas midim
  const res = await httpService.post('/Users' , data);
//amaliat movafagh amiz boode ya na
return res.status  === 200;
}

export default Register;