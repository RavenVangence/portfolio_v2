function NavbarAndDashboard() {

    return (
    <section className="nav-dashboard-container">
        <div className='container'>
            <nav className='nav-container'>
                <ul>
                    <li><h1>Dashboard</h1></li>
                    <li><h1>Projects</h1></li>
                    <li><h1>Contact</h1></li>
                </ul>
            </nav>
            <div className="black-sideband"></div>
            <div className="dashboard-profile">
                <h1>
                    Ndivhuwo Lodrick Munonela
                </h1>
                <p>I am a FullStack Developer based in Pretoria, South Africa.</p>
            </div>
        </div>
    </section>
)
}

export default NavbarAndDashboard;