import React from 'react'
import {connect} from 'react-redux'

const MonsterCard = props =>{
    return(
    <h1>{props.name}</h1>
    )
}

const mapStateToProps= state =>{
    return{
        name: state.selectedMonster.name
    }
}

export default connect(mapStateToProps, {})(MonsterCard)