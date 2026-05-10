const questionBank = [
  {
    keywords: ["club", "clubs", "meetings", "attendance"],
    answer: "StudLeif manages weekly club meetings. You can track your attendance and see upcoming sessions on the Events page."
  },
  {
    keywords: ["fmi", "uvt", "faculty"],
    answer: "StudLeif is specifically designed for the Faculty of Mathematics and Informatics (FMI) community at UVT."
  },
  {
    keywords: ["nicu", "creator", "developer", "author"],
    answer: "The platform was created by Guțu Nicu, focusing on enhancing student engagement through tech."
  },
  {
    keywords: ["help", "how", "purpose"],
    answer: "Use this assistant for quick info, or navigate to 'Overview' to see a full breakdown of platform features!"
  }
];

const chatForm = document.getElementById('chatForm');
const chatWindow = document.getElementById('chatWindow');
const userInput = document.getElementById('userInput');

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const text = userInput.value.trim().toLowerCase();
  if (!text) return;

  addMessage(userInput.value, 'user-message');
  
  const response = findResponse(text);
  
  setTimeout(() => {
    addMessage(response, 'bot-message');
  }, 400);

  userInput.value = ''; 
});

function addMessage(text, className) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', className);
  messageDiv.textContent = text;
  
  chatWindow.appendChild(messageDiv);
  
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function findResponse(input) {
  for (let item of questionBank) {
    const match = item.keywords.some(keyword => input.includes(keyword));
    if (match) return item.answer;
  }
  return "I'm not sure about that. Try asking about 'clubs', 'UVT', or 'Nicu'.";
}