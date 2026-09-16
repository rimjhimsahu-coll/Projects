import client from "./client";

export const getEmployees = () => client.get("/employees");
export const addEmployee = (data) => client.post("/employees", data);
export const deleteEmployee = (id) => client.delete(`/employees/${id}`);
