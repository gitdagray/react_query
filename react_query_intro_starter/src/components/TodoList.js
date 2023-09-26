import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";  
import { getTodos, addTodo, updateTodo, deleteTodo } from "../api/todosApi.js";
import { FaTrashCan, FaUpload } from "react-icons/fa6"; 

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('');
    const queryClient = useQueryClient();
    
    const {isLoading, isError, error, data: todos} = useQuery('todos', getTodos, {
        select: data => data.sort((a, b) => b.id - a.id)
    });
    
    const addTodoMutation = useMutation(addTodo, {
        onSuccess() {
            // Invalidates cache and refetch
            queryClient.invalidateQueries('todos');
        }
    });

    const updateTodoMutation = useMutation(updateTodo, {
        onSuccess() {
            queryClient.invalidateQueries('todos');
        }
    });

    const deleteTodoMutation = useMutation(deleteTodo, {
        onSuccess() {
            queryClient.invalidateQueries('todos');
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodoMutation.mutate({ userId: 2, title: newTodo, completed:true });
        setNewTodo('');
    }

    let content
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isError) {
        content = <p>{error.message}</p>
    } else {
        content = todos.map((todo) => {
            return (
                <article key={todo.id}>
                    <div className="todo">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            id={todo.id}
                            onChange={() =>
                                updateTodoMutation.mutate({ ...todo, completed: !todo.completed })
                            }
                        />
                        <label htmlFor={todo.id}>{todo.title}</label>
                    </div>
                    <button className="trash" onClick={() => deleteTodoMutation.mutate({ id: todo.id })}>
                        <FaTrashCan />
                    </button>
                </article>
            )
        })
    }

    return (
        <>
            <main>
                <h1>Todo List</h1>
                <form onSubmit={handleSubmit}>
                    <div className="new-todo">
                        <input  type="text" 
                                id="new-todo"
                                placeholder="Enter new todo"
                                value={newTodo}
                                onChange={(event) => {setNewTodo(event.target.value)}}        
                        />
                    </div>
                    <button className="submit">
                        <FaUpload/>
                    </button>
                </form>
                {content}
            </main>
        </>
    );
}

export default TodoList;