import axios from "axios"

const baseUrl = "https://jsonplaceholder.typicode.com/";

//Create Task
export const createTask = (data) => {
    return axios.post(baseUrl + 'todos', data);
}

//Get All Tasks
export const getTasks = () => {
    return axios.get(baseUrl + 'todos');
}

//Edit Task
export const editTask = (data) => {
    return axios.put(baseUrl + 'todos/' + data.id, data);
}

//Delete Task
export const deleteTask = (id) => {
    return axios.delete(baseUrl + 'todos/' + id);
}