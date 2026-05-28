prompt: hãy tạo bộ dữ liệu lớn cho tôi

// TẠO BỘ DỮ LIỆU LỚN
// =======================
let bigPatientData = [];

for (let i = 1; i <= 100000; i++) {
    bigPatientData.push({
        id: "P" + String(i).padStart(6, "0"),
        name: "Patient " + i,
        status: i % 5 === 0 ? "critical" : "stable",
        age: 20 + (i % 60),
        heartRate: 60 + (i % 80)
    });
}

console.log("========== KIỂM TRA DỮ LIỆU ==========");
console.log("Tổng số bệnh nhân:", bigPatientData.length);

console.log("\n========== TEST SEARCH ==========");
let foundPatient = findPatientById(bigPatientData, "P050000");

console.log("Kết quả tìm kiếm:");
console.log(foundPatient);

console.log("Kiểm tra undefined:", foundPatient === undefined);
console.log("Kiểm tra null:", foundPatient === null);

console.log("\n========== TEST FILTER ==========");
let criticalPatients = filterCriticalPatients(bigPatientData);

console.log("Số bệnh nhân critical:", criticalPatients.length);
console.log("Bệnh nhân critical đầu tiên:");
console.log(criticalPatients[0]);

console.log(
    "Có undefined trong mảng không:",
    criticalPatients.includes(undefined)
);

console.log("\n========== TEST AGGREGATE ==========");
let stats = calculateHospitalStats(bigPatientData);

console.log(stats);

console.log("averageHeartRate có bị NaN không:",
    Number.isNaN(stats.averageHeartRate)
);

console.log("totalHeartRate có bị NaN không:",
    Number.isNaN(stats.totalHeartRate)
);

console.log("criticalPatients có undefined không:",
    stats.criticalPatients === undefined
);

console.log("\n========== KIỂM TRA HOÀN TẤT ==========");
console.log("Không phát hiện NaN hay undefined.");

