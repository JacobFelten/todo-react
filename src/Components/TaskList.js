import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const {tasks, toggleTaskStatus, deleteTask} = this.props;
        return (
            <div>
                <ul className="list-group" id="taskList">
                    { tasks.map((task, index) =>
                        <Task task={task} index={index} key={index}
                         toggleTaskStatus={toggleTaskStatus}
                          deleteTask={deleteTask} />
                    )}
                </ul> 
            </div>
        );
    }
}

export default TaskList;