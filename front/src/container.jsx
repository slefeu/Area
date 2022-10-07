import './css/style.css'

function Container({title, data, type}) {
    return (
        <div className={`container ${type}`}>
            <div className="containerTitle">{title}</div>
            <div className="containerContent">{data}</div>
        </div>
    )
}

export default Container