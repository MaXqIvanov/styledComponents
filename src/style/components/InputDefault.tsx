import React from 'react'
import { FieldList, Input, Label, Error } from '.'

export const InputDefault = ({label, placeholder, error, ...other}:any) => {
  return (
    <FieldList>
        <>
        {error ? 
        <>
          <Label danger>{label}</Label>
          <Input {...other} placeholder={placeholder} danger/>
          <Error>{error ? error : ''}</Error>
        </>
        :
        <>
          <Label>{label}</Label>
          <Input {...other} placeholder={placeholder}/>   
        </>
        }
        </>
    </FieldList>
  )
}
