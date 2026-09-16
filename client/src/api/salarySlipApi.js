import client from "./client";

export const calculateSlip = (data) => client.post("/salary-slips/calculate", data);
export const generateSlip = (data) => client.post("/salary-slips", data);
export const getSlips = () => client.get("/salary-slips");

