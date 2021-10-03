const CustDate = (props) => {
    return (
        <p>{props.date.getMonth() + 1}/{props.date.getDate() + 1}/{props.date.getFullYear()}</p>
    )
};

export default CustDate;