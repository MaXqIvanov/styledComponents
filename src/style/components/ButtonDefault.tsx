import React from 'react'
import { useSelector } from 'react-redux'
import { Button, FieldList, Spinner } from '.'

export const ButtonDefault = ({errors, ...props}:any) => {
    const {loading} = useSelector((state:any) => state.main)    
  return (
    <Button type='submit' {...props}>
        {loading === false ? 
        <Spinner />
        :
        <span>Отправить заявку</span>
        }   
    </Button>
  )
}
