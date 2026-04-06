import { lazy, Suspense } from "react"
import { Navigate } from "react-router"

const Loading = () => <div>Loading....</div>

const InquiryIndex = lazy(() => import("../pages/inquiry/indexPage"))
const InquiryList = lazy(() => import("../pages/inquiry/listPage"))
const InquiryRead = lazy(() => import("../pages/inquiry/readPage"))
const InquiryAdd = lazy(() => import("../pages/inquiry/addPage"))
const InquiryModify = lazy(() => import("../pages/inquiry/modifyPage"))

const inquiryRouter = () => {

    return {
        path: "inquiry",
        Component: InquiryIndex,
        children: [
            {
                path: "list",
                element: <Suspense fallback={<Loading />}><InquiryList /></Suspense>
            },
            {
                path: "read/:ino",
                element: <Suspense fallback={<Loading />}><InquiryRead /></Suspense>
            },
            {
                path: "modify/:ino",
                element: <Suspense fallback={<Loading />}><InquiryModify /></Suspense>
            },
            {
                path: "add",
                element: <Suspense fallback={<Loading />}><InquiryAdd /></Suspense>
            },
            {
                path: "",
                element: <Navigate to={'/inquiry/list'} />
            },
        ]
    }
}

export default inquiryRouter