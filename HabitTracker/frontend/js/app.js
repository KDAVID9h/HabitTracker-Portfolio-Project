document.addEventListener('DOMContentLoaded', () => {
    const habitForm = document.getElementById('habit-form');
    const habitList = document.getElementById('habit-list');

    habitForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('habit-name').value;
        const userId = 'your_user_id'; // This should be dynamically set based on logged in user

        const response = await fetch('http://localhost:3000/api/habits', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, name })
        });

        const habit = await response.json();
        displayHabit(habit);
    });

    const displayHabit = (habit) => {
        const li = document.createElement('li');
        li.textContent = habit.name;
        habitList.appendChild(li);
    };

    // Load habits on page load
    const loadHabits = async () => {
        const userId = 'your_user_id'; // This should be dynamically set based on logged in user
        const response = await fetch(`http://localhost:3000/api/habits/${userId}`);
        const habits = await response.json();
        habits.forEach(displayHabit);
    };

    loadHabits();
});
