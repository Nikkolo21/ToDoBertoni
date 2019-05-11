import React, { Component } from 'react'
import TodoElement from './TodoElement';
import TopMenu from './TopMenu';

export default class TodoSection extends Component {
    render() {
        return (
            <div className="main-section">
                <TopMenu />
                <section className="todo-section">
                    <TodoElement />
                    <TodoElement />
                    <TodoElement />
                    <TodoElement />
                    <TodoElement />
                    <TodoElement />
                </section>
            </div>
        )
    }
}
