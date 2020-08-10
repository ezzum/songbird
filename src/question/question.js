import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './question.css';

const Question = ( {data} ) => {

    const [level] = data;
    const {win} = level;
    const length = level.data.length;
    const randomBird = level.data[Math.floor(Math.random() * length)];
    let {name} = randomBird;
    const image = {
        backgroundImage: `url(${randomBird.image})`
    };

    
    if (!win) {
        name = '******';
        image.backgroundImage = ''
    }

    return (
        <div className='quest-block'>
            <div className='quest-image' style={image}></div>
            <div className='quest-info'>
                <div className='name-bird'>{name}</div>
                <ReactAudioPlayer
                    src={randomBird.audio}
                    controls
                />
                {console.log(randomBird)}
            </div>
        </div>
    );
};

export default Question;