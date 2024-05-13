import logo from './user/User-tool/image/e-election-vertical.png'
import formlogo from './user/User-tool/image/form logo.png'
import "./user/User-tool/User.css"
import './user/User-tool/userResponsive.css'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import { ADMIN_LOGIN, BASE_URL} from '../redux_saga/constant';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const AdminLogin = () => {

  const MySwal = withReactContent(Swal);
  const email = useRef()
  const password = useRef()
  const handleLogin = () => {
    const data = {
      email: email.current.value,
      password: password.current.value
    }
    console.log(data);
    // axios.post(BASE_URL + ADMIN_LOGIN, data)
     axios.post("https://voater-backend-app.onrender.com/v1/login", data)
    .then((res) => {
      // console.log(res);
      // Cookies.set("role", res.data.data.role)
      // Cookies.set("email", res.data.data.email)
      // window.location = "/"

         Cookies.set("Role", res.data.data.Role);
         Cookies.set("_id", res.data.data._id);
         Cookies.set("Name", res.data.data.Name);
         Cookies.set("Profile", res.data.data.Profile);
         Swal.fire({
           title: "Login Succsessfuly!",
           text: "You clicked the button!",
           icon: "success",
         });
         window.location = "/";
    })
    .catch((err) => {
      MySwal.fire({
        title: "Admin Information Is Not Valid..!",
        icon: "error",
        showCancelButton: false,
        confirmButtonText: 'OK',
    })
    .then((result) => {
        if (result.isConfirmed) {
            window.location = "/";
        }
    });
    })
  }

  return (
    <>
      <div className='row user-login'>
        <div className='col-6 l-1 e-logo'>
          <img src={logo} className='w-25' alt='e-election-vertical-logo' />
        </div>
        <div className='col-6 e-form e-logo'>
          <div className='form'>
            <center>
              <div className='mb-3 formlogo'>
                <img src={formlogo} />
              </div>
            </center>
            <p>Admin Login</p>
            <div className="form-group">
              <label>Email </label>
              <input type="text" placeholder='Username' className="form-control" ref={email} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder='Password' className="form-control" ref={password} />
            </div>
            <button className='btn w-100 btn-primary'  onClick={handleLogin}>Login</button>
            <button className='btn btn-light w-100'><Link className='login-text-send' to={"/"}>User Login</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}
export default AdminLogin




// import formlogo from './user/User-tool/image/form logo.png'
// import React, { useRef } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Cookies from "js-cookie";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

// const AdminLogin1 = () => {
//    const MySwal = withReactContent(Swal);

//    const email = useRef();
//    const password = useRef();

//    const handleLogin = () => {
//      const data = {
//        Email: email.current.value,
//        Password: password.current.value,
//      };

//      axios
//        .post("https://voater-backend-app.onrender.com/v1/login", data)
//        .then((res) => {
//          Cookies.set("Role", res.data.data.Role);
//          Cookies.set("_id", res.data.data._id);
//          Cookies.set("Name", res.data.data.Name);
//          Cookies.set("Profile", res.data.data.Profile);
//          Swal.fire({
//            title: "Login Succsessfuly!",
//            text: "You clicked the button!",
//            icon: "success",
//          });
//          window.location = "/";
//        })
//        .catch((error) => {
//          MySwal.fire({
//            title: "Your Information Is Not Valid !",
//            icon: "info",
//            showCancelButton: false,
//            confirmButtonText: "OK",
//          }).then((result) => {
//            if (result.isConfirmed) {
//              window.location = "/";
//            }
//          });
//        });
//    };

//   return (
//     <>
//       <div className="container">
//         <div className="row user-login">
//           <div className="col-lg-12 col-sm-12 login-form d-flex align-items-center justify-content-center">
//             <div className="form">
//               <center>
//               <div className='mb-3 formlogo'>
//                   <img src={formlogo} />
//               </div>
//               </center>
//               <h3 className="text-center">Admin Login</h3>
//               <div className="form-group">
//                 <label>email</label>
//                 <input
//                   type="text"
//                   ref={email}
//                   className="form-control"
//                   placeholder="Enter Your Email Id"
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Password</label>
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="form-control"
//                   ref={password}
//                 />
//               </div>
//               <button className="vote" onClick={handleLogin}>
//                 Login
//               </button>
//               <Link className="vote" to={"/"}>
//                 User Login
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminLogin1;