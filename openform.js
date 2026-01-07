document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); // מונע רענון

    // 1. יצירת המספר
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const caseNumber = "#" + randomNum;

    // 2. שמירה לזיכרון (אותו דבר כמו קודם)
    const caseData = {
        id: randomNum,
        formattedId: caseNumber,
        date: new Date().toLocaleDateString('he-IL'),
        status: "התקבל במערכת",
        category: document.getElementById('category').value
    };
    localStorage.setItem(randomNum, JSON.stringify(caseData));

    // 3. הצגת ההודעה בדף עצמו (במקום Alert)
    const resultDiv = document.getElementById('result-container');
    
    // מכינים את הטקסט שיופיע (אפשר להשתמש ב-HTML בתוך הגרשיים)
    resultDiv.innerHTML = `
        <h3 style="color: #4CAF50; margin: 0;">הפנייה נשלחה בהצלחה!</h3>
        <p>מספר התיק שלך למעקב: <strong>${caseNumber}</strong></p>
        <p style="font-size: 0.9em; color: gray;">( שמור את המספר הזה לבירור סטטוס הפנייה)</p>
    `;

    // הופכים את הקופסה לגלויה
    resultDiv.style.display = 'block';

    // אופציונלי: להסתיר את כפתור השליחה כדי שלא ילחצו שוב
    document.getElementById('submit-btn').style.display = 'none';
    
    // ניקוי הטופס
    e.target.reset();
});