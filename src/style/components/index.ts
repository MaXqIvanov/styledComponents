import styles, {keyframes} from 'styled-components'
import logo from '../../assets/logo.svg';
import iconArrow from '../../assets/icon.svg';
import ReactSelect from "react-select";
import loader from '../../assets/loader.svg';
import InputMask from 'react-input-mask';

export const AppWrapper = styles.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
`
export const Containter = styles.div`
width: 90%;
height: fit-content;
@media(min-width: 1400px){
    width: 80%;
}
`
export const Logo = styles.div`
background-image: url(${logo});
background-size: contain;
background-repeat: no-repeat;
height: 70px;
width: 474px;
flex: none;
order: 0;
flex-grow: 0;
@media(max-width: 1200px){
    width: 400px;
    height: 50px;
}
`

export const Title = styles.h2`
font-family: 'SF UI Display';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 150%;
/* identical to box height, or 36px */
color: #353238;
`
export const Text = styles.p`
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #353238;
`

export const InfoWrapper = styles.div`
width: 100%;
height: 100%;
`
export const FormWrapper = styles.form`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px 30px;
gap: 20px;

width: 440px;
height: fit-content;

background: #FFFFFF;
box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
border-radius: 8px;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;

.div{
    width: 221px;
    height: 21px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #353238;
    flex: none;
    order: 0;
    flex-grow: 0;
}
`
export const Grid = styles.div`
display: grid;
grid-template-columns: auto 500px;
column-gap: 4%;
`

export const Input = styles.input`
background: #FFFFFF;
width: ${(props:any) => props.big ? "410px" : "180px"};
display: flex;
flex-direction: row;
align-items: center;
padding: 18px 15px;
gap: 10px;
border: 2px solid ${(props:any) => props.danger ? "#EB5E55" : "#E3E3E3"};
border-radius: 8px;
transition: all linear 0.3s;
&:focus{
    outline: none;
    border: 2px solid ${(props:any) => props.danger ? "#EB5E55" : "#0086A8"};
}

&:hover {
    outline: none;
    border:2px solid ${(props:any) => props.danger ? "#EB5E55" : "#0086A8"};
}
`

export const Label = styles.label`
position: absolute;
top: -10px;
left: 10px;
flex: none;
order: 0;
flex-grow: 0;
letter-spacing: 0.25px;
color: ${(props:any) => props.danger ? "#EB5E55" : "#828282"};
background-color: #fff;
padding: 0 5px;
font-family: 'SF UI Display';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 100%;`

export const InputMasks = styles(InputMask)`
    background: #FFFFFF;
    width: ${(props:any) => props.big ? "410px" : "180px"};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 18px 15px;
    gap: 10px;
    border: 2px solid ${(props:any) => props.danger ? "#EB5E55" : "#E3E3E3"};
    border-radius: 8px;
    transition: all linear 0.3s;
    &:focus{
        outline: none;
        border: 2px solid ${(props:any) => props.danger ? "#EB5E55" : "#0086A8"};
    }
    
    &:hover {
        outline: none;
        border:2px solid ${(props:any) => props.danger ? "#EB5E55" : "#0086A8"};
    }  
`

export const FieldList = styles.div`
display: flex;
flex-flow: column nowrap;
position: relative;
&:focus{
    border: 2px solid red;
}

.block_for_select{
    position: absolute;
    top: -10px;
    left: 10px;
    flex: none;
    order: 0;
    flex-grow: 0;
    letter-spacing: 0.25px;
    color: ${(props:any) => props.danger ? "#EB5E55" : "#828282"};
    background-color: #fff;
    padding: 0 5px;
    font-family: 'SF UI Display';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    z-index: 9999;
}
.block_for_select_not_choice{
    position: absolute;
    top: 40%;
    left: 10px;
    flex: none;
    order: 0;
    flex-grow: 0;
    letter-spacing: 0.25px;
    color: ${(props:any) => props.danger ? "#EB5E55" : "#828282"};
    background-color: #fff;
    padding: 0 5px;
    font-family: 'SF UI Display';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    transform: translate(-50%, 0)
    line-height: 100%;
    z-index: 9999;
    display: ${(props:any)=> props.select && 'none'}
}
`
export const Error = styles.div`
color: #EB5E55;
flex: none;
order: 0;
flex-grow: 0;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 100%;
`

export const Flex_Container = styles.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
export const Flex = styles.div`
height: fit-content;
width: 100%;
display: flex;
justify-content: space-between;
`

export const Select = styles.select`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 13px 15px;
gap: 15px;

position: relative;
width: 300px;
height: 50px;

border: 2px solid #E3E3E3;
border-radius: 8px;
appearance: none;
background: none;
z-index: 2;
&:focus{
    border: 2px solid ${(props:any) => props.danger ? "#EB5E55" : "#0086A8"};
}
&:hover {
    outline: none;
    border:2px solid ${(props:any) => props.danger ? "#EB5E55" : "#0086A8"};
}
`
export const IconArrow = styles.div`
margin-left: 10px;
background-image: url(${iconArrow});
background-repeat: no-repeat;
background-size: 10px;
height: 100%;
width: 10px;
background-position: center;
transform: rotate(${(props:any) => props.choice ? '180deg' : '0deg'});
z-index: 99;
` 



export const Selected = styles(ReactSelect)`
.css-1s2u09g-control{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 440px;
    height: 50px;
    
    border: 2px solid ${(props:any) => props.danger ? "#EB5E55" : "#E3E3E3"};
    border-radius: 8px;
    appearance: none;
    background: none;
    z-index: 2;
    &:focus{
        border: 2px solid ${(props:any) => props.danger ? "#EB5E55" : "#0086A8"};
        box-shadow: none;
        z-index: 2;
    }
    &:hover {
        outline: none;
        border:2px solid ${(props:any) => props.danger ? "#EB5E55" : "#0086A8"};
        z-index: 2;
    }
}
.css-1okebmr-indicatorSeparator{
    display: none;
}
.css-tj5bde-Svg{
    transform:  rotate(${(props:any) => props.choice ? '180deg' : '0deg'});
}
.css-1pahdxg-control{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 440px;
    height: 50px;
    
    border: 2px solid #E3E3E3;
    border-radius: 8px;
    appearance: none;
    background: none;
    z-index: 2;
    outline: none;
    box-shadow: none;
    box-shadow: none;
    outline: none;
    border: 2px solid ${(props:any) => props.danger ? "#EB5E55" : "#0086A8"};

}
.css-26l3qy-menu{
    z-index: 99999;
    background: white;
}
.css-4ljt47-MenuList{
    z-index: 99999;
    background: white;
}
.css-1n7v3ny-option{
    z-index: 99999;
    background: white;
}
`
export const Button = styles.button`
display: flex;
justify-content: center;
align-items: center;
padding: 18px 25px;
gap: 10px;
border: none;
width: 440px;
height: 50px;

background: ${(props:any) => (props.blue == true && props.blue !== null) ? "#E3E3E3" : "#0086A8"};
border-radius: 8px;

/* Inside auto layout */
cursor: pointer;
flex: none;
order: 7;
align-self: stretch;
flex-grow: 0;
color: #828282;
transition: all linear 0.3s;
span{
    width: 129px;
    height: 14px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    text-align: center;
    flex: none;
    order: 0;
    flex-grow: 0;
}
&:hover{
    background: #0086A8;
    color: white;
}
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styles.div`
background-image: url(${loader});
background-repeat: no-repeat;
background-size: 30px;
height: 30px;
width: 30px;
animation: ${rotate} 1.4s linear infinite;
`

