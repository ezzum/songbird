import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './description.css';

const Description = ({currentId, activeLevel}) => {

    const [currentItem] = activeLevel.filter((elem) => elem.id === currentId);
    let descripTopClassName = 'descrip-top hide';
    let nameBird = '';
    let nameBirdLat = '';
    let text = 'Послушайте плеер. Выберите птицу из списка';
    let src = '';
    let image = {
        backgroundImage: ''
    };

    if (currentItem) {
        descripTopClassName = 'descrip-top';
        nameBird = currentItem.name;
        nameBirdLat = currentItem.species;
        text = currentItem.description;
        src = currentItem.audio;
        image.backgroundImage = `url(${currentItem.image})`;
    }

    return (
        <div className = 'description'>
            <div className = {descripTopClassName}>
                <div className = 'descrip-image' style = {image}></div>
                <div className = 'descrip-top-right'>
                    <h4 className = 'descrip-name'>{nameBird}</h4>
                    <div className = 'descrip-name-lat'>{nameBirdLat}</div>
                    <ReactAudioPlayer
                    src = {src}
                    controls/>
                </div>
            </div>
            <div className = "descrip-text">{text}</div>
        </div>
    );
}

export default Description;