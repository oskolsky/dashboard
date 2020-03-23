import React from 'react'
import PropTypes from 'prop-types'

import Widget from 'components/UI/Widget/Widget'

import styles from './WidgetDay.scss'

const propTypes = {
    title: PropTypes.node.isRequired,
    unprocessedOrders: PropTypes.number.isRequired,
    missedCalls: PropTypes.number.isRequired,
}

class WidgetDay extends React.PureComponent {
    render() {
        return (
            <Widget title={this.props.title}>
                <div className={styles.base}>
                    <div className={styles.unprocessedOrders}>
                        <div className={styles.value}>{this.props.unprocessedOrders}</div>
                        <div className={styles.caption}>
                            Не обработанные
                            <br />
                            заказы
                        </div>
                    </div>
                    <div className={styles.missedCalls}>
                        <div className={styles.value}>{this.props.missedCalls}</div>
                        <div className={styles.caption}>
                            Упущенные
                            <br />
                            звонки
                        </div>
                    </div>
                </div>
            </Widget>
        )
    }
}

WidgetDay.propTypes = propTypes

export default WidgetDay
