import { useState, useEffect, useCallback } from 'react';
import './App.css';
import Header from './components/Header';
import StatsCards from './components/StatsCards';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';
import YearChart from './components/YearChart';
import Toast from './components/Toast';
import studentService from './services/studentService';

function App() {
  const [students, setStudents] = useState([]);
  const [count, setCount] = useState(0);
  const [yearData, setYearData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const [studentsData, countData, yearStats] = await Promise.all([
        studentService.getAll(),
        studentService.count(),
        studentService.getByYear(),
      ]);
      setStudents(studentsData);
      setCount(countData);
      setYearData(yearStats);
    } catch (err) {
      showToast('Erreur de connexion au serveur', 'error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleAddStudent = async (student) => {
    try {
      await studentService.save(student);
      showToast('Étudiant ajouté avec succès !', 'success');
      fetchData();
    } catch (err) {
      showToast("Erreur lors de l'ajout", 'error');
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      await studentService.delete(id);
      showToast('Étudiant supprimé', 'info');
      fetchData();
    } catch (err) {
      showToast('Erreur lors de la suppression', 'error');
    }
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <StatsCards count={count} studentsCount={students.length} loading={loading} />

        <div className="content-grid">
          <div className="left-column">
            <StudentForm onSubmit={handleAddStudent} />
            <YearChart data={yearData} />
          </div>
          <div className="right-column">
            <StudentTable
              students={students}
              onDelete={handleDeleteStudent}
              loading={loading}
            />
          </div>
        </div>
      </main>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}

export default App;
