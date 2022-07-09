import React, {useState, useEffect} from 'react'
import { FieldList, Selected } from '.'
export const SelectDefault = ({titles, func, value}:any) => {
  const [changeArrows, setChangeArrows] = useState<boolean>(false)
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  
  
  return (
    <FieldList onClick={()=>setChangeArrows(!changeArrows)} onBlur={()=>setChangeArrows(false)} options={options} >
      {changeArrows === true ? 
      <Selected defaultValue={value} onChange={func} placeholder="" choice options={options}/>
      :
      <Selected defaultValue={value} onChange={func} placeholder="" options={options} />
      }
      {changeArrows === true ? 
      <div className='block_for_select'>{titles}</div>
      :
      <div className='block_for_select_not_choice'>{value==null ? titles : ''}</div>
      }
    </FieldList>
  )
}