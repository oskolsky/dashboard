import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { thousandSeparator } from 'helpers/formatting'

import styles from './Points.scss'

const propTypes = {
    points: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['positive', 'negative']),
}

class Points extends React.PureComponent {
    render() {
        const classNameBase = classNames(styles.base, styles[`base__${this.props.type}`])

        return (
            <div className={classNameBase}>
                {thousandSeparator(this.props.points)}
            </div>
        )
    }
}

Points.propTypes = propTypes

export default Points
