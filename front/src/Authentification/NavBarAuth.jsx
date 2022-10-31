import React, { Component } from "react"
import { Link } from "react-router-dom"
import { FaMoon } from "react-icons/fa"
import SwitchTheme from "../Tools/SwitchTheme.jsx"

import "../css/navbarAuth.css"

class ButtonNavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            classPicked: this.props.classPicked,
            types: ["Login", "Register"],
            links: ["/login", "/register"],
            active: this.props.active,
            isDark: this.props.dark,
        }
        this.switchClass = this.switchClass.bind(this);
        this.switchTheme = this.switchTheme.bind(this);
    }

    switchClass(type) {
        this.setState({ active: type, classPicked: "activeButton" });
    }

    switchTheme() {
        var newValue = !this.state.isDark;
        this.setState({ isDark: newValue })
        SwitchTheme();
    }

    render() {
        return (
            <div className="navbarAuth">
                <button className="themeButton" onClick={() => this.switchTheme()}>
                    <FaMoon
                        style={{
                            fill: this.state.isDark ? "white" : "black",
                        }}
                    ></FaMoon>
                </button>
                {
                    this.state.types.map((type, i) => (
                        <Link to={this.state.links[this.state.types.indexOf(type)]} key={i}>
                            <button
                                type="button"
                                className={`button ${this.state.active === type ? "active" : ""}`}
                                key={type}
                                onClick={() => this.switchClass(type)}
                            >
                                {type}
                            </button>
                        </Link>
                    ))
                }
            </div >
        )
    }
}

export default ButtonNavBar;