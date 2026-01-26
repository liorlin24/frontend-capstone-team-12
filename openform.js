document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const randomNum = Math.floor(100000 + Math.random() * 900000);
  const caseNumber = "#" + randomNum;
  const full_name = document.getElementById("full_name").value;
  const phone_num = document.getElementById("phone_num").value;
  const address = document.getElementById("street").value;
  const house = document.getElementById("house-number").value;

  const caseData = {
    id: randomNum,
    formattedId: caseNumber,
    date: new Date().toLocaleDateString("he-IL"),
    status: "בטיפול",
    category: document.getElementById("category").value,
    full_name: full_name,
    phone_num: phone_num,
    address: address,
    house: house,
  };
  localStorage.setItem(randomNum, JSON.stringify(caseData));

  const resultDiv = document.getElementById("result-container");

  resultDiv.innerHTML = `
        <h3 style="color: #7b7d7b; margin: 0;">הפנייה נשלחה בהצלחה!</h3>
        <p>מספר התיק שלך למעקב: <strong>${caseNumber}</strong></p>
        <p style="font-size: 0.9em; color: gray;">( שמור את המספר הזה לבירור סטטוס הפנייה)</p>
    `;

  resultDiv.style.display = "block";
  resultDiv.style.opacity = "1";

  document.getElementById("submit-btn").style.display = "none";

  e.target.reset();
});
