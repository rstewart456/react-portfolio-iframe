import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Projects = ({projects}) => {

    return (
      <div className='bg-orange-200'>
        <div className='text-center text-black text-5xl pt-16'>Projects</div>
        <div className='px-4 lg:px-24 text-center text-2xl text-black'>The Red Close button on lower right side in the LiveDemo Page, will take you back to this page.</div>
        <div className='flex flex-row flex-wrap px-6 justify-between'>
          {projects.map((doc) => (
            <div className='text-black py-6 px-6' key={doc.id}>
              <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                <img
                  className='w-full'
                  src={doc.image}
                  alt='Sunset in the mountains'
                />
                <div className='px-6 py-4 bg-white'>
                  <div className='font-bold text-xl mb-2'>{doc.name}</div>
                  <p className='h-32 text-gray-700 text-base'>
                    {doc.paragraph}
                  </p>
                </div>
                <div className='flex justify-between px-6 py-4 bg-white'>
                  <Link to={`/livedemo/${doc.id}`} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                    Live Demo
                  </Link>
                  <a href={doc.github} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
                    Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

Projects.propTypes = {
projects: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    projects: state.projects.project
})

export default connect(mapStateToProps)(Projects)
