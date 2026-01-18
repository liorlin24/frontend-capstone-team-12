function toggletable() {/*הצהרה על פונקציה*/
    const neighborhood = document.getElementById('neighborhood_select').value;
    const garbageType = document.getElementById('garbage_type').value;

    const allRows = document.querySelectorAll('tr');/*בחירת כל tr*/
    allRows.forEach(row => row.classList.remove('highlight-row'));/*הורדת מרקור מהכל*/

    const allSchedules = document.querySelectorAll('.trash_waste_schedule');/*בחירת כל הדיב שמאחסנים את הטבלאות*/
    allSchedules.forEach(item => {item.style.display = 'none';});/*הסתרת הטבלה*/


    /*בחירת סוג אשפה וחשיפת הטבלה הרלוונטית*/
    if (garbageType === 'trash') {
        document.getElementById('trash_bin_table').style.display = 'block';
    } else if (garbageType === 'garden') {
        document.getElementById('garden_table').style.display = 'block';
    } else if (garbageType === 'buried') {
        document.getElementById('hidden_garbage_table').style.display = 'block';
    }
    /*מציאת השכונה שנבחרה ומרקור של השורות המתאימות*/
    if (neighborhood) {
        const rowsToHighlight = document.querySelectorAll('.row-' + neighborhood);
        rowsToHighlight.forEach(row => { row.classList.add('highlight-row'); });
    }
}
