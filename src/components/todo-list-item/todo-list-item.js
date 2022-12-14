import React, {Component} from 'react';
import "./todo-list-item.css";

export default class TodoListItem extends Component {
    render(){
        const {label,onDeleted, onToggleImportant, onToggleDone, important, done} = this.props;
        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }
        return(
            <span className={classNames}>
                <span onClick={onToggleDone}>{label}</span>
                <div className='btn-toolbar'>
                    <button type="button" className="btn btn-outline-danger mr-2 delete" onClick={onDeleted}><i className="fa fa-trash" aria-hidden="true" /></button>
                    <button type="button" className="btn btn-outline-success mr-2 importantly" onClick={onToggleImportant}><i className="fa fa-exclamation" aria-hidden="true" /></button>
                </div>
            </span>
        );
    }
}