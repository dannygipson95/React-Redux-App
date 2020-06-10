import React from 'react';
import {connect} from 'react-redux'

import MonsterName from './monsterName'
import StyledList from '../styledComponents/styledList'

const MonsterList = props => {
    console.log(props)
    return(
    <StyledList>
      {props.error ? (<div className='error'>{props.error}</div>):(props.monsters.map(monster => {
        return(
        <MonsterName name={monster.name} url={monster.url}/>
        )
      }))}
    </StyledList>
    )
  }
  
  const mapStateToProps = state => {
    return {
      monsters: state.monsters,
      error: state.error
    }
  }
  
  export default connect(mapStateToProps, {})(MonsterList)