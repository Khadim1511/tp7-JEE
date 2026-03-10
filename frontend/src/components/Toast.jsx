function Toast({ message, type, onClose }) {
    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️',
    };

    return (
        <div className={`toast ${type}`} onClick={onClose}>
            <span>{icons[type] || 'ℹ️'}</span>
            <span>{message}</span>
        </div>
    );
}

export default Toast;
