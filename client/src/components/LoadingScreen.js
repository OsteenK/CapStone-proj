import React from "react";

function LoadingScreen() {
    return (
        <div className="mx-50 flex justify-center items-center h-screen w-screen">
            <h1 className="inline-block h-32 w-32 animate-spin rounded-full border-8 border-dashed border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"></h1>
        </div>
    )
}

export default LoadingScreen;