import React, {Component} from 'react';

class Pagination extends Component {
    state = {
        active: this.props.active,
    }

    render() {
        const {label} = this.props;
        const {active} = this.state;
        let className = 'page-link'

        if (active) {
            className += ' active';
        }
        return (
            <a className={className} href="/#">
                {label}
            </a>
        )
    }
}

export default Pagination;