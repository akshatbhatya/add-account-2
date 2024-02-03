import React from 'react'

function Login() {
    return (
        <div className='flex justify-center items-center mt-40'>

            <form action="" className='bg-[#f0f0f0] inline-block p-4 rounded-md shadow-md'>

                <label htmlFor="" className='capitalize'>Full Name
                    <br />
                    <input type="text" placeholder='full name' className='capitalize bg-slate-200 rounded-md px-2' />
                </label>

                <br />

                <label htmlFor="" className='capitalize'>email
                    <br />
                    <input type="text" placeholder='email' className='capitalize bg-slate-200 rounded-md px-2' />
                </label>

                <br />

                <label htmlFor="" className='capitalize'>number
                    <br />
                    <input type="text" placeholder='9876543210' className='capitalize bg-slate-200 rounded-md px-2' />
                </label>
                <br />

                <label htmlFor="" className='capitalize'>password
                    <br />
                    <input type="text" placeholder='password' className='capitalize bg-slate-200 rounded-md px-2' />
                </label>

                <br />
                <br />
                <button className='bg-green-700 text-white rounded-sm px-3'>Submit</button>
            </form>

        </div>
    )
}

export default Login
