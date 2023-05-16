import React from "react";
import "./Paginated.css"
const Paginated = ({ gamesPerPage, allGames, paginated }) => {
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(allGames / gamesPerPage); i++) {
    pageNumbers.push(i + 1);
  }
  return (
    <div className="paginated-box">
      <nav>
        <ul className="paginated-ul">
          {pageNumbers &&
            pageNumbers.map((number) => {
              return (
                <li key={number}>
                  {" "}
                  <a className="anchor-paginated" onClick={() => paginated(number)}>
                    {number}
                    {/* "ver mas" */}
                  </a>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
};

export default Paginated;
