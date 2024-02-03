import React, { useState } from 'react'
import Validation from './Validation';
import { useDispatch } from 'react-redux';
import { addAccountDetail } from './Store/AccountSlice';
import { useNavigate } from 'react-router-dom';


function Login() {
    let dispatch = useDispatch()
    let navigate = useNavigate()



    let initialData = {
        fullname: "",
        email: "",
        number: "",
        password: ""

    }
    let [value, setValue] = useState(initialData);
    let [error, setError] = useState(null)



    let changeEvent = (e) => {
        let target = e.target;
        setValue((prev) => ({ ...prev, [target.name]: target.value }));

    }
    let handleForm = (e) => {
        e.preventDefault()
        let message = Validation(value.email, value.password, value.number);
        setError(message)
        let ourData = ({ id: Date.now(), ...value })
        dispatch(addAccountDetail(ourData))
        navigate("/account")

    }
    return (
        <div className='flex justify-center items-center mt-40'>

            <form action="" className='bg-[#f0f0f0] inline-block p-4 rounded-md shadow-md' onSubmit={handleForm}>

                <label htmlFor="" className='capitalize'>Full Name
                    <br />
                    <input type="text" placeholder='Full Name' className=' bg-slate-200 rounded-md px-2' value={value.fullname} name="fullname" onChange={changeEvent} />
                </label>

                <br />

                <label htmlFor="" className='capitalize'>email
                    <br />
                    <input type="text" placeholder='Email' className=' bg-slate-200 rounded-md px-2' value={value.email} name="email" onChange={changeEvent} />
                </label>

                <br />

                <label htmlFor="" className='capitalize'>number
                    <br />
                    <input type="text" placeholder='9876543210' className=' bg-slate-200 rounded-md px-2' value={value.number} name="number" onChange={changeEvent} />
                </label>
                <br />

                <label htmlFor="" className='capitalize'>password
                    <br />
                    <input type="text" placeholder='Password' className=' bg-slate-200 rounded-md px-2' value={value.password} name="password" onChange={changeEvent} />
                </label>

                <br />
                <span className='text-red-600'>{error}</span>
                <br />
                <button className='bg-green-700 text-white rounded-sm px-3' type='Submit'>Submit</button>
            </form>



        </div>
    )
}

export default Login
