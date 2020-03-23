import { connect } from 'react-redux'

import WidgetBlock from 'components/UI/WidgetBlock/WidgetBlock'

const mapStateToProps = (state) => {
    return {
        title: state.dashboard.block4.title,
        date: state.dashboard.block4.date,
        icon: state.dashboard.block4.icon,
        members: state.dashboard.block4.members,
    }
}

const mapDispatchToProps = () => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetBlock)
