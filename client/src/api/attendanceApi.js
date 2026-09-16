import client from "./client";

export const markAttendance = (data) => client.post("/attendance", data);
export const getAttendance = (params) => client.get("/attendance", { params });
