import { useSearchParams } from "react-router";
import ListComponent from "../../components/todo/listComponent";

function ListPage() {

    const [queryParams] = useSearchParams()

    const page: string | null = queryParams.get("page")
    const size: string | null = queryParams.get("size")
    
    return (
        <div className="w-full px-2">

            <div className="text-4xl mb-4">
                Todo List Page {page} {size}
            </div>

            <ListComponent/>
        </div>
    );

}

export default ListPage;