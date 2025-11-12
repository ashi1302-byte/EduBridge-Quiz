// ===== Typing Effect =====
const phrases = ["AI Intelligence", "Smart Learning", "Personalized Courses"];
let i = 0, j = 0, isDeleting = false, speed = 100;

function typeEffect() {
  const typingElement = document.querySelector(".typing");
  if (!typingElement) return;

  const fullText = phrases[i];
  if (isDeleting) j--;
  else j++;

  typingElement.innerHTML = fullText.substring(0, j);

  if (!isDeleting && j === fullText.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // pause before deleting
    return;
  } 
  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  speed = isDeleting ? 50 : 100;
  setTimeout(typeEffect, speed);
}

typeEffect();

// ===== Counter Animation =====
document.querySelectorAll('.counter').forEach(counter => {
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 100;
    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 20);
    } else counter.innerText = target;
  };
  updateCounter();
});

// ===== Courses Toggle =====
function showCourses() {
  const container = document.querySelector('.courses-container');
  container.classList.toggle('hidden');
  container.classList.add('show');
}

// ===== Articles Modal =====
const articles = {
  article1: {
    title: "Effective Study Techniques",
    content: "Learn techniques like Pomodoro, active recall, and spaced repetition to improve memory and focus."
  },
  article2: {
    title: "Time Management for Students",
    content: "Plan your day, prioritize tasks, and use simple tools to make your study hours more productive."
  },
  article3: {
    title: "AI in Education",
    content: "Explore how AI tools are making learning more personalized, efficient, and accessible for students worldwide."
  },
  article4: {
    title: "Improve Your Memory",
    content: "Simple memory hacks, visualization techniques, and practice tips to retain knowledge effectively."
  },
  article5: {
    title: "Enhance Focus & Concentration",
    content: "Try exercises, environment tips, and scheduling strategies to maintain high focus while studying."
  },
  article6: {
    title: "Best Study Habits",
    content: "Develop daily routines, goal-setting habits, and note-taking strategies for consistent learning success."
  }
};

function openArticle(articleId) {
  const modal = document.getElementById('articleModal');
  modal.classList.remove('hidden');
  document.getElementById('modalTitle').innerText = articles[articleId].title;
  document.getElementById('modalContent').innerText = articles[articleId].content;
}

function closeModal() {
  const modal = document.getElementById('articleModal');
  modal.classList.add('hidden');
}

// ===== Smooth Scroll for Anchors =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== Back to Top Button =====
const backToTop = document.createElement('button');
backToTop.id = "backToTop";
backToTop.textContent = "↑ Top";
document.body.appendChild(backToTop);

backToTop.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 10px 15px;
  background: #3B82F6;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  z-index: 50;
  font-size: 1.2rem;
`;

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// ===== Login Modal Controls =====
function openLogin() {
  document.getElementById('loginModal').classList.remove('hidden');
}

function closeLogin() {
  document.getElementById('loginModal').classList.add('hidden');
}

function showSignup() {
  document.getElementById('loginModal').classList.add('hidden');
  document.getElementById('signupModal').classList.remove('hidden');
}

function closeSignup() {
  document.getElementById('signupModal').classList.add('hidden');
}

function switchToLogin() {
  document.getElementById('signupModal').classList.add('hidden');
  document.getElementById('loginModal').classList.remove('hidden');
}