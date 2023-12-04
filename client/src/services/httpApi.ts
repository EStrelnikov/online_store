import axios, { AxiosRequestConfig } from "axios";

const baseUrl = "http://localhost:5000/api";

const httpApi = {
    async get<T>(url: string, params?: AxiosRequestConfig): Promise<T> {
        const { data } = await axios.get<T>(baseUrl + url, params);
        return data;
    },

    async post<T, R>(url: string, body: R, params?: AxiosRequestConfig): Promise<T> {
        const { data } = await axios.post<T>(baseUrl + url, body, params);
        return data;
    },

    async put<T, R>(url: string, body: R, params?: AxiosRequestConfig): Promise<T> {
        const { data } = await axios.put<T>(baseUrl + url, body, params);
        return data;
    },

    async delete<T>(url: string, params?: AxiosRequestConfig): Promise<T> {
        const { data } = await axios.delete<T>(baseUrl + url, params);
        return data;
    },

};

export default httpApi;
