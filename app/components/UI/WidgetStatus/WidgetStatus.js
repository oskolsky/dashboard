import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Widget from 'components/UI/Widget/Widget'
import Points from 'components/UI/Points/Points'

import styles from './WidgetStatus.scss'

const propTypes = {
    title: PropTypes.node.isRequired,
    date: PropTypes.string,
    icon: PropTypes.string.isRequired,
    new: PropTypes.number.isRequired,
    open: PropTypes.number.isRequired,
    delivery: PropTypes.number.isRequired,
    pending: PropTypes.number.isRequired,
}

class WidgetStatus extends React.PureComponent {
    render() {
        return (
            <Widget title={this.props.title} date={this.props.date} icon={this.props.icon}>
                <div className={styles.base}>
                    <table className={styles.table}>
                        <tbody>
                            <tr className={styles.tr}>
                                <td className={styles.td}>
                                    <div className={classNames(styles.status, styles.status__open)}>
                                        Новые
                                    </div>
                                </td>
                                <td className={styles.td}>
                                    <div className={styles.points}>
                                        <Points points={this.props.new} />
                                    </div>
                                </td>
                            </tr>
                            <tr className={styles.tr}>
                                <td className={styles.td}>
                                    <div className={classNames(styles.status, styles.status__open)}>
                                        Открытые
                                    </div>
                                </td>
                                <td className={styles.td}>
                                    <div className={styles.points}>
                                        <Points points={this.props.open} />
                                    </div>
                                </td>
                            </tr>
                            <tr className={styles.tr}>
                                <td className={styles.td}>
                                    <div className={classNames(styles.status, styles.status__delivery)}>
                                        Доставляются
                                    </div>
                                </td>
                                <td className={styles.td}>
                                    <div className={styles.points}>
                                        <Points points={this.props.delivery} />
                                    </div>
                                </td>
                            </tr>
                            <tr className={styles.tr}>
                                <td className={styles.td}>
                                    <div className={classNames(styles.status, styles.status__pending)}>
                                        В ожидании
                                    </div>
                                </td>
                                <td className={styles.td}>
                                    <div className={styles.points}>
                                        <Points points={this.props.pending} />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Widget>
        )
    }
}

WidgetStatus.propTypes = propTypes

export default WidgetStatus
