const Input = (props) => {
    return (
        <input 
            className={styles.input}
            type={props.type || ''}
            name={props.name || ''}
            placeholder={props.placeholder || ''}
            value={props.value || ''}
            onChange={props.onChange} />
    )
};

export default Input;