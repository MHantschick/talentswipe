const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

let conversationCount = 0;

sendButton.addEventListener("click", () => {
  const userMessage = userInput.value;
  appendUserMessage(userMessage);
  userInput.value = "";

  switch (conversationCount) {
    case 0:
      simulateBotResponse(
        "Gehe dafür einfach auf der Startseite in die Einstellungen und unter dem Punkt 'Filter' kannst du jederzeit die Filter ändern."
      ); //Wie kann ich meine Filter einstellen?
      break;
    case 1:
      simulateBotResponse("Hast du noch eine weitere Frage?"); // Ok, danke!
      break;
    default:
      simulateBotResponse(
        "Auf diese Frage habe ich keine Antwort. Kontaktiere bitte die hinterlegte E-Mail des Kundensupports: 'support@talentswipe.de'"
      ); //Wie kann ich eine businesspartnerschaft abschließen?
      break;
  }

  conversationCount++;
});

function appendUserMessage(message) {
    const userMessageElement = document.createElement("div");
    userMessageElement.className = "user-message";
    userMessageElement.textContent = message;
    chatMessages.appendChild(userMessageElement);
    scrollChatToBottom();
  }

  function scrollChatToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}