import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import StyledName from '../styledComponents/styledName'
import {getMonster} from '../actions'


const MonsterName = props => {

    const handleGetData = event => {
        event.preventDefault();
        console.log(props.url)
        console.log(props.selectedMonster)
        props.getMonster(props.url);
    }
    return(
        <StyledName onClick={handleGetData}>
            <Link to={`/${props.name}`}>
                <h4>{props.name}</h4>
            </Link>
        </StyledName>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData,
        selectedMonster: {...state.selectedMonster}
    };
};

export default connect(mapStateToProps, {getMonster})(MonsterName);