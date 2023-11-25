function MessageComponent({showMessage}) {
    return (
        <div>
            {showMessage && <p>this is the only way</p>}
        </div>
    );
}
export default MessageComponent;