import bluw from './pic/bluw.png'
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';


const Mecury = () => {

    //create ref Element
    const el = useRef(null);

    useEffect(()=>{
        const typed = new Typed(el.current, {
            strings:['Superfly CR7'],
            typeSpeed:200,
            fadeOut: true,
            fadeOutClass: 'typed-fade-out',
            fadeOutDelay: 500,
            showCursor:false,
            loop:true,
            loopCount: 5,
        });
    });

    return ( 
        <div className='hero'>
            <div className='text2'>
                <p>New Collection</p>
                <div className='header'>
                    <h1><span ref={el}></span></h1>
                </div>
                <p>The Nike Mercurial Superfly CR7 features a new look with specialised components to let you play your fastest from start to finish.</p>
                <h4>$1000</h4>
                <div className='order'>
                    <span>Add to cart</span>
                </div>
            </div>
            <div>
                <div>
                    <img src={bluw} alt='boot' className='bluw'/>
                </div>
            </div>
            
        </div>
     );
}
 
export default Mecury;