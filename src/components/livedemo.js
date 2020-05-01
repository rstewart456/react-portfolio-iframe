import React, { useState } from 'react'
import './livedemo.css'
import { Icon } from '@mdi/react'
import Spinner from './spinner'
import { mdiCloseCircleOutline } from '@mdi/js'
import { useParams, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const LiveDemo = ({projects}) => {
    const [spinner, setSpinner] = useState(true)

    const Load = () => {
      setTimeout(() => {
        setSpinner(false);
      }, 30)     
    }

    const history = useHistory()

    const {pid} = useParams()

    const projid = projects.find(({id}) => id === pid)

    const proj = {...projid}

    const goBack = () => {
        history.push('/projects')
    }

    return (
      <div>
        <div
          className={
            spinner
              ? 'flex h-screen flex-col justify-center items-center'
              : 'hidden'
          }
        >
          <Spinner />
        </div>
        <div
          id='parent'
          className={
            spinner ? 'hidden' : 'relative h-screen w-screen overflow-hidden'
          }
        >
          <iframe
            onLoad={() => Load()}
            className='h-screen w-full'
            title='projects'
            src={proj.location}
          />
          <button>
            <Icon
              className='text-red-900'
              path={mdiCloseCircleOutline}
              title='Close LiveDemo'
              size={2}
              onClick={() => goBack()}
            ></Icon>
          </button>
        </div>
      </div>
    );
}

LiveDemo.propTypes = {
projects: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    projects: state.projects.project
})

export default connect(mapStateToProps)(LiveDemo)
