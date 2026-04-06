interface Inquiry {
    ino: number
    title: string
    content: string
    writer: string
    status: string          // WAIT | DONE
    reply: string | null
    createdDate: string
}

interface InquiryAdd {
    title: string
    content: string
    writer: string
}

interface InquiryModify {
    ino: number
    title: string
    content: string
}

interface InquiryReply {
    reply: string
}