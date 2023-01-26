import React from "react";
import "./style.css";
import { BsPlayCircle } from "react-icons/bs"

export const ListingCard = ({ price, beds, bath, address, image }) => {
    return (
        <div className="container">
            <div style={{
                background: `url(${image})`
            }} className="imageContainer">
                <div className="topButtons">
                    <div className="saleContainer">
                        <p className="sale">FOR SALE</p>
                    </div>
                    <div className="virtual">
                        <BsPlayCircle />
                        <p>Virtual tour</p>
                    </div>
                </div>
                <div className="bottomButtons">
                    <div className="left">

                    </div>
                    <div className="right">
                        <div></div>
                        <div></div>
                    </div>
                </div>

            </div>
            <div className="descriptionContainer">
                <p style={{
                    color: "blue"
                }}>$ {price}</p>
                <div style={{
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <p style={{
                        margin: 10
                    }}>Beds</p><p style={{
                        margin: 10
                    }}>{beds}</p><p style={{
                        margin: 10
                    }}>Bath</p><p style={{
                        margin: 10
                    }}>{bath}</p>
                </div>
                <p>{address}</p>
            </div>
        </div>
    )
}