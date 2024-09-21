import './Button.css'

const Button = ({ type = 'button', variant = 'primary', children, ...props }) => {
    return (
        <button className={`btn btn-${variant}`} type={type} {...props}>
            {children}
        </button>
    )
}

export default Button