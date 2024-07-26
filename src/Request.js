
import axios from "axios"

export const GetBaseUrl = async () => {
    console.log("Getting base url")
    let baseUrl = "http://localhost:8080"
    try {
        await axios.get(baseUrl)
        console.log("Base URL: ", baseUrl)
        return baseUrl
    } catch(error) {
        console.error("Error: ", error.message)
        try {
            baseUrl = "https://backend-lxkjskx52a-uc.a.run.app"
            console.log("Trying base url: ", baseUrl)
            response = await axios.get(baseUrl)
            console.log("Base URL: ", baseUrl)
            return baseUrl
        } catch(error) {
            console.error("Error: ", error.message)
            return "ERROR"
        }
    }
}

export const getUser = async (baseUrl , username) => {
    let url = baseUrl + "/user/" + username
    try {
        let response = await axios.get(url)
        return response.data
    } catch (error) {
        return { error: error.message }
    }
}

export const getUsers = async (baseUrl) => {
    let url = baseUrl + "/users"
    try {
        let response = await axios.get(url)
        return response.data
    } catch (error) {
        return { error: error.message }
    }
}

export const postUser = async (baseUrl, username, password) => {
    let url = baseUrl + "/users"
    try {
        let response = await axios.post(url,
            {
                username: username,
                password: password
            }
        )
        return response.data
    } catch (error) {
        return { error: error.message }
    }
}

export default Request