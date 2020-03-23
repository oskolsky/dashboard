import React from 'react'

import { getMonth } from 'helpers/getMonth'

import styles from './Clock.scss'

class Clock extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date(),
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date(),
        })
    }

    render() {
        return (
            <div className={styles.base}>
                <span className={styles.date}>{this.state.date.getDate()}</span>
                <span className={styles.month}>{getMonth(this.state.date.getMonth(), 2)}</span>
                {this.state.date.toLocaleTimeString('ru-RU', {hour: '2-digit', minute:'2-digit'})}
            </div>
        )
    }
}

export default Clock
