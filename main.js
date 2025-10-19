    function showSection(event, sectionId) {
      event.preventDefault();
      document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
      document.getElementById(sectionId).classList.add('active');
      document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));
      if (event && event.target) event.target.classList.add('active');
    }
    // Modal text contents
    const textContent = {
      'mise-en-place': `
        <h2>Module : Mise en place (version gratuite)</h2>
        <p><strong>Professeur :</strong> Yousfi Imad Eddine</p>
        <p><strong>Type de cours :</strong> Théorique</p>
        <h3>Objectif pédagogique :</h3>
        <p>À la fin de ce cours, l’apprenant sera capable de définir la notion de mise en place,
        d’identifier les différents éléments nécessaires à la préparation de la salle avant le service et
        de comprendre l’importance de l’organisation et de la présentation dans le bon
        déroulement du service.</p>
        <h3>Contenu du cours :</h3>
        <p><strong>1️⃣ Définition de la mise en place</strong><br>
        La mise en place désigne l’ensemble des préparatifs réalisés avant l’accueil du client,
        destinés à assurer un service rapide, efficace et de qualité. Elle constitue la première étape
        du service en salle et reflète le professionnalisme du personnel.</p>
        <p><strong>2️⃣ Objectifs de la mise en place</strong><br>
        - Garantir un service fluide et sans retard.<br>
        - Assurer une bonne organisation du travail.<br>
        - Maintenir une image soignée et professionnelle de l’établissement.<br>
        - Prévenir les oublis et les erreurs pendant le service.</p>
        <p><strong>3️⃣ Les étapes principales de la mise en place</strong><br>
        1. Préparation du matériel : nettoyage et vérification de la vaisselle, verrerie, couverts, linge
        et mobilier.<br>
        2. Aménagement de la salle : disposition des tables, chaises, décoration et éléments de
        confort.<br>
        3. Dressage des tables : installation du linge, des couverts, verres, assiettes et accessoires
        selon le type de service.<br>
        4. Contrôle final : inspection générale avant l’ouverture du restaurant ou de la salle.</p>
        <p><strong>4️⃣ Importance de la mise en place</strong><br>
        Une mise en place bien réalisée permet de :<br>
        - Gagner du temps pendant le service.<br>
        - Offrir une expérience client agréable et fluide.<br>
        - Valoriser le savoir-faire du serveur et l’image de l’établissement.</p>
        <h3>Ressources disponibles (version gratuite)</h3>
        <ul>
          <li>📄 1 fiche technique en PDF : “Les étapes de la mise en place”</li>
          <li>📝 1 mini quiz de révision (5 questions)</li>
          <li>🎥 1 démonstration vidéo accessible uniquement dans la version complète</li>
        </ul>
      `,
      'hygiene-securite': `
        <h2>Hygiène et sécurité (version gratuite)</h2>
        <p><strong>Professeur :</strong> Yousfi Imad Eddine</p>
        <p><strong>Type de cours :</strong> Théorique</p>
        <h3>Objectif pédagogique :</h3>
        <p>Maîtriser les bonnes pratiques d’hygiène et de sécurité dans le domaine de l’art de la table.</p>
        <h3>Contenu :</h3>
        <ul>
          <li>Principes d’hygiène alimentaire</li>
          <li>Nettoyage et désinfection</li>
          <li>Prévention des accidents</li>
        </ul>
        <h3>Ressources disponibles (version gratuite)</h3>
        <ul>
          <li>📄 Fiche PDF “Hygiène en salle”</li>
          <li>📝 Quiz pratique (5 questions)</li>
          <li>🎥 Démonstration vidéo complète dans la version payante</li>
        </ul>
      `,
      'techniques-service': `
        <h2>Techniques de service (version gratuite)</h2>
        <p><strong>Professeur :</strong> Yousfi Imad Eddine</p>
        <p><strong>Type de cours :</strong> Théorique</p>
        <h3>Objectif pédagogique :</h3>
        <p>Apprendre les gestes essentiels pour le service en salle.</p>
        <h3>Contenu :</h3>
        <ul>
          <li>Accueil du client</li>
          <li>Service des plats et boissons</li>
          <li>Règles de courtoisie</li>
        </ul>
        <h3>Ressources disponibles (version gratuite)</h3>
        <ul>
          <li>📄 Fiche technique en PDF</li>
          <li>📝 Quiz de révision (5 questions)</li>
          <li>🎥 Vidéo complète dans la version payante</li>
        </ul>
      `
    };
    function showTextModal(type) {
      document.getElementById('modalText').innerHTML = textContent[type] || "<p>Contenu non disponible.</p>";
      document.getElementById('textModal').style.display = 'flex';
    }

    function showVideoModal(src) {
      const video = document.getElementById('modalVideo');
      video.src = src;
      video.load();
      document.getElementById('videoModal').style.display = 'flex';
      video.play();
    }
   
    function showPaymentModal(cardIndex) {
      document.getElementById('paymentModal').style.display = 'flex';
      // Show video only for first card
      if (typeof cardIndex !== 'undefined' && cardIndex === 0) {
        document.getElementById('paymentVideoContainer').style.display = 'block';
      } else {
        document.getElementById('paymentVideoContainer').style.display = 'none';
      }
    }
    function closePaymentModal() {
      document.getElementById('paymentModal').style.display = 'none';
      document.getElementById('paymentVideoContainer').style.display = 'none';
    }
     function closeVideoModal() {
      const video = document.getElementById('modalVideo');
      video.pause();
      document.getElementById('videoModal').style.display = 'none';
    }
        function closeTextModal() {
      document.getElementById('textModal').style.display = 'none';
    }
    window.onclick = function(event) {
      if (event.target === document.getElementById('videoModal')) closeVideoModal();
      if (event.target === document.getElementById('textModal')) closeTextModal();
      if (event.target === document.getElementById('paymentModal')) closePaymentModal();
    };

    // Quiz logic
    const quizData = [
      {
        question: "Au XVIIIe et XIXe s. quelle différence existait entre le service 'à la française' et le service 'à la russe' ?",
        answers: [
          { text: "À la française on servait tous les plats en même temps, à la russe, successivement", correct: true },
          { text: "Dans le premier on ne mangeait jamais de poisson et dans le second il constituait la majorité du repas", correct: false }
        ]
      },
      {
        question: "Le fromage ne s'installe à table comme met à part entière qu'au début du XXe siècle.",
        answers: [
          { text: "Vrai", correct: true },
          { text: "Faux", correct: false }
        ]
      },
      {
        question: "L'origine de l'expression 'dresser la table' vient du fait qu'auparavant il n'existait pas de table ni de salle à manger.",
        answers: [
          { text: "Vrai", correct: true },
          { text: "Faux", correct: false }
        ]
      },
      {
        question: "À l'origine, que signifie le mot 'restaurant' ?",
        answers: [
          { text: "La taverne où le voyageur se restaurait pendant ses voyages", correct: true },
          { text: "Un bouillon très copieux à base de viande", correct: false },
          { text: "Le plat de résistance servi dans les auberges", correct: false }
        ]
      }
    ];
    const questionNumberElem = document.getElementById('question-number');
    const questionTextElem = document.getElementById('question-text');
    const answerButtonsElem = document.getElementById('answer-buttons');
    const nextBtn = document.getElementById('next-btn');
    const progressFill = document.getElementById('progress-fill');
    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      nextBtn.style.display = 'none';
      nextBtn.innerText = 'Question suivante';
      showQuestion();
    }
    function showQuestion() {
      resetState();
      const currentQuestion = quizData[currentQuestionIndex];
      questionNumberElem.innerText = `QUESTION ${currentQuestionIndex + 1} / ${quizData.length}`;
      questionTextElem.innerText = currentQuestion.question;
      currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer, button));
        answerButtonsElem.appendChild(button);
      });
      updateProgress();
    }
    function resetState() {
      nextBtn.style.display = 'none';
      while(answerButtonsElem.firstChild) answerButtonsElem.removeChild(answerButtonsElem.firstChild);
    }
    function selectAnswer(answer, button) {
      Array.from(answerButtonsElem.children).forEach(btn => btn.disabled = true);
      if(answer.correct){
        button.classList.add('correct');
        score++;
      } else {
        button.classList.add('wrong');
      }
      nextBtn.style.display = 'inline-block';
    }
    nextBtn.addEventListener('click', () => {
      currentQuestionIndex++;
      if(currentQuestionIndex < quizData.length){
        showQuestion();
      } else {
        showScore();
      }
    });
    function showScore() {
      resetState();
      questionNumberElem.innerText = `Résultat: ${score} / ${quizData.length}`;
      questionTextElem.innerText = "Merci d'avoir participé au quiz !";
      nextBtn.innerText = 'Recommencer';
      nextBtn.style.display = 'inline-block';
      nextBtn.onclick = () => { nextBtn.innerText = 'Question suivante'; startQuiz(); };
    }
    function updateProgress() {
      const progressPercent = ((currentQuestionIndex) / quizData.length) * 100;
      progressFill.style.width = `${progressPercent}%`;
    }
    startQuiz();

    // Forum logic
    const forumData = [
      {
        question: {
          text: "Quel matériau recommandez-vous pour des assiettes durables ?",
          userType: "student"
        },
        answer: {
          text: "La porcelaine est un excellent choix, elle allie solidité et élégance.",
          userType: "teacher"
        }
      },
      {
        question: {
          text: "Combien de verres à vin prévoir par personne ?",
          userType: "student"
        },
        answer: {
          text: "En général, un ou deux verres à vin par personne suffisent.",
          userType: "teacher"
        }
      },
      {
        question: {
          text: "Comment enlever les taches de thé sur des tasses ?",
          userType: "student"
        },
        answer: {
          text: "Essayez de frotter avec du bicarbonate de soude.",
          userType: "teacher"
        }
      },
      {
        question: {
          text: "Quelle est la différence entre une fourchette à poisson et une fourchette de table ?",
          userType: "student"
        },
        answer: {
          text: "La fourchette à poisson est plus petite et plate, avec une encoche pour séparer la chair. La fourchette de table est plus grande et pointue pour la viande.",
          userType: "teacher"
        }
      }
    ];

    function renderForum() {
      const container = document.getElementById('forum-thread-container');
      container.innerHTML = ''; // Clear existing content

      forumData.forEach(qa => {
        const cardElement = document.createElement('div');
        cardElement.className = 'forum-qa-card';

        cardElement.innerHTML = `
          <div class="qa-content">
            <!-- Question Block -->
            <div class="qa-block">
              <div class="qa-avatar">
                <img src="https://api.iconify.design/mdi/account-question-outline.svg" class="qa-avatar-icon" alt="Questioner icon">
              </div>
              <div class="qa-question">
                ${qa.question.text}
              </div>
            </div>
            <!-- Answer Block -->
            <div class="qa-block">
              <div class="qa-avatar" style="background-color: #a2b9a3;">
                <img src="https://api.iconify.design/mdi/account-tie-outline.svg" class="qa-avatar-icon" alt="Responder icon">
              </div>
              <div class="qa-answer">
                ${qa.answer.text}
              </div>
            </div>
          </div>
        `;
        container.appendChild(cardElement);
      });
    }

    // Render the forum when the page loads
    renderForum();

    // Handle new forum question submission
    const forumForm = document.getElementById('forum-form');
    forumForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form from reloading the page
      const questionInput = document.getElementById('forum-question-input');
      const newQuestionText = questionInput.value.trim();

      if (newQuestionText) {
        // Add the new question to our data array
        const newQA = {
          question: {
            text: newQuestionText,
            userType: "student"
          },
          answer: {
            text: "En attente de réponse de l'enseignant...",
            userType: "teacher"
          }
        };
        forumData.unshift(newQA);
        renderForum(); // Re-render the forum to show the new question
        questionInput.value = ''; // Clear the input field
      }
    });

    // Edit row logic for Progress Table
    function editRow(btn) {
      var row = btn.closest("tr");
      var statusCell = row.querySelector(".status-cell");
      var commentCell = row.querySelector(".comment-cell");
      // تحويل الحقول إلى حقول إدخال
      statusCell.innerHTML = `
        <select>
          <option value="Complété">Complété</option>
          <option value="En cours">En cours</option>
          <option value="Non commencé">Non commencé</option>
        </select>
      `;
      commentCell.innerHTML = `<input type="text" value="${commentCell.textContent.trim()}" />`;
      // تغيير الزر إلى "حفظ"
      btn.textContent = "Enregistrer";
      btn.onclick = function() {
        var newStatus = statusCell.querySelector("select").value;
        var newComment = commentCell.querySelector("input").value;
        statusCell.textContent = newStatus;
        statusCell.setAttribute('data-status', newStatus);
        commentCell.textContent = newComment;
        btn.textContent = "edit";
        btn.onclick = function() { editRow(btn); };
      };
    }

  function showFreeImage(cardIndex) {
  const imageMap = {
    0: "assets/photo6.jpeg",
    1: "assets/photo5.jpeg",
    2: "assets/photo7.jpeg"
  };

  const imgSrc = imageMap[cardIndex];
  const modal = document.getElementById('imageModal');
  const imgElement = document.getElementById('imageDisplay');

  if (imgSrc) {
    imgElement.src = imgSrc;
    modal.style.display = 'flex';
  } else {
    console.error("❌ لم يتم العثور على صورة لهذه البطاقة:", cardIndex);
  }
}

function closeImageModal() {
  document.getElementById('imageModal').style.display = 'none';
}
