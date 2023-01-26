import React from "react";
import { RiAccountCircleLine } from "react-icons/ri"
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
    return (
        <div
            style={{
                margin: 0,
                paddingLeft: 20,
                paddingRight: 20,
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <div>
                <h1>BLAIR OWENS</h1>
            </div>
            <div>
                <ul
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 40,
                    }}
                >
                    <li><NavLink to={"/mlssearch"}>MLS Search</NavLink></li>
                    <li>MLS Search</li>
                    <li>Communities</li>
                    <li>News</li>
                </ul>
            </div>
            <div>
                <RiAccountCircleLine
                    style={{
                        fontSize: 30,
                    }}
                />
            </div>
        </div>
    )
}

export default NavigationBar;
