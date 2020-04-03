import React from "react";

const Pagination = ({postsPerPage, totalPosts, currentPage, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        pageNumbers.length > 1 && /* Displaying pagination only if more than 1 page*/
        <ul className={"paginationList"}>
            {pageNumbers.map(number => {
                return (
                    <li key={number}>
                        <button onClick={paginate}
                                value={number}
                                className={+currentPage === number ? "active" : ""}>{number}</button>
                    </li>
                )
            })}
        </ul>
    )
};

export default Pagination;