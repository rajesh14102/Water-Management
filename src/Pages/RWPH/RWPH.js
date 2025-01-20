import React from "react";
import "./RWPH.css";
import Header from "../Header/Header";

const RWPH = () => {
    return (
        <div>
            <Header />
            <div className="oht-container">
                <div className="oht-wrapper">
                    {/* Tank */}
                    <div className="oht-tank">
                        <div className="oht-tank-label">OHT</div>
                    </div>

                    {/* Stand */}
                    <div className="oht-stand">
                        <div className="stand-pillar"></div>
                        <div className="stand-pillar"></div>
                        <div className="stand-pillar"></div>
                        <div className="stand-pillar"></div>
                    </div>

                    {/* Basement */}
                    <div className="oht-basement"></div>
                </div>
            </div>
        </div>
    );
};

export default RWPH;
