//This is a submit event handler function
const handleOnSubmit = (e) => {
    e.preventDefault(); //prevents page from reloading (from throwing away temp data)
    console.log("This is a submission form");
    console.log(e);
}

export default function EmptyForm() {
    return( <div>
        <form action="" onSubmit={handleOnSubmit}>
            <input type="submit" />
        </form>
    </div> )
}