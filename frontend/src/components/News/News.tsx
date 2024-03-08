import axios from "axios";
import {useEffect, useState} from "react"

interface fieldType{
    search: string
}
const News = () => {
    const [data, setData] = useState<any>({});
    const [field, setField] = useState<fieldType>({search: ''});
    const [isFunctionActive, setIsFunctionActive] = useState(true)

    useEffect(() => {
        const timeId = setInterval(() => {
            const fetchConstantData = async () => {
                try{
                    const response = await axios.get(`http://localhost:8000/core/news`)
                    const fetched_data = response.data;
                    setData(fetched_data)
                } catch(error) {
                    console.error("Error Fetching Data", error)
                }
            }
            if (isFunctionActive){
                fetchConstantData();
            }
            else{
                return;
            }
        }, 10000);

        return () => clearInterval(timeId)
    }, [isFunctionActive])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const fetchData = async () => {
            try {
                const response = await axios.post(`http://localhost:8000/core/news`, {
                    query: field
                })
                const fetched_data = response.data;
                setData(fetched_data)
                setIsFunctionActive(false)
                console.log(data)
            } catch (error) {
                console.error("Error fetching Data", error);
            }
        }
        fetchData()
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setField((prevField) => ({
            ...prevField,
            [name]: value
        }));

        console.log(field)
    }

    console.log(data)
    return (
        <div className="flex-col bg-componentBg border-r-2 border-slate-500 h-screen z-40 overflow-y-auto pb-10">
            <div className="flex font-bold text-textColor text-xl justify-center py-2">
                News
            </div>
            <form onSubmit={handleSubmit} className="flex max-w-lg mx-auto justify-center py-7">
                <div className="flex w-screen">
                    <div className="relative w-full">
                        <input name = "search" onChange={handleInputChange} type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search the topic" />
                        <button type="submit" className="absolute top-0 -end-10 p-2.5 text-sm font-medium h-full text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap= "square" stroke-linejoin="square" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>

            <div className="relative border m-1 break-words">
                {data.status === 'ok' && data.articles ? (
                    data.articles.map((article: any, i: number) => (
                        <div key={i} className="news ml-2 break-words">
                            <div className="font-medium text-xl text-textColor break-words">{article?.title}
                                <div className="items-left p-1 break-words">
                                    <div className="">
                                        <span className="text-sm text-textColor break-words">URL: </span>
                                        <a href={article?.url} target="_blank" rel="noopener noreferrer" className="visited: text-indigo-500"><span className="text-sm text-gray-500 font-bold underline">{article?.url}</span></a>
                                    </div>
                                    <div className="">
                                        <span className="text-sm text-textColor break-words">Source: </span>
                                        <span className="text-xs text-gray-500 font-bold break-words">{article?.source?.name}</span>
                                    </div>
                                </div>
                            </div>
                            <br /><br />
                        </div>
                    ))
                    ) : (
                // Render something else or nothing if data is not in the expected format
                    null
                )}
            </div>

        </div>
    )
}

export default News;