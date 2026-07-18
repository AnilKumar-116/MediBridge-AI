const upload = document.getElementById("prescriptionFile");
const uploadResult = document.getElementById("uploadResult");

upload.addEventListener("change", () => {

    if(upload.files.length===0) return;

    uploadResult.innerHTML = `

    <div class="upload-card">

        <div class="scan-loader">

            <div class="scan-spinner"></div>

            <span>🤖 AI is reading your prescription...</span>

        </div>

    </div>

    `;

    setTimeout(()=>{

        uploadResult.innerHTML = `

        <div class="upload-card">

            <h3>✅ Prescription Processed</h3>

            <p>AI extracted these medicines:</p>

            <ul>

                <li>💊 Paracetamol 650</li>

                <li>💊 Azithromycin 500</li>

                <li>💊 Vitamin C</li>

            </ul>

            <button
            class="search-all-btn"
            onclick="searchPrescriptionMedicines()">

                Search Medicines

            </button>

        </div>

        `;

    },2500);

});

function searchPrescriptionMedicines(){

    document.getElementById("medicineSearch").value="Paracetamol";

    performSearch();

}
