//function confirmSelection(index) {
    // ดึงค่าจำนวนอาหารและเวลา
   // const foodQuantity = document.getElementById(`foodQuantity${index}`).value;
   // const timeSelect = document.getElementById(`timeSelect${index}`).value;

    // ดึงปุ่มยืนยันและส่วนแสดงผล
    //const confirmButton = document.getElementById(`confirmButton${index}`);
    //const resultDiv = document.getElementById("result");
    
    // เปลี่ยนไอคอนและข้อความของปุ่ม
    //confirmButton.innerHTML = '<i class="fa-solid fa-check-circle box-icon"></i> สำเร็จ';
    //confirmButton.classList.add("clicked");
    //confirmButton.removeAttribute("onclick"); // เอาออกฟังก์ชัน onclick

    // สร้างข้อความที่ต้องการแสดง
    //const message = document.createElement('div');
    //message.className = 'result-container';
    //message.innerHTML = `
       // <i class="fa-solid fa-check-circle box-icon"></i> 
       // <span>คุณเลือกอาหาร ${foodQuantity} กรัม และเวลา ${timeSelect}</span>
   // `;
  //  resultDiv.appendChild(message);
//}
let isConfirmed = [false, false, false, false]; // ตัวแปรเพื่อตรวจสอบสถานะสำหรับแต่ละปุ่ม

function confirmOrCancel(index) {
    const button = document.getElementById(`confirmCancelButton${index}`);
    const foodQuantity = document.getElementById(`foodQuantity${index}`).value; // ดึงค่าอาหารที่เลือก
    const timeSelect = document.getElementById(`timeSelect${index}`).value; // ดึงค่าเวลาที่เลือก
    const messageSpan = document.getElementById(`confirmationMessage${index}`); // พื้นที่แสดงข้อความ

    // ตรวจสอบว่าผู้ใช้ได้เลือกจำนวนอาหารและเวลาหรือยัง
    if (!foodQuantity || !timeSelect) {
        alert("กรุณาเลือกจำนวนอาหารและเวลาให้ครบถ้วน"); // แจ้งเตือนผู้ใช้ถ้าเลือกไม่ครบ
        return; // หยุดการทำงานของฟังก์ชันหากยังไม่ได้เลือกครบ
    }

    if (!isConfirmed[index - 1]) {
        // ถ้ายังไม่ได้ยืนยัน
        button.innerText = "ยกเลิก"; // เปลี่ยนข้อความเป็น "ยกเลิก"
        button.classList.add("cancel"); // เพิ่มคลาสสำหรับเปลี่ยนสีปุ่มเป็นสีแดง
        button.classList.add("clicked"); // เพิ่มคลาส clicked เพื่อเปลี่ยนสไตล์ปุ่ม
        isConfirmed[index - 1] = true; // ตั้งค่าสถานะให้เป็น true

        // แสดงข้อความข้างปุ่มพร้อมไอคอนถูก
        messageSpan.innerHTML = `คุณเลือกอาหาร ${foodQuantity} กรัม และเวลา ${timeSelect} <i class="fa-solid fa-check-circle" style="color: green;"></i>`;
        
    } else {
        // ถ้าผู้ใช้กด "ยกเลิก"
        document.getElementById(`foodQuantity${index}`).selectedIndex = 0; // รีเซ็ตเลือกจำนวนอาหาร
        document.getElementById(`timeSelect${index}`).value = ""; // รีเซ็ตเวลา
        button.innerText = "ยืนยัน"; // เปลี่ยนข้อความกลับเป็น "ยืนยัน"
        button.classList.remove("cancel"); // ลบคลาสสีแดงออก
        button.classList.remove("clicked"); // ลบคลาส clicked ออก
        isConfirmed[index - 1] = false; // เปลี่ยนสถานะกลับ

        // ลบข้อความเมื่อกดยกเลิก
        messageSpan.textContent = "";
    }
}

// task.js ซ่อนแถบเมนู 

function toggleTaskOptions() {
    const taskOptions = document.getElementById("taskOptions");
    // Toggle the display property of taskOptions
    if (taskOptions.style.display === "none" || taskOptions.style.display === "") {
        taskOptions.style.display = "block";
    } else {
        taskOptions.style.display = "none";
    }
}

function showManualControl() {
    // Hide automatic feeding section and show manual control section
    document.getElementById("automatic").style.display = "none"; // Make sure automatic section is hidden
    document.getElementById("manual").style.display = "block"; // Display manual control section
    
    // Hide the task options menu after selection
    toggleTaskOptions();
}

function showAutomaticFeeding() {
    // Hide manual control section and show automatic feeding section
    document.getElementById("manual").style.display = "none"; // Make sure manual section is hidden
    document.getElementById("automatic").style.display = "block"; // Display automatic feeding section
    
    // Hide the task options menu after selection
    toggleTaskOptions();
}







