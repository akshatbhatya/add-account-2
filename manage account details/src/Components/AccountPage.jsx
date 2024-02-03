import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAccount, updateAccount } from './Store/AccountSlice';

function AccountPage() {
    let data = useSelector(state => state.accountDetail);
    let ourData = data.account;
    let dispatch = useDispatch();

    return (
        <div className='flex justify-center mt-48'>
            {ourData.map((item, i) => {
                let [email, setEmail] = useState(item.email);
                let [fullName, setFullName] = useState(item.fullname);
                let [number, setNumber] = useState(item.number);
                let [password, setPassword] = useState(item.password);

                return (
                    <div key={i} className='inline-block bg-[#f0f0f0] rounded-md p-8 '>
                        <input type="text" value={fullName} onChange={(e) => setFullName(e.currentTarget.value)} className='bg-slate-200 p-1' />
                        <br />
                        <br />
                        <input type="text" value={email} onChange={(e) => setEmail(e.currentTarget.value)} className='bg-slate-200 p-1' />
                        <br />
                        <br />
                        <input type="text" value={number} onChange={(e) => setNumber(e.currentTarget.value)} className='bg-slate-200 p-1' />
                        <br />
                        <br />
                        <input type="text" value={password} onChange={(e) => setPassword(e.currentTarget.value)} className='bg-slate-200 p-1' />
                        <br />
                        <br />
                        <button onClick={() => dispatch(updateAccount({ ...item, email, fullname: fullName, password, number }))} className='bg-green-600 text-white px-4 mx-2 rounded-md'>
                            Update
                        </button>

                        <button className='bg-red-500 text-white px-4 rounded-md' onClick={() => dispatch(removeAccount(item.id))}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default AccountPage;
