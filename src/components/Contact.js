const Contact = () => {
    return (
        <div>
            <h1 className="font-bold black p-11 text-4xl">Contact us page </h1>
            <form>
                <input 
                    type="text" 
                    className="text-xl font-medium m-4 p-2 bg-gray-300 border border-black" 
                    placeholder="Name"
                />
                <input 
                    type="text" 
                    className="text-xl font-medium m-4 p-2 bg-gray-300 border border-black" 
                    placeholder="Type your message"
                />
                <button className="font-bold bg-green-400 p-4 cursor-pointer rounded-2xl">Submit</button>
            </form>
        </div>
    )
}

export default Contact;