import { useEffect, useState } from "react";
import { deletePost, getPost } from "../API/postAPI";
import "../App.css"
import { Form } from "./Form";


export const Posts = () => {

    const [data, setData] = useState([])

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

    return (
        <>
        <section className="section-form">
            <Form data={data} setData={setData} />
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
                                    <button>Edit</button>
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