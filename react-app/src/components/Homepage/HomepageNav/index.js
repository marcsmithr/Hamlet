import './index.css'

export default function HomepageNav(){
    return(
        <>
            <div className="home-page-nav">
                <div className="home-page-nav-causes">
                    <i class="fa-solid fa-trowel-bricks nav-icon"></i>
                    <span className='nav-name'>Causes</span>
                </div>
                <div className="home-page-nav-groups">
                    <i class="fa-solid fa-users-line nav-icon"></i>
                    <span className='nav-name'>Groups</span>
                </div>
                <div className="home-page-nav-events">
                    <i class="fa-solid fa-calendar-days nav-icon"></i>
                    <span className='nav-name'>Events</span>
                </div>
                <div className="home-page-nav-world">
                    <i class="fa-solid fa-earth-americas nav-icon"></i>
                    <span className='nav-name'>World</span>
                </div>
            </div>
        </>
    )
}
