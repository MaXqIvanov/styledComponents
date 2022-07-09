import React, {useState, useEffect} from 'react'
import { FieldList, Selected } from '.'
export const SelectDefault = ({titles, func, value, options, error, register, ...props}:any) => {
  const [changeArrows, setChangeArrows] = useState<boolean>(false)
  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' },
  // ];
  const [array, setArray] = useState([])

  const changeArray = ()=>{
    setArray(options.map((elem:any)=>{
      if(typeof elem === 'object'){
        return {
          'value': elem.id, 'label': elem.name
        }
      }else{
        return {
          'value': elem, 'label': elem
        }
      }
    }))
  }
  useEffect(() => {
    changeArray()
  }, [])
  
  
  return (
    <FieldList onClick={()=>setChangeArrows(!changeArrows)} onBlur={()=>setChangeArrows(false)} options={options} >
      {changeArrows === true ? 
      <Selected {...props} defaultValue={value} onChange={func} placeholder="" choice options={array}/>
      :
      <Selected {...props} defaultValue={value} onChange={func} placeholder="" options={array} />
      }
      {changeArrows === true ? 
      <div className='block_for_select'>{titles}</div>
      :
      <div className='block_for_select_not_choice'>{value==null ? titles : ''}</div>
      }
    </FieldList>
  )
}