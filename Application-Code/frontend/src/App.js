import React from "react";
import Tasks from "./Tasks";
import { Paper, TextField, Checkbox, Button } from "@material-ui/core";
import "./App.css";

class App extends Tasks {
    state = { tasks: [], currentTask: "" };

    render() {
        const { tasks, currentTask } = this.state;
        return (
            <div className="app fade-in">
                <header className="app-header slide-down">
                    <h1>🚀 3-Tier Application Project - To-Do List</h1>
                    <p className="subtitle">
                        Built with MERN Stack & Deployed on AWS EKS
                    </p>
                </header>

                <div className="main-content fade-in-delayed">
                    <Paper elevation={3} className="todo-container">
                        <form onSubmit={this.handleSubmit} className="task-form">
                            <TextField
                                variant="outlined"
                                size="small"
                                className="task-input"
                                value={currentTask}
                                required={true}
                                onChange={this.handleChange}
                                placeholder="Add a task for the 3-Tier Project..."
                            />
                            <Button
                                className="add-task-btn"
                                color="primary"
                                variant="contained"
                                type="submit"
                            >
                                Add Task
                            </Button>
                        </form>

                        <div className="tasks-list">
                            {tasks.map((task) => (
                                <Paper
                                    key={task._id}
                                    className={`task-item ${
                                        task.completed ? "completed-task" : ""
                                    } pop-in`}
                                    elevation={2}
                                >
                                    <Checkbox
                                        checked={task.completed}
                                        onClick={() => this.handleUpdate(task._id)}
                                        color="primary"
                                    />
                                    <div
                                        className={
                                            task.completed
                                                ? "task-text completed"
                                                : "task-text"
                                        }
                                    >
                                        {task.task}
                                    </div>
                                    <Button
                                        onClick={() => this.handleDelete(task._id)}
                                        color="secondary"
                                        variant="outlined"
                                        className="delete-task-btn"
                                    >
                                        Delete
                                    </Button>
                                </Paper>
                            ))}
                        </div>
                    </Paper>
                </div>

                <footer className="footer fade-in-delayed">
                    <p>Created by Prajwal Patil | DevOps 3-Tier Application</p>
                </footer>
            </div>
        );
    }
}

export default App;
