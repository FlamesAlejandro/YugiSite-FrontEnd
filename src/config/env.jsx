export const ApiUrl = () => {
    return process.env.NODE_ENV === "development" ? "http://localhost:8000/api": "backend/api"
}