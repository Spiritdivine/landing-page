import boot2 from './boot2.png';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';


const Main = () => {

    //create ref Element
    const el = useRef(null);

    useEffect(()=>{
        const typed = new Typed(el.current, {
            strings:['Superfly 8 Elite'],
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
            <div className='textHero'>
                <p>New Collection</p>
                <div className='header'>
                    <h1 style={{fontSize:'3em'}} ><span ref={el}></span></h1>
                </div>
                <p>The Nike Mercurial Superfly 8 Elite FG features a new look with specialised components to let you play your fastest from start to finish.</p>
                <h4>$500</h4>
                <div className='order'>
                    <span>Add to cart</span>
                </div>
            </div>
            <div className='overlap'>
                <div className='pngHero overlap1'>
                    <img src={boot2} alt='boot'></img>
                </div>
                <div className='pngHero overlap2 rotate'>
                    <div className="circle"></div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Main;