import { useEffect, useState } from "react";
import { deletePost, getPost } from "../API/postAPI";
import "../App.css"
import { Form } from "./Form";


export const Posts = () => {

    const [data, setData] = useState([])
    const [updateDataApi, setUpdateDataApi] = useState({})


    // console.log(getPost());
    const getPostData = async () => {
        const res = await getPost()
        console.log(res.data);//api path
        setData(res.data)
    }

    useEffect(() => {
        getPostData()
    }, [])



    //for delete post
    const handleDeletePost = async (id) => {
        try {
            const res = await deletePost(id)
            if (res.status === 200) {
                const newUpdatedPost = data.filter((currPost) => {
                    return currPost.id !== id;
                })
                setData(newUpdatedPost)
            }
        } catch (error) {
            console.log(error);
        }
    }


    //fro update input field
    const handleUpdatePost = (currEle) => setUpdateDataApi(currEle)

    return (
        <>
            <section className="section-form">
                <Form
                    data={data}
                    setData={setData}
                    updateDataApi={updateDataApi}
                    setUpdateDataApi={setUpdateDataApi}
                />
            </section>
            <section className="section-post">
                <ol>
                    {
                        data.map((currEle) => {

                            const { id, title, body } = currEle
                            return (
                                <li key={id}>
                                    <p>Title: {title}</p>
                                    <p>Body: {body}</p>
                                    <button onClick={() => handleUpdatePost(currEle)}>Edit</button>
                                    <button
                                        className="btn-delete"
                                        onClick={() => handleDeletePost(id)}>Delete
                                    </button>
                                </li>
                            )
                        })
                    }
                </ol>
            </section>
        </>

    )
}