"use client"

//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';

//import axios
import axios from 'axios';

//import styles
import styles from "./show.module.css"

function PostIndex() {

    //define state
    const [posts, setPosts] = useState([]);

    //useEffect hook
    useEffect(() => {

        //panggil method "fetchData"
        fectData();

    }, []);

    //function "fetchData"
    const fectData = async () => {
        //fetching
        const response = await axios.get('https://skripsibackend-production.up.railway.app/v1/api/news');
        //get response data
        const data = await response.data.data;

        //assign response data to state "posts"
        setPosts(data);
    }

    return (
        <div> 
            <h1 className={styles.title}>Table Data Coffeeshop</h1>
                           
                            <table striped bordered hover className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>NO.</th>
                                        <th>COFFEESHOP NAME</th>
                                        <th>OWNER</th>
                                        <th>ADDRESS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { posts.map((post, index) => (
                                        <tr key={ post.id }>
                                            <td>{ index + 1 }</td>
                                            <td>{ post.coffeeshop_name }</td>
                                            <td>{ post.desc }</td>
                                            <td>{ post.address }</td>
                                      
                                            <td className="text-center"></td>
                                        </tr>
                                    )) }
                                </tbody>
                            </table>
                     </div>
    );
}

export default PostIndex;