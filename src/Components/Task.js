import React from 'react';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        this.onToggleTaskStatus = this.onToggleTaskStatus.bind(this);
        this.onDeleteTask = this.onDeleteTask.bind(this);
    }
    
    onDeleteTask(event) {
        event.preventDefault();
        const {index, deleteTask} = this.props;
        deleteTask(index);
    }

    onToggleTaskStatus(event) {
        event.preventDefault();
        const {index, toggleTaskStatus} = this.props;
        toggleTaskStatus(index);
    }

    render() {
        const style = "col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text ";
        const {task} = this.props;
        const checked = task.isComplete ? "checked" : "";
        return (
                <li className="list-group-item checkbox">
                    <div className="row">
                    <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                        <label>
                            <input checked={checked} id="toggleTaskStatus" type="checkbox" value="" 
                                onChange={this.onToggleTaskStatus}
                                 />
                        </label>
                    </div>
                    <div className={style + (task.isComplete ? "complete" : "")}>
                        {task.task}
                    </div>
                    <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                        <a className="" href="/" onClick={this.onDeleteTask}>
                            <i id="deleteTask" className="delete-icon glyphicon glyphicon-trash"></i>
                        </a>
                    </div>
                    </div>
                </li>
        );
    }
}

export default Task;