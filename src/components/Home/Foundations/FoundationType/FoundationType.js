import React, {useState} from "react";
import Pagination from "../../../Pagination/Pagination";

const FoundationType = ({text, list}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3;

    // Pagination: get current list of posts to display
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

    // Paginate method: onClick button to change page
    const paginate = (e) => {
        setCurrentPage(e.target.value)
    };

    return (
        <div className={"foundationType_container"}>
            <p>{text}</p>
            {currentPosts.length > 0 && <ul> {/* checking if array is not empty*/}
                {currentPosts.map((value, index) => {
                    return (
                        <li key={index}>
                            <div>
                                <h4>{value.name}</h4>
                                <p>{value.goal}</p>
                            </div>
                            <p>{value.donations.join(", ")}</p>
                        </li>
                    )
                })}
            </ul>}
            <Pagination postsPerPage={postsPerPage}
                        totalPosts={list.length}
                        currentPage={currentPage}
                        paginate={paginate}/>
        </div>
    )
};

export default FoundationType;