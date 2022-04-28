import './Popup.css';

export const Popup = ({ children, className, visible, onClose }) => {
    const cn = `popup ${visible ? 'popup_visible' : ''}`;

    const containerClassName = `popup__container ${className ? className : ''}`;

    return (
        <div className={cn}>
            <div className="popup__overlay" onClick={onClose}/>
            <div className={containerClassName}>{children}</div>
        </div>
    )
}