import React from 'react'
import {connect} from 'react-redux'

import StyledForm from '../styledComponents/styledForm'
import {getData} from '../actions'

const MonsterForm = props => {

    const handleGetData = event => {
        event.preventDefault();
        props.getData();
    }

    return(
        <StyledForm>
            {props.fetchingData ? (
            <p>Rounding up the beasties</p>):(
            <button onClick={handleGetData}>Get Monsters</button>
            )
            }
        </StyledForm>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
};

export default connect(mapStateToProps, {getData})(MonsterForm);