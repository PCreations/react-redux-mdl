import React from 'react'


const ProgressBar = ({ indeterminate, progress, buffer }) => (
    <div className={`mdl-progress is-upgraded${indeterminate ? ' mdl-progress--indeterminate' : ''}`}>
        <div className='progressbar bar bar1' style={{ width: `${progress}%` }}></div>
        <div className='bufferbar bar bar2' style={{ width: `${buffer}%` }}></div>
        <div className='auxbar bar bar3' style={{ width: `${100 - progress}%` }}></div>
    </div>
)

ProgressBar.propTypes = {
    indeterminate: React.PropTypes.bool,
    progress: React.PropTypes.number,
    buffer: React.PropTypes.number
}

ProgressBar.defaultProps = {
    indeterminate: false,
    buffer: 100,
    progress: 0
}

export default ProgressBar