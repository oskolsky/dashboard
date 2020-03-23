import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Widget from 'components/UI/Widget/Widget'

import { getMonth } from 'helpers/getMonth'

import styles from './WidgetProgress.scss'

const propTypes = {
    title: PropTypes.node.isRequired,
    value: PropTypes.number.isRequired,
}

class WidgetProgress extends React.PureComponent {
    render() {
        const value = this.props.value
        const month = getMonth(new Date().getMonth(), 1)

        const classNameValue = classNames(styles.value, {
            [styles.isLow]: value <= 10,
            [styles.isMiddle]: value > 10 && value <= 15,
            [styles.isTop]: value > 15,
        })

        return (
            <Widget title={this.props.title}>
                <div className={styles.base}>
                    <div className={classNameValue}>{Number(this.props.value.toFixed())}</div>
                    <div className={styles.caption}>{month}</div>
                </div>
            </Widget>
        )
    }
}

WidgetProgress.propTypes = propTypes

export default WidgetProgress
