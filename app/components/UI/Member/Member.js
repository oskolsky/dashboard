import React from 'react'
import PropTypes from 'prop-types'

import styles from './Member.scss'

const propTypes = {
    name: PropTypes.string.isRequired,
}

class Member extends React.PureComponent {
    render() {
        return (
            <div className={styles.base}>
                {this.props.name}
            </div>
        )
    }
}

Member.propTypes = propTypes

export default Member
