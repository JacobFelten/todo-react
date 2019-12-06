import React from 'react';

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        };

        this.inputChanged = this.inputChanged.bind(this);
        this.submitTask = this.submitTask.bind(this);
    }

    inputChanged(event) {
        const {value} = event.target;
        console.log(value);
        this.setState({task: value});
    }

    submitTask(event) {
        event.preventDefault();
        const {task} = this.state;
        const {onSubmit} = this.props;
        onSubmit(task);
        this.setState({task: ''});
    }

    render() {
        return (
            <div className="row input-area">
                <div className="col-md-1"></div>
                <div className="form-group col-md-9">
                    <input onChange={this.inputChanged} value={this.state.task}
                        type="text" placeholder="New Task" className="form-control" id="addTask"></input>
                </div>
                <div className="form-group col-md-1">
                    <button onClick={this.submitTask} className="btn btn-primary">Add</button>
                </div>
                <div className="col-md-1"></div>
            </div>
        );
    }
}

export default TaskForm;