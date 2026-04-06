import jwtAxios from "../util/jwtUtil"

export const API_SERVER_HOST = 'http://localhost:8080'

const prefix = `${API_SERVER_HOST}/api/inquiry`

// 단건 조회
export const getOne = async (ino: number | string) => {
    const res = await jwtAxios.get(`${prefix}/${ino}`)
    return res.data
}

// 리스트 (페이징 + 검색)
export const getList = async (pageParam: PageParam) => {
    const res = await jwtAxios.get(`${prefix}/list`, { params: pageParam })
    return res.data
}

// 등록
export const postAdd = async (inquiry: InquiryAdd) => {
    const res = await jwtAxios.post(`${prefix}/`, inquiry)
    return res.data
}

// 삭제
export const deleteOne = async (ino: number) => {
    const res = await jwtAxios.delete(`${prefix}/${ino}`)
    return res.data
}

// 수정
export const putOne = async (inquiry: InquiryModify) => {
    const res = await jwtAxios.put(`${prefix}/${inquiry.ino}`, inquiry)
    return res.data
}

// 관리자 답변
export const putReply = async (ino: number, replyObj: InquiryReply) => {
    const res = await jwtAxios.put(`${prefix}/reply/${ino}`, replyObj)
    return res.data
}