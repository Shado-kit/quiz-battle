document.addEventListener('DOMContentLoaded', () => {
    // Gestion de l'affichage des catégories si mode aléatoire
    const questionModeRadios = document.querySelectorAll('input[name="questionMode"]');
    const categorySection = document.getElementById('categorySection');
  
    questionModeRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        categorySection.classList.toggle('hidden', e.target.value !== 'random');
      });
    });
  
    // Sauvegarde du quiz
    document.getElementById('saveBtn').addEventListener('click', () => {
      const quizTitle = document.getElementById('quizTitle').value;
      const sessionType = document.querySelector('input[name="sessionType"]:checked').value;
      const questionMode = document.querySelector('input[name="questionMode"]:checked').value;
      
      const selectedCategories = [];
      if (questionMode === 'random') {
        document.querySelectorAll('input[name="category"]:checked').forEach(cb => {
          selectedCategories.push(cb.value);
        });
      }
  
      const quizData = {
        title: quizTitle,
        sessionType,
        questionMode,
        categories: selectedCategories
      };
  
      console.log('Quiz sauvegardé :', quizData);
      alert('Quiz sauvegardé avec succès !');
    });
  
    // Prévisualisation
    document.getElementById('previewBtn').addEventListener('click', () => {
      window.location.href = 'preview.html';
    });
  });