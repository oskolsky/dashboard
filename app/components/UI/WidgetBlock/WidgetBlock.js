import React from 'react'
import PropTypes from 'prop-types'

import Error from 'components/UI/Error/Error'
import Member from 'components/UI/Member/Member'
import Points from 'components/UI/Points/Points'
import Widget from 'components/UI/Widget/Widget'

import styles from './WidgetBlock.scss'

const propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    icon: PropTypes.string,
    members: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            value1: PropTypes.number.isRequired,
            type: PropTypes.oneOf(['positive', 'negative']),
        }),
    ),
}

class WidgetBlock extends React.PureComponent {
    renderMembers() {
        if (this.props.members.length === 0) {
            return (
                <Error />
            )
        }

        return (
            <table className={styles.table}>
                <tbody>
                    {this.props.members.map((member, idx) => (
                        <tr key={`member-${idx}`} className={styles.tr}>
                            <td className={styles.td}>
                                <Member name={member.name} />
                            </td>
                            <td className={styles.td}>
                                <div className={styles.points}>
                                    <Points points={member.value1} type={member.type} />
                                    {member.value2 && <Points points={member.value2} type={member.type} />}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

    render() {
        return (
            <Widget title={this.props.title} date={this.props.date} icon={this.props.icon}>
                <div className={styles.base}>
                    {this.renderMembers()}
                </div>
            </Widget>
        )
    }
}

WidgetBlock.propTypes = propTypes

export default WidgetBlock
