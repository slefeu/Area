import './css/style.css'

function Container({title, data}) {
    return (
        <div className="container">
            <div className="containerTitle">{title}</div>
            <div className="containerContent">{data}</div>
        </div>
    )
}

export default Container