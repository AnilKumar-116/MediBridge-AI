/* ==========================================
   MEDIBRIDGE AI - AI ENGINE
========================================== */

const searchInput = document.getElementById("medicineSearch");
const searchBtn = document.getElementById("searchBtn");
const suggestionsBox = document.getElementById("suggestions");
const resultsBox = document.getElementById("searchResults");

// -------------------------------
// AI Loading Animation
// -------------------------------

function showLoading() {

    resultsBox.innerHTML = `
        <div class="result-card">
            <h3>🤖 AI Assistant</h3>
            <p id="loadingText">Scanning medicine database...</p>
        </div>
    `;

    let i = 0;

    const interval = setInterval(() => {

        document.getElementById("loadingText").innerText =
            aiMessages[i % aiMessages.length];

        i++;

    }, 700);

    return interval;
}

// -------------------------------
// Suggestions
// -------------------------------

function displaySuggestions(keyword) {

    suggestionsBox.innerHTML = "";

    if (keyword.length < 2) return;

    const suggestions = getSuggestions(keyword);

    suggestions.forEach(name => {

        const div = document.createElement("div");

        div.className = "suggestion-item";

        div.innerHTML = `💊 ${name}`;

        div.onclick = () => {

            searchInput.value = name;

            suggestionsBox.innerHTML = "";

            performSearch();

        };

        suggestionsBox.appendChild(div);

    });

}

// -------------------------------
// Search
// -------------------------------

function performSearch() {

    const keyword = searchInput.value.trim();

    if (keyword === "") {

        alert("Please enter a medicine name.");

        return;

    }

    suggestionsBox.innerHTML = "";

    const loader = showLoading();

    setTimeout(() => {

        clearInterval(loader);

        let results = searchMedicine(keyword);

        results = rankPharmacies(results);

        displayResults(results);

    }, 2500);

}

// -------------------------------
// Result Cards
// -------------------------------

function displayResults(results) {

    resultsBox.innerHTML = "";

    if (results.length === 0) {

        resultsBox.innerHTML = `
            <div class="result-card">
                <h3>❌ Medicine Not Found</h3>
                <p>No matching medicine found.</p>
            </div>
        `;

        return;

    }

    results.slice(0,5).forEach(item => {

        const card = document.createElement("div");

        card.className = "result-card";

        card.innerHTML = `

        <h3>${item.name}</h3>

        <p><strong>🏥 Pharmacy:</strong> ${item.pharmacy}</p>

        <p><strong>📍 Distance:</strong> ${item.distance}</p>

        <p><strong>⏱ ETA:</strong> ${item.eta}</p>

        <p><strong>📦 Stock:</strong> ${item.stock}</p>

        <p><strong>⭐ Rating:</strong> ${item.rating}</p>

        <p><strong>🤖 AI Confidence:</strong> ${item.confidence}%</p>

        <p><strong>💰 Price:</strong> ₹${item.price}</p>

        <button class="emergency-btn">
            Emergency Delivery
        </button>

        `;

        card.querySelector(".emergency-btn")
            .onclick = () => startEmergency(item);

        resultsBox.appendChild(card);

    });

}

// -------------------------------
// Emergency Simulation
// -------------------------------

function startEmergency(item){

resultsBox.innerHTML = `

<div class="delivery-container">

<h2>🚨 Emergency Delivery</h2>

<div class="delivery-road">

<div class="pharmacy">🏥</div>

<div class="road"></div>

<div class="truck" id="truck">🚚</div>

<div class="patient">🏠</div>

</div>

<h3 id="deliveryStatus">
AI Searching Nearby Pharmacy...
</h3>

</div>

`;

startDeliveryAnimation();

}
function startDeliveryAnimation(){
    setTimeout(() => {

    confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 }
    });

}, 300);

const truck=document.getElementById("truck");
const status=document.getElementById("deliveryStatus");

const positions=[50,180,320,470];

const messages=[
"🤖 AI Searching Pharmacy...",
"📦 Medicine Packed",
"🚚 Delivery Started",
"✅ Medicine Delivered"
];

let i=0;

const timer=setInterval(()=>{

truck.style.left=positions[i]+"px";
status.innerHTML=messages[i];

i++;

if(i>=positions.length){

clearInterval(timer);

}

},1500);

}

// -------------------------------
// Events
// -------------------------------

searchInput.addEventListener("keyup", e => {

    displaySuggestions(e.target.value);

});

searchBtn.addEventListener("click", performSearch);

searchInput.addEventListener("keypress", e => {

    if (e.key === "Enter") {

        performSearch();

    }

});

// -------------------------------
// Welcome Message
// -------------------------------

setTimeout(() => {

    console.log("🤖 MediBridge AI Engine Activated");

},1000);
