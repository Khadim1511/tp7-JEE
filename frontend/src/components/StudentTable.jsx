import { useState } from 'react';

function StudentTable({ students, onDelete, loading }) {
    const [search, setSearch] = useState('');
    const [deletingId, setDeletingId] = useState(null);

    const filtered = students.filter((s) => {
        const q = search.toLowerCase();
        return (
            s.nom?.toLowerCase().includes(q) ||
            s.prenom?.toLowerCase().includes(q) ||
            String(s.id).includes(q)
        );
    });

    const handleDelete = async (id) => {
        setDeletingId(id);
        await onDelete(id);
        setDeletingId(null);
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return '—';
        const d = new Date(dateStr);
        return d.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    if (loading) {
        return (
            <div className="table-card">
                <div className="table-header">
                    <div className="table-title">
                        <span className="table-title-icon">📋</span>
                        Liste des étudiants
                    </div>
                </div>
                <div className="loading-spinner">
                    <div className="spinner"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="table-card">
            <div className="table-header">
                <div className="table-title">
                    <span className="table-title-icon">📋</span>
                    Liste des étudiants
                </div>
                <span className="table-count">{filtered.length} résultat{filtered.length !== 1 ? 's' : ''}</span>
            </div>

            <div className="search-wrapper">
                <span className="search-icon">🔍</span>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Rechercher par nom, prénom ou ID..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {filtered.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-icon">📭</div>
                    <div className="empty-text">
                        {students.length === 0
                            ? 'Aucun étudiant enregistré'
                            : 'Aucun résultat trouvé'}
                    </div>
                    <div className="empty-sub">
                        {students.length === 0
                            ? 'Ajoutez votre premier étudiant via le formulaire'
                            : 'Essayez un autre terme de recherche'}
                    </div>
                </div>
            ) : (
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Date de naissance</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((student) => (
                                <tr key={student.id} className="row-enter">
                                    <td>
                                        <span className="student-id">#{student.id}</span>
                                    </td>
                                    <td>
                                        <span className="student-name">{student.nom}</span>
                                    </td>
                                    <td>
                                        <span className="student-firstname">{student.prenom}</span>
                                    </td>
                                    <td>
                                        <span className="student-date">{formatDate(student.dateNaissance)}</span>
                                    </td>
                                    <td>
                                        <button
                                            className="btn-delete"
                                            onClick={() => handleDelete(student.id)}
                                            disabled={deletingId === student.id}
                                        >
                                            {deletingId === student.id ? (
                                                <span className="spinner" style={{ width: 14, height: 14, borderWidth: 2 }}></span>
                                            ) : (
                                                <>🗑️ Supprimer</>
                                            )}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default StudentTable;
