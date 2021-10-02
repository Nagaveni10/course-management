import React from 'react'
import { Link } from 'react-router-dom'
import { deleteTopic } from '../../actions/topicAction'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'

const Topic = (props) => {
    
    const { id, course, topicTitle, description, filename, topicDuration, date } = props.topic

    let filenamenew = filename.replace(/^.*[\\\/]/, '')
    
    let extension = filename.split('.')[1]
    
    const handleDelete = (e) => {

        e.preventDefault()
        props.deleteTopic(props.topic.id)
    }
   
    return (
        <> 
            <div style={{display:'flex', flexDirection:'column'}}>
            <div className="align-items-start ">
                <div className="card-header text-center mb-2" style={{backgroundColor:'#c7dbf9'}}>
                    <b>Course: {course}</b>
                </div>

                <h6>Topic:{topicTitle}</h6>
                <h6>Description: {description}</h6>
                <h6 >FileName:{extension === 'pdf' ? <i className="bi bi-file-pdf"></i> : <i className="bi bi-file-play"></i>}&nbsp; {filenamenew} &nbsp;
                    <Link to={filename} target="_blank" download> <span style={{ fontSize: '1.5rem' }}><i class="bi bi-download"></i></span></Link>
                </h6>
                <h6>Duration(min):{topicDuration}</h6>
                <h6>Date:{date}</h6>
            </div>
            <div style={{marginBottom:'5px', position:'absolute', bottom:'0'}}>
                <div className="btn-group gap-2 card-footer btn-group-justified align-items-center " style={{ width: '100%', backgroundColor:'#c7dbf9'}}>
                    <Link to={`/updatetopic/${id}`} >
                        <button type="button" className="btn btn-primary w-10 border rounded-3" onMouseOver={(e)=> e.target.style.backgroundColor='#1b61ca'} onMouseOut={(e)=>e.target.style.backgroundColor='#0d6efd'}  style={{ width: '195px', color:'black', fontWeight:'bold'}}>Update</button>
                    </Link>
                    <button type="button" style={{ width: '195px',  color:'black', fontWeight:'bold'  }} className="btn btn-primary w-10 border rounded-3" onClick={handleDelete} onMouseOver={(e)=> e.target.style.backgroundColor='#1b61ca'} onMouseOut={(e)=>e.target.style.backgroundColor='#0d6efd'}>Delete</button>
                </div>
            </div>
            </div>
        </>
    )

}
Topic.propTypes = {
    topic: Proptypes.object.isRequired,
    deleteTopic: Proptypes.func.isRequired
}

export default connect(null, { deleteTopic })(Topic);