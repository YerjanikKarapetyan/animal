import React from 'react';
import './Services.css';

const Services = () =>{

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