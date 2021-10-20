import React ,{useState} from 'react';
import './Services.css';

const Services = () =>{
  

    const[wid, setWid] = useState('');
    const funcWidth = (eventWidth) => setWid(eventWidth.target.value);

    const[hei, setHei] = useState('');
    const funcHei = (eventHei) => setHei(eventHei.target.value); 

    const[len, setLen] = useState('');
    const funcLen = (eventLen) => setLen(eventLen.target.value); 

    
    const[calc, setCalc] = useState('');
    const Calculator = (eventCalc) => setCalc(eventCalc.target.value);

    const[calcLiter,setCalcLiter]=useState('')
    const calculateLiter = () => {
        setCalcLiter = len * hei * wid;
    }   
    



    return(
        <div>
            <div>
                <h1 className={'main-services'}>Մեր ծառայությունները</h1>
            </div>
            <div>
                <ul className ={'list-services'}>
                    <li className={'list-services-li'}>
                        <h2>Ակվարիումի խնամք</h2>
                            <p>
                                Ակվարիումի մաքրում, բույսերի խնամք, ձկների խնամք։ 
                            </p>
                    </li>
                    <li className={'list-services-li'}>
                        <h2>Ակվարիումներ պատրաստում</h2>
                            <p>
                                Ցանկացած չափի ակվարոիմների, ակվարումային պարագաների և դեկոռների պատրաստում։
                            </p>
                                <ul>
                                    <li className={'calcilator-inputs'}>
                                        Լ․ <input value={wid} onChange={funcWidth} type={'number'} /> cm
                                    </li>
                                    <li className={'calcilator-inputs'}>
                                        Բ․<input value={hei} onChange={funcHei} type={'number'} /> cm
                                    </li>
                                    <li className={'calcilator-inputs'}>
                                        Ե․<input value={len} onChange={funcLen} type={'number'} /> cm
                                    </li>
                                    <li>
                                        {calculateLiter}
                                     </li>   
                                    <button className={'calculator-button'} value={calc} onClick={Calculator}>Հաշվիչ</button>
                                </ul>
                    </li>
                    <li className={'list-services-li'}>
                        <h2>Խորհրդատվություն</h2>
                            <p>
                                Խորհրդատվության համար զանգահարել՝ +37493914361
                            </p>
                    </li>
                </ul>
            </div>
        
        </div>
       
    )
}

export default Services;