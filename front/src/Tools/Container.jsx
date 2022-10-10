import '../css/style.css'

function Container({children, title, data, type, style}) {

    var dataDiv = data === undefined ? "" : <div className="containerContent">{data}</div>
    var titleDiv = title === undefined ? "" : <div className="containerTitle">{title}</div>
    var childrenDiv = children === undefined ? "" : children

    return (
        <div className={`container ${type}`} style={style}>
            {titleDiv}
            {dataDiv}
            {childrenDiv}
        </div>
    )
}

export default Container