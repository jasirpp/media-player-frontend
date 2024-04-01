import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

export const uploadVideo = async (reqBody)=>{
    // http://localhost:8000/videos
    return await commonAPI("POST",`${serverURL}/videos`,reqBody)
}

export const getAllVideos = async ()=>{
    return await commonAPI("GET",`${serverURL}/videos`,"")
}

export const getAVideo = async (id)=>{
    return await commonAPI("GET",`${serverURL}/videos/${id}`,"")
}

export const deleteAVideos = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}

export const addToHistory  = async (videoDetails)=>{
    return await commonAPI("POST",`${serverURL}/history`,videoDetails)
}

export const getAllHistory  = async ()=>{
    return await commonAPI("GET",`${serverURL}/history`,"")
}

export const deleteHistory  = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/history/{id}`,{})
}

export const addCategory = async (reqBody)=>{
    return await commonAPI("POST",`${serverURL}/categories`,reqBody)
}

// export const getCategory = async (id)=>{
//     return await commonAPI("GET",`${serverURL}/categories/${id}`,"")
// }

export const getAllCategory = async ()=>{
    return await commonAPI("GET",`${serverURL}/categories`,"")
}
export const deleteCategory = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})
}

export const updateCategory = async (id,body)=>{
    return await commonAPI("PUT",`${serverURL}/categories/${id}`,body)
}