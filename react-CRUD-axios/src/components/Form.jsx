import { useEffect, useState } from "react"
import { postData, updateData } from "../API/postAPI"

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {

    const [addData, setAddData] = useState({
        title: "",
        body: ""
    })


    let isEmpty = Object.keys(updateDataApi).length === 0;

    //for update data in input

    useEffect(() => {
        updateDataApi &&
            setAddData({
                title: updateDataApi.title || "",
                body: updateDataApi.body || ""

            })
    }, [updateDataApi])

    const handleInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setAddData((prev) => {
            // console.log(prev);

            return {
                ...prev,
                [name]: value
            }
        })
    }


    const addPostData = async () => {
        const res = await postData(addData)
        console.log("res", res);

        if (res.status === 201) {
            setData([...data, res.data])
            setAddData({ title: "", body: "" })
        }
    }


    const updatePostData = async() =>{
        try {
            const res = await updateData(updateDataApi.id,addData)
            console.log(res);

            setData((prev)=>{
                return prev.map((currEle)=>{
                    return currEle.id === res.data.id ? res.data : currEle;
                })
            })

            setAddData({title:"" , body:""})
            setUpdateDataApi({}) //convert button add edit after change
            
        } catch (error) {
            console.log(error);
            
        }
    }

    //for submit form

    const handleFormSubmit = (e) => {
        e.preventDefault()
        
        //for lnow what is button edit or add
        const action = e.nativeEvent.submitter.value ;
        if(action==="Add"){
        addPostData()
        }else if(action==="Edit"){
            updatePostData()
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="title"></label>
                <input
                    type="text"
                    autoComplete="off"
                    id="title"
                    name="title"
                    placeholder="Add Title"
                    value={addData.title}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="body"></label>
                <input
                    type="text"
                    autoComplete="off"
                    id="body"
                    name="body"
                    placeholder="Add Post"
                    value={addData.body}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit" value={isEmpty ? "Add" : "Edit"} >
                {isEmpty ? "Add" : "Edit"}
            </button>
        </form>
    )
}