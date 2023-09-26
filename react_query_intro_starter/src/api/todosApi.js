// import axios from 'axios';

// const todosApi = 'http://localhost/3500';

// export const getTodos = async () => {
//     const response = await axios.get(`${todosApi}/todos`)
//     return response.data;
// }

// export const addTodo = async (todo) => {
//     return await axios.post(`${todosApi}/todos`, todo);
// }

// export const updateTodo = async (id) => {
//     return await axios.patch(`${todosApi}/todos/${id}`, id);
// }

// export const deleteTodo = async (id) => {
//     return await axios.delete(`${todosApi}/todos/${id}`, id);
// }

// export default todosApi;

import axios from "axios"

const todosApi = axios.create({
    baseURL: "http://localhost:3500"
})

export const getTodos = async () => {
    const response = await todosApi.get("/todos")
    return response.data
}

export const addTodo = async (todo) => {
    return await todosApi.post("/todos", todo)
}

export const updateTodo = async (todo) => {
    return await todosApi.patch(`/todos/${todo.id}`, todo)
}

export const deleteTodo = async ({ id }) => {
    return await todosApi.delete(`/todos/${id}`, id)
}

export default todosApi 