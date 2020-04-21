import React, {Fragment} from 'react'
import spinner from '../assets/image/spinner.gif'

export default () => (
    <Fragment>
        <img
        src={spinner}
        style={{ width: '200px' }}
        alt='Loading...'
        />
    </Fragment>
)
