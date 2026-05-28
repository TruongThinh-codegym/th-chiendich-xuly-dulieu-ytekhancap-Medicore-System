/**
 * HỆ THỐNG MEDICORE - MODULE XỬ LÝ DỮ LIỆU ĐỘNG
 */
// Tập dữ liệu mô phỏng sự thay đổi liên tục (Dữ liệu động)
let patientData = [
    { id: "P001", name: "Nguyen Van A", status: "stable", age: 45, heartRate: 80 },
    { id: "P002", name: "Tran Thi B", status: "critical", age: 60, heartRate: 130 },
    { id: "P003", name: "Le Van C", status: "stable", age: 30, heartRate: 75 },
    { id: "P004", name: "Pham Thi D", status: "critical", age: 72, heartRate: 45 }
];

// YÊU CẦU 1: THUẬT TOÁN TÌM KIẾM (Search)
function findPatientById(dataArray, targetId) {
    for (let i = 0; i < dataArray.length ; i++) {
        if (dataArray[i].id === targetId) {
            return dataArray[i];
        }
    }
    return null;
    // TODO: Dùng vòng lặp quét qua mảng. Nếu tìm thấy id trùng khớp, return object đó. Nếu hết mảng không có, return null.
}

// YÊU CẦU 2: THUẬT TOÁN LỌC (Filter)
function filterCriticalPatients(dataArray) {
    let criticalPatients = [];
    for (let i = 0; i < dataArray.length ; i++) {
        if (dataArray[i].status === "critical") {
            criticalPatients.push(dataArray[i]);
        }
    }
    return criticalPatients;
    // TODO: Khởi tạo mảng rỗng. Dùng vòng lặp quét qua mảng. Nếu status === "critical", push vào mảng kết quả. Return mảng kết quả.
}

// YÊU CẦU 3: THUẬT TOÁN THỐNG KÊ (Aggregate)
function calculateHospitalStats(dataArray) {
    let criticalCount = 0;
    let totalHeartRate = 0;
    for (let i = 0; i < dataArray.length; i++) {
        totalHeartRate += dataArray[i].heartRate;
        if (dataArray[i].status === "critical") {
            criticalCount++;
        }
    }
    return {
        totalPatients: dataArray.length,
        criticalPatients: criticalCount,
        totalHeartRate: totalHeartRate,
        averageHeartRate: totalHeartRate / dataArray.length
    };
    // TODO: Dùng vòng lặp để đếm số bệnh nhân critical và tính tổng heartRate. Trả về object chứa các con số thống kê.
}
// TEST CONSOLE.LOG


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