import { postFormAsync } from "./request";

const API_URL = process.env.REACT_APP_API_URL;
export async function updateLoadMediaByCourse({ resource, file }) {
    let formData = new FormData();
    formData.append("resource", resource);
    formData.append("organization", process.env.REACT_APP_ORGANIZATION);
    if (file) formData.append("file", file);
    const url = API_URL + "/media_manager";
    const response = await postFormAsync(url, formData, true);
    return response;
}
