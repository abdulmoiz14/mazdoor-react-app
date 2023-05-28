import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function HomeTextAnimation(){
    return(
        <div className='App'>
            <h2
                style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'bold' ,textAlign: 'center' }}
            >
            Get help. Gain {' '}
                <span style={{ color: 'red', fontWeight: 'bold' }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                    loop
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    words={['happiness!', 'joyfulness!', 'blissfulness!', 'delightness!']}
                />
                </span>
            </h2>
        </div>
    );
}
export default HomeTextAnimation;