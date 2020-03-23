import { connect } from 'react-redux'

import WidgetMembers from 'components/UI/WidgetMembers/WidgetMembers'

const mapStateToProps = (state) => {
    return {
        members: state.dashboard.members,
    }
}

const mapDispatchToProps = () => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetMembers)
