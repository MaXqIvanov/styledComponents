import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileAsync } from '../store/mainSlice'
import { Flex, FormWrapper, Error, IconArrow, FieldList, Label, InputMasks } from '../style/components'
import { ButtonDefault } from '../style/components/ButtonDefault'
import { InputDefault } from '../style/components/InputDefault'
import { SelectDefault } from '../style/components/SelectDefault'
import {useForm} from 'react-hook-form'

export const Form = () => {
    const dispatch = useDispatch();
    const {loading, cities, sources} = useSelector((state:any) => state.main)
    const [currentCity, setCurrentCity] = useState(null);
    const [currentKnows, setCurrentKnows] = useState(null);
    const [isVisibleFilds, changeVisibleFields] = useState(false);
    const [phone, setPhone] = useState('');
    const { 
        register,
        formState: {
        errors,
        isValid
        },
        handleSubmit,
        reset,
        
      } = useForm({
        mode: "onSubmit"
      });
      
      const onSubmit = (data:any)=>{
        dispatch(getProfileAsync({
            name: data.name,
            phone: phone,
            email: data.email,
            links: data.links,
            city: currentCity,
            studia_name: data.studia_name,
            fio: data.fio,
            knows: currentKnows,
        }))
        setPhone('')
        setCurrentCity(null)
        setCurrentKnows(null)
        reset()
      }
      
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Flex>
            <InputDefault register={register('name',{
                required: "поле имени обязательно для заполнения",
                minLength: {
                  value:2 ,
                  message: 'минимальная длина поля имени 2 символа'
                },
              })} label={'Ваше имя *'} placeholder={'Иван'} error={errors?.name}/>
            {/* <InputDefault register={register('number',{
                required: "поле номера обязательно для заполнения",
              })} label={'Номер телефона *'} placeholder={'+7 (000) 000-00-00'}/> */}
            <FieldList>
                {errors?.number ? 
                    <Label danger>Номер телефона *</Label>
                :
                    <Label>Номер телефона *</Label>
                }
                <InputMasks className="InputMask"
                {...register('number',{
                    required: "поле номера обязательно для заполнения",
                    minLength: {
                        value:10 ,
                        message: 'минимальная длина поля номера 10 символа'
                    },
                })}
                formatChars={{
                    "9": "[0-9]",
                    a: "[A-Za-z]",
                    "*": "[A-Za-z0-9]"
                }}
                mask="+7\(999) 999-99-99"
                maskChar=" "
                placeholder={'+7 (000) 000-00-00'}
                value={phone}
                onChange={(e:any)=>setPhone(e.target.value)}
                type="text"
                danger={errors?.number ? 'danger' : ''}
                />
            <Error>{errors?.number ? errors.number.message : ''}</Error>
            </FieldList>
        </Flex>
        <Flex style={{marginTop: '4px'}}>
            <InputDefault register={register('email',{
                required: "поле email обязательно для заполнения",
                pattern: /[@]/
              })} label={'E-mail *'} placeholder={'example@skdesign.ru'}  error={errors?.email}/>
            <InputDefault register={register('links',{
                required: "необходимо указать ссылку на профиль",
                minLength: {
                  value:3 ,
                  message: 'минимальная длина поля для ссылки 3 символа'
                },
              })} label={'Ссылка на профиль *'} placeholder={'instagram.com/skde…'}  error={errors?.links}/>
        </Flex>
        <SelectDefault register={register('city',{
                required: currentCity === null ? "необходимо выбрать город" : false,
              })} options={cities} value={currentCity} danger={errors?.city ? 'danger' : ''}
              func={setCurrentCity} titles={'Выберите город *'}/>
        <InputDefault  {...register('studia_name')}
        big label={'Название организации/студии'} placeholder={'SK Design'}/>
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
        <>
            <InputDefault  {...register('fio')} big label={'Получатель'} placeholder={'ФИО'}/>
            <SelectDefault  {...register('knows')} options={sources} value={currentKnows} func={setCurrentKnows} titles={'Откуда вы узнали про нас?'}/>  
        </> 
        :<></>
        }
        {loading ? 
        <ButtonDefault errors={errors} blue/>
        :
        <ButtonDefault/>
        }
    </FormWrapper>
  )
}
