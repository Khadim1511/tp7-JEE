import { useState } from 'react';

function StudentForm({ onSubmit }) {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!nom.trim() || !prenom.trim() || !dateNaissance) return;

        setSubmitting(true);
        await onSubmit({ nom: nom.trim(), prenom: prenom.trim(), dateNaissance });
        setNom('');
        setPrenom('');
        setDateNaissance('');
        setSubmitting(false);
    };

    return (
        <div className="form-card">
            <div className="form-title">
                <span className="form-title-icon">✏️</span>
                Ajouter un étudiant
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Nom</label>
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Ex: Dupont"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Prénom</label>
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Ex: Jean"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Date de naissance</label>
                    <input
                        className="form-input"
                        type="date"
                        value={dateNaissance}
                        onChange={(e) => setDateNaissance(e.target.value)}
                        required
                    />
                </div>
                <button className="btn-submit" type="submit" disabled={submitting}>
                    {submitting ? (
                        <>
                            <span className="spinner" style={{ width: 18, height: 18, borderWidth: 2 }}></span>
                            Ajout en cours...
                        </>
                    ) : (
                        <>➕ Ajouter l&apos;étudiant</>
                    )}
                </button>
            </form>
        </div>
    );
}

export default StudentForm;
