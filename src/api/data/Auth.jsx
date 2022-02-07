import { Axios } from '../../config/axios'

const endpoint = "auth/"

const PostLogin = async (data) => {
    return await Axios().post(endpoint, data);
}

export const ApiAuth = {
    PostLogin,
}