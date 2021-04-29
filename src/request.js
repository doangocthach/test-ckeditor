import Axios from "axios";
// import { useUserRole } from "hooks";

function getCookie(name = "access_token") {
    const v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return v ? v[2] : null;
}

export async function postFormAsync(url, data, hasForm = false) {
    try {
        let formData;
        if (hasForm) formData = data;
        else {
            formData = new FormData();
            for (const i in data) {
                formData.append(i, data[i]);
            }
        }
        if (!formData) return;
        const response = await Axios.post(url, formData, {
            headers: {
                Authorization: "Bearer " + getCookie(),
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        return response;
    } catch (ex) {
        const { status = 400, data = {}, errors = [] } = ex.response || {};
        const error = data?.errors || [];
        return {
            status,
            data: ex.response.data || {},
            errors,
            message: error[0]?.message || "",
        };
    }
}

export async function getAsync(url, param = {}, branch = false, is_class = false) {
    if (branch && +(localStorage.selected_school))
        if (!is_class) param.branch = +(localStorage.selected_school)
        else param.school = +(localStorage.selected_school)
    try {
        const response = await Axios.get(url, {
            headers: {
                Authorization: "Bearer " + getCookie(),
                Accept: "application/json",
                "Content-Type": "application/json",
                "Cache-Control": "no-cache"
            },
            params: param,
        });

        return response;
    } catch (ex) {
        const { status = 400, data = {} } = ex.response || {};
        const error = data?.errors || [];
        return {
            status,
            data: {},
            message: error[0]?.message || "",
            code: error[0]?.code || 0,
        };
    }
}

export async function patchAsync(url, data) {
    try {
        for (let i in data) {
            if (data[i] === null) delete data[i];
        }
        const response = await Axios.patch(url, data, {
            headers: {
                Authorization: "Bearer " + getCookie(),
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        return response;
    } catch (ex) {
        const { status = 400, data = {}, errors = [] } = ex.response || {};
        const error = data?.errors || [];
        return {
            status,
            data: ex.response.data || {},
            errors,
            message: error[0]?.message || "",
        };
    }
}

export async function patchNormalAsync(url, data) {
    try {
        const response = await Axios.patch(url, data, {
            headers: {
                Authorization: "Bearer " + getCookie(),
            },
        });
        return response;
    } catch (ex) {
        const { status = 400, data = {}, errors = [] } = ex.response || {};
        const error = data?.errors || [];
        return {
            status,
            data: ex.response.data || {},
            errors,
            message: error[0]?.message || "",
        };
    }
}

export async function patchFormAsync(url, data) {
    try {
        let formData = new FormData();
        for (const i in data) {
            formData.append(i, data[i]);
        }
        const response = await Axios.patch(url, formData, {
            headers: {
                Authorization: "Bearer " + getCookie(),
                "Content-Type": "multipart/form-data",
            },
        });
        return response;
    } catch (ex) {
        const { status = 400, data = {}, errors = [] } = ex.response || {};
        const error = data?.errors || [];
        return {
            status,
            data: ex.response.data || {},
            errors,
            message: error[0]?.message || "",
        };
    }
}

export async function deleteAsync(url) {
    try {
        const response = await Axios.delete(url, {
            headers: {
                Authorization: "Bearer " + getCookie(),
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        return response;
    } catch (ex) {
        const { status = 400, data = {}, errors = [] } = ex.response || {};
        const error = data?.errors || [];
        return {
            status,
            data: ex?.response?.data || {},
            errors,
            message: error[0]?.message || "",
        };
    }
}

export async function postAsync(url, data) {
    try {
        const response = await Axios.post(url, data, {
            headers: {
                Authorization: "Bearer " + getCookie(),
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        return response;
    } catch (ex) {
        const { status = 400, data = {}, errors = [] } = ex.response || {};
        const error = data?.errors || [];
        return {
            status,
            data: ex?.response?.data || {},
            errors,
            message: error[0]?.message || "",
        };
    }
}

export async function putAsync(url, data) {
    try {
        const response = await Axios.put(url, data, {
            headers: {
                Authorization: "Bearer " + getCookie(),
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        return response;
    } catch (ex) {
        const { status = 400, data = {}, errors = [] } = ex.response || {};
        const error = data?.errors || [];
        return {
            status,
            data: ex?.response?.data || {},
            errors,
            message: error[0]?.message || "",
        };
    }
}
