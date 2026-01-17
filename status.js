document
  .getElementById("check-status-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // מונע את רענון הדף

    // 1. קבלת המספר מהשדה
    const inputField = document.getElementById("ticket-number");
    const inputVal = inputField.value.trim();

    // ניקוי הסולמית (#) אם המשתמש הקליד אותה, כי המפתח בזיכרון הוא רק המספרים
    const searchId = inputVal.replace("#", "");

    // 2. חיפוש בזיכרון
    const storedDataString = localStorage.getItem(searchId);
    const resultDiv = document.getElementById("result-container");

    // איפוס התצוגה לפני שמראים תוצאה חדשה
    resultDiv.style.display = "block";
    resultDiv.className = ""; // מנקה עיצובים קודמים

    // 3. לוגיקת בדיקה
    if (storedDataString) {
      // --- מצב הצלחה: הפנייה נמצאה ---
      const data = JSON.parse(storedDataString);

      resultDiv.style.opacity = 1;
      // הוספת עיצוב של הצלחה
      resultDiv.classList.add("success-box");

      // בניית ה-HTML של התוצאה
      resultDiv.innerHTML = `
            <h3 style="color: #4CAF50; margin-top:0;">נמצאה פנייה!</h3>
            <p><strong>שם איש קשר:</strong> ${data.full_name}</p>
            <p><strong>מספר טלפון:</strong> ${data.phone_num}</p>
            <p><strong>מספר פנייה:</strong> ${data.formattedId}</p>
            <p><strong>תאריך פתיחה:</strong> ${data.date}</p>
            <p><strong>קטגוריה:</strong> ${data.category}</p>
            <p><strong>סטטוס נוכחי:</strong> <span style="background-color: yellow; padding: 2px 5px; border-radius: 3px;">${data.status}</span></p>
        `;
    } else {
      // --- מצב שגיאה: הפנייה לא נמצאה ---

      // הוספת עיצוב של שגיאה
      resultDiv.classList.add("error-box");
      resultDiv.style.opacity = 1;

      resultDiv.innerHTML = `
            <h3 style="margin-top:0;">שגיאה</h3>
            <p>לא נמצאה פנייה עם המספר <strong>#${searchId}</strong>.</p>
            <p>אנא וודא שהמספר נכון ונסה שוב.</p>
        `;
    }

    // אופציונלי: מנקה את שדה הקלט
    inputField.value = "";
  });
