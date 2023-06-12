import React from "react";
import HomepageNav from "./HomepageNav";
import './index.css'

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
                            hello1
                        </div>
                        <div className="content-feed">
                            hello2
                        </div>
                    </div>
                    <div className="home-engagement-column">
                        hello3
                    </div>

                </div>
            </div>
        </>
    )
}
