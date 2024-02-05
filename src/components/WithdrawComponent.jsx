import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { deposite, withdraw } from '../redux/BankSlice'

export const WithdrawComponent = () => {
    const {register,handleSubmit,formState:{errors}} = useForm()
    const dispatch = useDispatch()
    const submitHandler = (data) => {

        //action call
        dispatch(withdraw(data.amount1))

    }
    
    const depositeHandler = (data)=>{
        console.log("data...",data)
        dispatch(deposite(data.amount2))
    }


  return (
    <div>
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <input type="text" placeholder="Enter Amount" {...register("amount1")}/>
                </div><br/>
                <div>
                    <input className="btn btn-warning"  type="submit" value="Withdraw" />    
                </div>
            </form><br/><br/>
            <form onSubmit={handleSubmit(depositeHandler)}>
                <div>
                    <input type="text" placeholder="Enter Amount to deposit" {...register("amount2")}/>
                </div><br/>
                <div>
                    <input className="btn btn-primary"type="submit" value="deposite" />    
                </div>
            </form>
        </div>
    </div>
  )
}
