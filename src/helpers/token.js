export const saveToken = (token) => {
    window.localStorage.setItem("token", "Bearer " + token)
}
export const getToken = () => window.localStorage.getItem("token")