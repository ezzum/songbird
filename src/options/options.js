import React, {Component} from 'react';
import winSound from '../sound/win.mp3';
import errSound from '../sound/error.mp3';

class Options extends Component {
    state = {
        error: false,
        win: false
    }

    clickItem = (id) => {
        const {getIdClick, birdId, levelWin} = this.props;
        const audioWin = new Audio(winSound);
        const audioError = new Audio(errSound);

        getIdClick(id)
        if (birdId === id && !levelWin) {
            audioWin.play();
            // this.setState({
            //     win: true
            // });
            document.getElementById(id).classList.add('win-item')
        }
        if (birdId !== id && !levelWin) {
            audioError.play();
            // this.setState({
            //     error: true
            // });
            document.getElementById(id).classList.add('error-item')
        }
    }

    render() {
        const {option} = this.props;
        const {id, name} = option;
        let className = 'li-btn';

        if (this.state.win) className += ' win-item';
        if (this.state.error) className += ' error-item';

        return (
            <li className='list-group-item'
                onClick = {() => this.clickItem(id)}>
                <span className={className} id={id}></span>
                {name}
            </li>
        );
    }
};

export default Options;