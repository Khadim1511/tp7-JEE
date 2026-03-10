const API_BASE = 'http://localhost:8080/students';

const studentService = {
    async getAll() {
        const res = await fetch(`${API_BASE}/all`);
        if (!res.ok) throw new Error('Erreur lors du chargement des étudiants');
        return res.json();
    },

    async save(student) {
        const res = await fetch(`${API_BASE}/save`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student),
        });
        if (!res.ok) throw new Error("Erreur lors de l'ajout de l'étudiant");
        return res.json();
    },

    async delete(id) {
        const res = await fetch(`${API_BASE}/delete/${id}`, {
            method: 'DELETE',
        });
        if (!res.ok) throw new Error("Erreur lors de la suppression");
        return true;
    },

    async count() {
        const res = await fetch(`${API_BASE}/count`);
        if (!res.ok) throw new Error('Erreur lors du comptage');
        return res.json();
    },

    async getByYear() {
        const res = await fetch(`${API_BASE}/byYear`);
        if (!res.ok) throw new Error('Erreur lors du chargement des stats');
        return res.json();
    },
};

export default studentService;
