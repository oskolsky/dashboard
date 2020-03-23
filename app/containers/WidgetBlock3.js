import { connect } from 'react-redux'

import WidgetBlock from 'components/UI/WidgetBlock/WidgetBlock'

const mapStateToProps = (state) => {
    return {
        title: state.dashboard.block3.title,
        date: state.dashboard.block3.date,
        icon: state.dashboard.block3.icon,
        members: state.dashboard.block3.members,
    }
}

const mapDispatchToProps = () => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetBlock)
