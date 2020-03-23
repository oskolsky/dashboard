/* eslint-disable no-undef */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Clock from 'components/UI/Clock/Clock'

import WidgetPlan from 'containers/WidgetPlan'
import WidgetHome from 'containers/WidgetHome'
import WidgetMembers from 'containers/WidgetMembers'
import WidgetBlock1 from 'containers/WidgetBlock1'
import WidgetBlock2 from 'containers/WidgetBlock2'
import WidgetBlock3 from 'containers/WidgetBlock3'
import WidgetBlock4 from 'containers/WidgetBlock4'
import WidgetStatus from 'containers/WidgetStatus'
import WidgetDay from 'containers/WidgetDay'

import styles from './Dashboard.scss'

const propTypes = {
    errorMessage: PropTypes.string,
    requestDashboard: PropTypes.func.isRequired,
}

class Dashboard extends React.Component {
    componentDidMount() {
        this.intervalId = setInterval(() => this.loadData(), SET_INTERVAL)
        this.loadData()
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    loadData() {
        this.props.requestDashboard()
    }

    render() {
        if (this.props.errorMessage) {
            const classNameBase = classNames(styles.base, {
                [styles.isErrored]: this.props.errorMessage,
            })

            return (
                <div className={classNameBase}>
                    <p>{this.props.errorMessage}</p>
                    <div className={styles.link} onClick={() => this.loadData()}>Обновить</div>
                </div>
            )
        }

        return (
            <div className={styles.base}>
                <div className={styles.logo} />

                <div className={styles.clock}>
                    <Clock />
                </div>

                <div className={styles.inner}>
                    <div className={styles.column}>
                        <div className={classNames(styles.cell, styles['cell__type-1'])}>
                            <WidgetHome title="Прогоноз выполнения плана Bork" />
                        </div>
                        <div className={classNames(styles.cell, styles['cell__type-2'])}>
                            <WidgetPlan title={<div className={styles.borkHome} />} />
                        </div>
                        <div className={classNames(styles.cell, styles['cell__type-3'])}>
                            <WidgetMembers />
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={classNames(styles.cell, styles['cell__type-4'])}>
                            <WidgetBlock1 />
                        </div>
                        <div className={classNames(styles.cell, styles['cell__type-5'])}>
                            <WidgetBlock3 />
                        </div>
                        <div className={classNames(styles.cell, styles['cell__type-6'])}>
                            <WidgetBlock2 />
                        </div>
                        <div className={classNames(styles.cell, styles['cell__type-7'])}>
                            <WidgetBlock4 />
                        </div>
                        <div className={classNames(styles.cell, styles['cell__type-8'])}>
                            <WidgetStatus title="Статус заказов" icon="Шт" />
                        </div>
                        <div className={classNames(styles.cell, styles['cell__type-9'])}>
                            <WidgetDay title="Текущий день" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Dashboard.propTypes = propTypes

export default Dashboard
