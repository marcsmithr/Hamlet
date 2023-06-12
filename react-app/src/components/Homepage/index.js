import React from "react";
import HomepageNav from "./HomepageNav";

export default function HomePage(){
    return (
        <>
            <div className="home-page-body">
                <div className="home-page-content">
                    <div className="home-navigational-column">
                        <HomepageNav/>
                    </div>
                    <div className="home-content-column">
                        <div className="create-content">

                        </div>
                        <div className="content-feed">

                        </div>
                    </div>
                    <div className="home-engagement-column">

                    </div>

                </div>
            </div>
        </>
    )
}
