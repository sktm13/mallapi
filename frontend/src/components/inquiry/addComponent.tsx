import { useState, type ChangeEvent } from "react";
import { postAdd } from "../../api/inquiryApi";
import ResultModal from "../common/resultModal";
import useCustomMove from "../../hooks/useCustomMove";
import useCustomLogin from "../../hooks/useCustomLogin";



const initState: InquiryAdd = {
    title: '',
    content: '',
    writer: ''
}

function AddComponent() {

    const { loginState } = useCustomLogin();

    const [inquiry, setInquiry] = useState<InquiryAdd>({
        title: '',
        content: '',
        writer: loginState.email // 자동 세팅
    });

    const [result, setResult] = useState<number | null>(null)

    const { moveToList } = useCustomMove()

    const handleChangeInquiry = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setInquiry((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleClickAdd = (): void => {
        postAdd(inquiry)
            .then(result => {
                setResult(result.INO)
                setInquiry({ ...initState })
            }).catch(e => {
                console.error(e)
            })
    }

    const closeModal = () => {
        setResult(null)
        moveToList()
    }

    return (
        <div className="max-w-xl">

            {result && (
                <ResultModal
                    title="등록 완료"
                    content={`${result}번 문의 등록 완료`}
                    callbackFn={closeModal}
                />
            )}

            {/* 입력폼 */}
            <div className="space-y-6">

                {/* TITLE */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Title
                    </label>
                    <input
                        name="title"
                        type="text"
                        value={inquiry.title}
                        onChange={handleChangeInquiry}
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                    />
                </div>

                {/* CONTENT 추가 */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Content
                    </label>
                    <textarea
                        name="content"
                        value={inquiry.content}
                        onChange={handleChangeInquiry}
                        rows={4}
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                    />
                </div>

                {/* 버튼 */}
                <div className="pt-4">
                    <button
                        type="button"
                        onClick={handleClickAdd}
                        className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition"
                    >
                        Add
                    </button>
                </div>

            </div>

        </div>
    );
}

export default AddComponent;