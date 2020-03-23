import { connect } from 'react-redux'

import WidgetBlock from 'components/UI/WidgetBlock/WidgetBlock'

const mapStateToProps = (state) => {
    return {
        title: state.dashboard.block1.title,
        date: state.dashboard.block1.date,
        icon: state.dashboard.block1.icon,
        members: state.dashboard.block1.members,
    }
}

const mapDispatchToProps = () => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetBlock)
