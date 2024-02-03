import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeAccount, updateAccount } from './Store/AccountSlice';

function AccountPage() {
    let data = useSelector(state => state.accountDetail)
    let ourData=data.account;
    let dispatch=useDispatch();
    return (
        <div>

            
           
           {
            ourData.map((item,i)=>{
              return  <div key={i}>

              <input type="text" value={item.fullname}  />
              <br />
              <input type="text" value={item.email}/>
              <br />
              <input type="text" value={item.number} />
              <br />
              <input type="text" value={item.password} />
              <button>Update</button>
              <button onClick={()=>dispatch(removeAccount(item.id))}>Delete</button>
          
                </div>
                
            })
           }
        </div>
    )
}

export default AccountPage;
