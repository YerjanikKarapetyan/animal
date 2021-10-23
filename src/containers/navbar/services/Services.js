import React ,{useState} from 'react';
import './Services.css';

const Services = () =>{
  

    const[wid, setWid] = useState('');
    const funcWidth = (eventWidth) => setWid(eventWidth.target.value);

    const[hei, setHei] = useState('');
    const funcHei = (eventHei) => setHei(eventHei.target.value); 

    const[len, setLen] = useState('');
    const funcLen = (eventLen) => setLen(eventLen.target.value); 

    
    // const[calc, setCalc] = useState('');
    // const Calculator = (eventCalc) => setCalc(eventCalc.target.value);

    const[calcLiter,setCalcLiter]=useState(0);
    const calculateLiter = (eventCalc) => {
        setCalcLiter(eventCalc.target.value);
        setCalcLiter((len * hei * wid)/1000);
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
                                    <p>Հաշվիչ</p>
                            <div className={'calculator'}>
                                <div>
                                    <ul className={'list-services-li-aquarium'}>
                                        <li className={'calcilator-inputs'}>
                                            Լ․ <input value={wid} onChange={funcWidth} type={'number'} /> cm
                                        </li>
                                        <li className={'calcilator-inputs'}>
                                            Բ․<input value={hei} onChange={funcHei} type={'number'} /> cm
                                        </li>
                                        <li className={'calcilator-inputs'}>
                                            Ե․<input value={len} onChange={funcLen} type={'number'} /> cm
                                        </li> 
                                    </ul>
                                </div>
                                <div>
                                <button className={'calculator-button'} value={calcLiter} onClick={calculateLiter}>Հաշվել</button>
                                    <span className={'list-services-li-calc'}>
                                        {calcLiter}L l 
                                    </span>
                                </div>     
                            </div>
                            
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