export const Btn=({sign,classname,fn})=>{

    const clicked=()=>{
        console.log('clicked',sign);
        fn(sign);
    }
    

  return( 
  <>
  <button onClick={clicked} className={classname} >{sign}</button>
    </>
  )
}