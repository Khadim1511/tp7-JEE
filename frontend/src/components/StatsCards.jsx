function StatsCards({ count, studentsCount, loading }) {
    const currentYear = new Date().getFullYear();

    return (
        <div className="stats-grid">
            <div className="stat-card blue">
                <div className="stat-header">
                    <div className="stat-icon blue">👥</div>
                    <span className="stat-label">Total</span>
                </div>
                {loading ? (
                    <div className="skeleton skeleton-value"></div>
                ) : (
                    <div className="stat-value blue">{count}</div>
                )}
                <div className="stat-footer">Étudiants enregistrés</div>
            </div>

            <div className="stat-card purple">
                <div className="stat-header">
                    <div className="stat-icon purple">📊</div>
                    <span className="stat-label">Chargés</span>
                </div>
                {loading ? (
                    <div className="skeleton skeleton-value"></div>
                ) : (
                    <div className="stat-value purple">{studentsCount}</div>
                )}
                <div className="stat-footer">Dans la liste actuelle</div>
            </div>

            <div className="stat-card emerald">
                <div className="stat-header">
                    <div className="stat-icon emerald">📅</div>
                    <span className="stat-label">Année</span>
                </div>
                <div className="stat-value emerald">{currentYear}</div>
                <div className="stat-footer">Année académique en cours</div>
            </div>
        </div>
    );
}

export default StatsCards;
