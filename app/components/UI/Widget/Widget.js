import React from 'react'
import PropTypes from 'prop-types'

import styles from './Widget.scss'

const propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.node,
    date: PropTypes.string,
    icon: PropTypes.string,
}

class Widget extends React.Component {
    renderHeader() {
        if (!this.props.title) {
            return
        }

        return (
            <div className={styles.header}>
                <div className={styles.title}>
                    {this.props.title}
                    {this.renderDate()}
                </div>
                {this.renderIcon()}
            </div>
        )
    }

    renderDate() {
        if (!this.props.date) {
            return
        }

        return (
            <div className={styles.date}>{this.props.date}</div>
        )
    }

    renderIcon() {
        if (!this.props.icon) {
            return
        }

        return (
            <div className={styles.icon}>{this.props.icon}</div>
        )
    }

    render() {
        return (
            <div className={styles.base}>
                {this.renderHeader()}
                <div className={styles.body}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

Widget.propTypes = propTypes

export default Widget
