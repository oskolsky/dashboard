import React from 'react'

import styles from './Error.scss'

class Error extends React.PureComponent {
    render() {
        return (
            <div className={styles.base}>
                Нет данных для отображения
            </div>
        )
    }
}

export default Error
