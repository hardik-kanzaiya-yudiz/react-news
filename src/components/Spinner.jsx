import React, { Component } from 'react'
import loader from '../images/loading.gif'

export default class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={loader} alt="no img" />
            </div>
        )
    }
}
