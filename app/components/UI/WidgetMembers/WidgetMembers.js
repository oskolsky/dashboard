import React from 'react'
import PropTypes from 'prop-types'

import Widget from 'components/UI/Widget/Widget'
import Member from 'components/UI/Member/Member'
import Error from 'components/UI/Error/Error'

import { formatCounter } from 'helpers/formatting'

import styles from './WidgetMembers.scss'

const propTypes = {
    members: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
            rate: PropTypes.number.isRequired,
        }),
    ),
}

class WidgetMembers extends React.PureComponent {
    renderItems() {
        if (this.props.members.length === 0) {
            return (
                <Error />
            )
        }

        const members1 = this.props.members.slice(0, 8)
        const members2 = this.props.members.slice(8, 16)

        const items1 = members1.map((item, idx) => (
            <div key={`member-${idx}`} className={styles.item}>
                <div className={styles.member}>
                    <Member name={item.name} />
                </div>
                <div className={styles.progress}>
                    <div className={styles.filler} style={{ width: `${item.rate}%` }} />
                </div>
                <div className={styles.summary}>
                    <span className={styles.value}>{formatCounter(item.value)}</span>
                    <span className={styles.rate}>{Math.round(item.rate)}%</span>
                </div>
            </div>
        ))

        const items2 = members2.map((item, idx) => (
            <div key={`member-${idx}`} className={styles.item}>
                <div className={styles.member}>
                    <Member name={item.name} />
                </div>
                <div className={styles.progress}>
                    <div className={styles.filler} style={{ width: `${item.rate}%` }} />
                </div>
                <div className={styles.summary}>
                    <span className={styles.value}>{formatCounter(item.value)}</span>
                    <span className={styles.rate}>{Math.round(item.rate)}%</span>
                </div>
            </div>
        ))

        return (
            <div className={styles.wrapper}>
                <div className={styles.items}>
                    {items1}
                </div>
                <div className={styles.items}>
                    {items2}
                </div>
            </div>
        )
    }

    render() {
        return (
            <Widget>
                <div className={styles.base}>
                    {this.renderItems()}
                </div>
            </Widget>
        )
    }
}

WidgetMembers.propTypes = propTypes

export default WidgetMembers
