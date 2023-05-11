import React from "react";

const Paginado = ({ gamesPerPage, allGames, paginated }) => {
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(allGames / gamesPerPage); i++) {
    pageNumbers.push(i + 1);
  }
  return (
    <div>
      <nav>
        <ul>
          {pageNumbers &&
            pageNumbers.map((number) => {
              return (
                <li key={number}>
                  {" "}
                  <a onClick={() => paginated(number)}>
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

export default Paginado;
