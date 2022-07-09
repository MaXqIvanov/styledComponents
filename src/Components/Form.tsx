import React, { useState, useEffect } from 'react'
import { Flex, FormWrapper, Text, IconArrow } from '../style/components'
import { InputDefault } from '../style/components/InputDefault'
import { SelectDefault } from '../style/components/SelectDefault'

export const Form = () => {
    const [currentCity, setCurrentCity] = useState(null);
    const [currentKnows, setCurrentKnows] = useState(null);
    const [isVisibleFilds, changeVisibleFields] = useState(false);
    useEffect(() => {
      console.log(currentCity);
      console.log(currentKnows);
    }, [currentKnows, currentCity])
    
  return (
    <FormWrapper>
        <Flex>
            <InputDefault label={'Ваше имя *'} placeholder={'Иван'}/>
            <InputDefault label={'Номер телефона *'} placeholder={'+7 (000) 000-00-00'}/>
        </Flex>
        <Flex style={{marginTop: '4px'}}>
            <InputDefault label={'E-mail *'} placeholder={'example@skdesign.ru'}/>
            <InputDefault label={'Ссылка на профиль *'} placeholder={'instagram.com/skde…'}/>
        </Flex>
        <SelectDefault value={currentCity} func={setCurrentCity} titles={'Выберите город *'}/>
        <InputDefault big label={'Название организации/студии'} placeholder={'SK Design'}/>
        <div className='div' style={{display: 'flex'}}>Показать дополнительные поля
           {isVisibleFilds ?
            <IconArrow choice onClick={()=>changeVisibleFields(!isVisibleFilds)}>
            </IconArrow>
            :
            <IconArrow onClick={()=>changeVisibleFields(!isVisibleFilds)}>
            </IconArrow>
           }
        </div>
        {isVisibleFilds ? 
        <SelectDefault value={currentKnows} func={setCurrentKnows} titles={'Откуда вы узнали про нас?'}/>   
        :<></>
        }
    </FormWrapper>
  )
}
