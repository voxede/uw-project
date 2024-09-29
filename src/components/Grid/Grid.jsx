import './Grid.css'

const Grid = ({ type = 'auto', children }) => {
    return <div className={`grid-container grid-${type}`}>{children}</div>
}

export default Grid