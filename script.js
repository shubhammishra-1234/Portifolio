document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('chatbot-modal');
    const talkButton = document.getElementById('talk-button');
    const closeButton = document.querySelector('.modal .close-button');
    const chatBox = document.getElementById('chat-box');
    const questionButtons = document.getElementById('question-buttons');

    talkButton.onclick = function() {
        modal.style.display = 'flex';
        addBotMessage("Hello! I'm Satyam's chatbot. How can I assist you today?");
    }

    closeButton.onclick = function() {
        modal.style.display = 'none';
        chatBox.innerHTML = '';  // Clear chat on close
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            chatBox.innerHTML = '';  // Clear chat on close
        }
    }

    questionButtons.addEventListener('click', function(event) {
        if (event.target.classList.contains('question-button')) {
            const userMessage = event.target.textContent.trim();
            addUserMessage(userMessage);
            processUserMessage(userMessage);
        }
    });

    function addBotMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('bot-message');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function addUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('user-message');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function processUserMessage(message) {
        let response;
        switch (message.toLowerCase()) {
            case 'hi':
            case 'hello':
                response = 'Hi there 👋👋! How can I help you?';
                break;
            case 'who are you?':
            case 'tell me about yourself':
                response = "I'm a 🤖 chatbot created by Satyam to assist you with any information you need about him.";
                break;
            case 'what services do you offer?':
            case 'services':
                response = 'Satyam offers Thumbnail Design, Website Development, Ui & Ux Design, Freelancing Services, and many more.';
                break;
            case 'how can i contact satyam?':
            case 'contact':
                response = 'You can contact Satyam via email at shubham234jsr@gmail.com or phone at 6205502250.';
                break;
        }
        addBotMessage(response);
    }
});
