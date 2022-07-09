import React from 'react'
import { FieldList, Input, Label, Error } from '.'

export const InputDefault = ({label, placeholder, error, register, ...other}:any) => {
  return (
    <FieldList>
        <>
        {error ? 
        <>
          <Label danger>{label}</Label>
          <Input {...register} {...other} placeholder={placeholder} danger/>
          <Error>{error ? error.message : ''}</Error>
        </>
        :
        <>
          <Label>{label}</Label>
          <Input {...register} {...other} placeholder={placeholder}/>   
        </>
        }
        </>
    </FieldList>
  )
}
