import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../css/navbarAuth.css"

class ButtonNavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            classPicked: this.props.classPicked,
            types: ["Login", "Register"],
            links: ["/login", "/register"],
            active: this.props.active,
        }
        this.switchClass = this.switchClass.bind(this);
    }

    switchClass(type) {
        this.setState({ active: type, classPicked: "activeButton" });
        console.log(this.state);
    }

    render() {
        return (
            <div className="navbarAuth">
                {this.state.types.map((type) => (
                    <Link to={this.state.links[this.state.types.indexOf(type)]}>
                        <button
                            type="button"
                            className={this.state.active === type ? "activeButton" : "passiveButton"}
                            key={type}
                            active={this.state.active === type}
                            onClick={() => this.switchClass(type)}
                        >
                            {type}
                        </button>
                    </Link>
                ))}
            </div>
        )
    }
}

export default ButtonNavBar;