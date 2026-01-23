document
  .getElementById("check-status-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const inputField = document.getElementById("ticket-number");
    const inputVal = inputField.value.trim();

    const searchId = inputVal.replace("#", "");

    const storedDataString = localStorage.getItem(searchId);
    const resultDiv = document.getElementById("result-container");

    resultDiv.style.display = "block";
    resultDiv.className = "";

    if (storedDataString) {
      const data = JSON.parse(storedDataString);
      resultDiv.style.opacity = 1;

      resultDiv.classList.add("success-box");

      resultDiv.innerHTML = `
            <h3 style="color: #4CAF50; margin-top:0;">נמצאה פנייה!</h3>
            <p><strong>שם איש קשר:</strong> ${data.full_name}</p>
            <p><strong>מספר פנייה:</strong> ${data.formattedId}</p>
            <p><strong>תאריך פתיחה:</strong> ${data.date}</p>
            <p><strong>כתובת:</strong> ${data.address} ${data.house}</p>
            <p><strong>קטגוריה:</strong> ${data.category}</p>
            <p><strong>סטטוס נוכחי:</strong> <span style="padding: 2px 5px; border-radius: 3px;">${data.status}</span></p>
        `;
    } else {
      resultDiv.classList.add("error-box");

      resultDiv.innerHTML = `
            <h3 style="margin-top:0;">שגיאה</h3>
            <p>לא נמצאה פנייה עם המספר <strong>#${searchId}</strong>.</p>
            <p>אנא וודא שהמספר נכון ונסה שוב.</p>
        `;
    }

    inputField.value = "";
  });
