function Header() {
    return (
        <header className="header">
            <div className="header-inner">
                <div className="header-brand">
                    <div className="header-icon">🎓</div>
                    <div>
                        <div className="header-title">Student Manager</div>
                        <div className="header-subtitle">Tableau de bord</div>
                    </div>
                </div>
                <div className="header-badge">
                    <span className="pulse-dot"></span>
                    Spring Boot API
                </div>
            </div>
        </header>
    );
}

export default Header;
