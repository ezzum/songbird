import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './question.css';

const Question = ( {data, randomIdx, levelWin} ) => {
    
    const randomBird = data.data[randomIdx-1];
    let {name} = randomBird;
    const image = {
        backgroundImage: `url(${randomBird.image})`
    };

    
    if (!levelWin) {
        name = '******';
        image.backgroundImage = ''
    }

    return (
        <div className='quest-block'>
            <div className='quest-image' style={image} ></div>
            <div className='quest-info'>
                <div className='name-bird'>{name}</div>
                <ReactAudioPlayer
                    src={randomBird.audio}
                    controls/>
            </div>
        </div>
    );
};

export default Question;