const btn = document.getElementById("btn");
const backbtn = document.getElementById("back-btn");
const successMessage = document.getElementById('success-message');
const eventform = document.getElementById("event-form");
const eventList = document.getElementById("event-list");
const hurry = document.getElementById("hurry");
const ticket = document.getElementById("ticket");
const tour = document.getElementById("tour");
const t = document.getElementById("t");

// Initially hide the event-related elements
hurry.style.display = 'none';
ticket.style.display = 'none';
eventList.style.display = 'none';
backbtn.style.display = 'none';
tour.style.display = 'none';
t.style.display = 'none';

// Submit form event listener
btn.addEventListener('click', submitForm);
backbtn.addEventListener('click', gotoform);

function submitForm() {
    const name = document.getElementById("event-name").value;
    const date = document.getElementById("event-date").value;
    const time = document.getElementById("event-time").value;
    const location = document.getElementById("event-location").value;

    if (!name || !date || !time || !location) {
        alert("Please fill out the form");
        return;
    }

    eventList.innerHTML = ''; // Clear any previous event details

    // Create a new event item
    const newEvent = document.createElement("div");
    newEvent.classList.add('event-item');
    newEvent.innerHTML = `<h3>${name}</h3>
                          <p>DATE: ${date}</p>
                          <p>Time: ${time}</p>
                          <h4>Location: ${location}</h4>
                          <hr>`;
    eventList.appendChild(newEvent);
    
    // Change the background image and opacity
    document.body.style.backgroundImage = "url('g.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundColor= "rgba(0, 0, 0, 0.7)"; // Dark overlay for less visibility

    // Show event-related elements
    backbtn.style.display = 'block';
    hurry.style.display = 'block';
    ticket.style.display = 'flex';
    eventList.style.display = 'block';
    tour.style.display = 'block';
    t.style.display = 'block';

    // Clear the form inputs
    document.getElementById("event-name").value = '';
    document.getElementById("event-date").value = '';
    document.getElementById("event-time").value = '';
    document.getElementById("event-location").value = '';

    // Smooth scroll to the event list
    eventList.scrollIntoView({ behavior: "smooth" });

    // Display success message briefly
    

    // Hide the event form
    eventform.style.display = 'none';
}


function gotoform() {
    // Hide event-related elements and show the form again
    eventList.style.display = 'none';
    backbtn.style.display = 'none';
    successMessage.style.display = 'none';
    eventform.style.display = 'flex';
    hurry.style.display = 'none';
    ticket.style.display = 'none';
    eventList.innerHTML = ''; 
    t.style.display = 'none';
    
    tour.style.display = 'none'; 
    document.body.style.backgroundImage = "url('back.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundColor= "rgba(0, 0, 0, 0.7)";// Clear the event list
}
