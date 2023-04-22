
function Popup({ visible, header, body, setPopupVariables }){
    if(!visible) return null
    // Event Handlers
    function handleClose(e) {
        setPopupVariables({visible: false})
    }

    return(
        <div className="fixed inset-0 bg-lavender-100 bg-opacity-50 backdrop-blur-sm flex justify-center items-center text-lg">
            
            <div className="block bg-white text-lavender-400 text-left p-6 rounded-lg w-50 px-18">
                <div className="flex justify-between items-center my-4">
                    <em className="text-lavender-200 font-bold  text-4xl">{header}</em>
                    <button className="bg-lavender-400 rounded-lg p-2.5 px-3 h-50 text-white font-extrabold hover:bg-lavender-200" onClick={handleClose}>X</button>
                </div>
                
                <p className="">{body}</p>
            </div>
            
        </div>
    )
}

export default Popup;