import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/where2go.png";
import login from "../../assets/login.png";
import { BsGoogle } from "react-icons/bs";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthService from "../../services/authService";
import { useDispatch } from "react-redux";
import { loggedUser } from "../../store/userSlice";
import { toast } from "react-toastify";
import { BsArrowLeftSquare } from 'react-icons/bs';

function LoginComponent() {
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(true);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().required("Field is required"),
      password: Yup.string().required("Field is required"),
    }),

    onSubmit: (values) => {
      AuthService.loginUser(values)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Prijavljeni ste!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });

            localStorage.setItem("nc_token", res.data.token);
            dispatch(loggedUser(res.data.user));

            setTimeout(() => {
              navigate("/");
            }, 3000);
          } else {
            toast.warning("Niste prijavljeni, pogrešna lozinka!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        })
        .catch((err) => {
          toast.error(err.response.data.msg, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    },
  });

  const showError = (name) =>
    formik.errors[name] && formik.touched[name] && formik.errors[name];

  const handleVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <div className="flex flex-grow justify-between bg-white text-others h-[100vh]">
      <div className="flex flex-col justify-center mt-[100px] lg:mt-0 mx-auto">
        <div className="flex flex-col items-center gap-2">
          <Link to='/'><img src={logo} alt="login" className="w-[250px]" /></Link>
          <p className="text-xl text-center">
            Prijavite se da biste pristupili svom profilu
          </p>
        </div>
        <div>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col items-center gap-2"
          >
            <div className="flex flex-col lg:items-start gap-2">
              <label>
                E-mail Adresa{" "}
                <span className="text-[14px] text-red-600">
                  {" "}
                  {showError("email")}{" "}
                </span>
              </label>
              <input
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="border border-others w-[300px] lg:w-[616px] focus:bg-white rounded-lg p-3"
                placeholder="Unesite E-mail Adresu..."
              />
            </div>

            <div className="flex flex-col lg:items-start gap-2 relative">
              <label>
                Lozinka{" "}
                <span className="text-[14px] text-red-600">
                  {" "}
                  {showError("password")}{" "}
                </span>
              </label>
              <input
                name="password"
                type={visibility ? "password" : "text"}
                value={formik.values.password}
                onChange={formik.handleChange}
                className="border border-others w-[300px] lg:w-[616px] bg-white rounded-lg p-3"
                placeholder="Unesite Lozinku..."
              />
              {visibility ? (
                <MdVisibility
                  className="absolute top-[40px] right-4 text-2xl"
                  onClick={handleVisibility}
                />
              ) : (
                <MdVisibilityOff
                  className="absolute top-[40px] right-4 text-2xl"
                  onClick={handleVisibility}
                />
              )}
            </div>
            <div className="text-center mt-3">
              <button
                type="submit"
                className="border-2 border-primary bg-primary hover:bg-secondary hover:text-primary text-white rounded-3xl px-16 py-2"
              >
                Ulogujte se
              </button>
              <Link className='flex items-center gap-3 mt-4 text-primary' to={'/'}><BsArrowLeftSquare className='text-3xl'/> Vratite se na početnu</Link> 
            </div>
          </form>
        </div>
      </div>
      <div>
        <img
          src={login}
          alt=""
          className="h-[100vh] w-[100%] hidden lg:block"
        />
      </div>
    </div>
  );
}

export default LoginComponent;
