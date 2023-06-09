function Pagination({ currentPage, setCurrentPage, totalItems, itemsPerPage, scrollTo }) {
    const element = document.getElementById(scrollTo)

    // Holds the page numbers, thus the buttons numbers
    let pages = [];
    for(let i = 1; i <= Math.ceil(totalItems/itemsPerPage); i++) {
        pages.push(i);
    }

    // Event Handlers
    // On click, set the current page to the number on the button and then scroll to the top of the page
    function handleClick(page){
        setCurrentPage(page);
        if (element !== null) {
            element.scrollIntoView();
          } else {
            window.scrollTo(0, 0);
          }
    }
    
    return(
        <div>
            <ul className="list-style-none flex justify-center py-4 px-auto">
                {pages.map((page, index) => {
                    return(
                        <button
                            key={index}
                            onClick={() => handleClick(page)}
                            className={page === currentPage? 'relative block rounded bg-lavender-200 px-3 py-1.5 text-base font-bold text-white transition-all duration-300' : 'relative block rounded bg-transparent px-3 py-1.5 text-base text-lavender-500 transition-all duration-300 hover:bg-neutral-100'} 
                        >
                            {page}
                        </button>
                    )
                })}
            </ul>
            
        </div>
    )
}

export default Pagination;