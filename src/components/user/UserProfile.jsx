import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import maleProfile from "../user/User-tool/image/male profile.png";
import femaleProfile from "../user/User-tool/image/female profile.png";
import { BASE_URL, USER_LIST } from '../../redux_saga/constant';

const UserProfile = () => {
    const [user, setUser] = useState([])
    const MySwal = withReactContent(Swal);
    const userId = Cookies.get("_id")
    const getUser = async () => {
        const res = await axios.get(BASE_URL + USER_LIST)
        return res.data.data
    }

    useEffect(() => {
        getUser().then(res => setUser(res))
    }, [])

    const handleLogout = () => {
        MySwal.fire({
            title: 'Are you sure?',
            text: 'You will be logged out...!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, logout!',
            cancelButtonText: 'No, cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                Cookies.remove("role");
                Cookies.remove("name");
                Cookies.remove("_id");
                window.location = "/";
            }
        });
    };

    return (
        <>
            <Navbar />
            <div className='profile-card d-flex justify-content-center align-items-center'>
                <div class="card text-center">
                    <div class="card-header">
                        Your Profile Information
                    </div>
                    <div class="card-body d-flex justify-content-evenly align-items-center">
                        {
                            user?.map((v, i) => {
                                if (v._id == userId) {
                                    return (
                                        <>
                                            <div key={i}>
                                                <img src={v.sex == "female" ? femaleProfile : maleProfile} />
                                            </div>
                                            <div key={i}>
                                                <h6>Name : <span>{v.name}</span></h6>
                                                <h6>Father Name : <span>{v.fatherName}</span></h6>
                                                <h6>Card No : <span>{v.cardNo}</span></h6>
                                                <h6>Dob : <span>{v.dob}</span></h6>
                                                <h6>Sex : <span>{v.sex}</span></h6>
                                            </div>
                                        </>
                                    )
                                }
                            }
                            )
                        }
                    </div>
                    <button className='mb-3' onClick={handleLogout}>Log out</button>
                    <div class="card-footer text-muted">E-Election Profile Card </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile