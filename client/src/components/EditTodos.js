import React, {Fragment} from 'react';

const EditTodo = ({todo}) => {
    console.log(todo)
    return (
        <Fragment>
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#myModal">
                Edit
            </button>

            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">Edit Todo </h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div className="modal-body">
                        <input type="text" className="form-control" />
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-warning" data-dismiss="modal">Edit</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                    </div>
                </div>
            </div> 
        </Fragment>
    )
}

export default EditTodo;