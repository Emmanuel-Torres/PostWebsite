const MasterDetailsView = (props) => {
    return (
        <>
            <h1>{props.post?.title}</h1>
            <h3>{props.post?.author}</h3>
            <p>{props.post?.content}</p>
            <p>{props.post?.date.toString()}</p>
        </>
    )
};

export default MasterDetailsView;