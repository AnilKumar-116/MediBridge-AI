/* ==========================================
   MEDIBRIDGE AI - DATA ENGINE
   Demo Data Generator
========================================== */

// ----------------------------
// Pharmacy List
// ----------------------------

const pharmacyNames = [
    "Apollo Pharmacy",
    "MedPlus",
    "Wellness Forever",
    "Jan Aushadhi",
    "Care Pharmacy",
    "LifeCare Medical",
    "Health First Pharmacy",
    "City Medicals",
    "Trust Medical",
    "MediHub"
];

// ----------------------------
// Hospital List
// ----------------------------

const hospitals = [
    "Apollo Hospital",
    "AIIMS",
    "Yashoda Hospital",
    "Care Hospital",
    "Rainbow Hospital",
    "Aster Hospital",
    "KIMS Hospital",
    "Government General Hospital"
];

// ----------------------------
// Volunteers
// ----------------------------

const volunteers = [
    "Rahul",
    "Akash",
    "Arjun",
    "Suresh",
    "Priya",
    "Anjali",
    "Kiran",
    "Harsha",
    "Naveen",
    "Sai"
];

// ----------------------------
// Medicine Names
// ----------------------------

const medicineNames = [

"Paracetamol 650",
"Paracetamol 500",
"Dolo 650",
"Crocin 650",
"Cetirizine",
"Levocetirizine",
"Montelukast",
"Azithromycin",
"Amoxicillin",
"Ciprofloxacin",
"Doxycycline",
"Pantoprazole",
"Omeprazole",
"Rabeprazole",
"Ibuprofen",
"Diclofenac",
"Naproxen",
"Aspirin",
"Vitamin C",
"Vitamin D3",
"Calcium Tablet",
"Iron Tablet",
"ORS",
"Metformin",
"Glimipride",
"Insulin",
"Losartan",
"Amlodipine",
"Telmisartan",
"Atorvastatin",
"Rosuvastatin",
"Domperidone",
"Ondansetron",
"Loperamide",
"Zinc Tablet",
"Albendazole",
"Cough Syrup",
"Antacid",
"Nasal Spray",
"Eye Drops"

];

// ----------------------------
// Helpers
// ----------------------------

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomItem(array) {
    return array[random(0, array.length - 1)];
}

// ----------------------------
// Generate Medicine Database
// ----------------------------

const medicines = [];

for (let i = 0; i < 500; i++) {

    const medicine = randomItem(medicineNames);

    medicines.push({

        id: i + 1,

        name: medicine,

        pharmacy: randomItem(pharmacyNames),

        distance: (Math.random() * 5 + 0.5).toFixed(1) + " km",

        eta: random(3, 15) + " mins",

        stock: random(5, 150),

        availability: random(92, 99),

        confidence: random(94, 99),

        rating: (Math.random() * 1 + 4).toFixed(1),

        price: random(20, 450),

        open: Math.random() > 0.2

    });

}

// ----------------------------
// Emergency Status Flow
// ----------------------------

const emergencySteps = [

"Request Received",

"Finding Nearby Pharmacy",

"Checking Stock",

"Volunteer Assigned",

"Medicine Picked",

"Out For Delivery",

"Delivered Successfully"

];

// ----------------------------
// Dashboard Data
// ----------------------------

const dashboard = {

    medicines: medicines.length,

    pharmacies: pharmacyNames.length,

    hospitals: hospitals.length,

    volunteers: volunteers.length,

    deliveries: 1287,

    searches: 5421,

    emergencies: 37

};

// ----------------------------
// Search Medicine
// ----------------------------

function searchMedicine(keyword) {

    keyword = keyword.toLowerCase();

    return medicines.filter(medicine =>

        medicine.name.toLowerCase().includes(keyword)

    );

}

// ----------------------------
// AI Suggestions
// ----------------------------

function getSuggestions(keyword) {

    keyword = keyword.toLowerCase();

    return [...new Set(

        medicines

        .filter(item =>

            item.name.toLowerCase().includes(keyword)

        )

        .map(item => item.name)

    )].slice(0, 5);

}

// ----------------------------
// Best Pharmacy Ranking
// ----------------------------

function rankPharmacies(results) {

    return results.sort((a, b) => {

        const scoreA =
            (a.stock * 0.4) +
            (a.availability * 0.3) +
            (parseFloat(a.rating) * 10 * 0.2) +
            ((6 - parseFloat(a.distance)) * 10 * 0.1);

        const scoreB =
            (b.stock * 0.4) +
            (b.availability * 0.3) +
            (parseFloat(b.rating) * 10 * 0.2) +
            ((6 - parseFloat(b.distance)) * 10 * 0.1);

        return scoreB - scoreA;

    });

}

// ----------------------------
// Random Emergency Volunteer
// ----------------------------

function getVolunteer() {

    return randomItem(volunteers);

}

// ----------------------------
// Random Hospital
// ----------------------------

function getHospital() {

    return randomItem(hospitals);

}

// ----------------------------
// Simulated AI Scan Messages
// ----------------------------

const aiMessages = [

"Reading Prescription...",

"Scanning Medicine Database...",

"Checking Nearby Pharmacies...",

"Calculating Fastest Route...",

"Finding Alternative Medicines...",

"Analyzing Availability...",

"AI Recommendation Ready."

];

function randomAIMessage() {

    return randomItem(aiMessages);

}

console.log("✅ Demo database loaded successfully.");
console.log("Medicines:", medicines.length);
console.log("Pharmacies:", pharmacyNames.length);
