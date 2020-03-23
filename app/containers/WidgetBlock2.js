import { connect } from 'react-redux'

import WidgetBlock from 'components/UI/WidgetBlock/WidgetBlock'

const mapStateToProps = (state) => {
    return {
        title: state.dashboard.block2.title,
        date: state.dashboard.block2.date,
        icon: state.dashboard.block2.icon,
        members: state.dashboard.block2.members,
    }
}

const mapDispatchToProps = () => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetBlock)
