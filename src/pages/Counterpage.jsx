import { Message } from '../components/Message';
import { Btn } from '../components/Btn';
import {  useState } from 'react';


export const Counterpage=()=>{

     const [count,setCount]=useState(0);

     const update=(sign)=>{
        if(sign==='+')
        {
            setCount(count+1);
        }
        else{
            setCount(count-1);
        }
     }

     

    // var count=0;
    // const setCount=(sign)=>{
    //     if(sign==='+')
    //     {
    //         count++;
    //     }

    //     else{
    //         count--;
    //     }

    //     console.log(count);
    // }

    return (



        <>
        <Message msg='Counter App'  />
        <Message msg='counter is running at' val={count} />
        <Btn  sign='+' classname="btn btn-success me-2" fn={update} />
        <Btn sign='-' classname="btn btn-danger"  fn={update} />
        </>
    )
}