function confirmSelection(index) {
    // ดึงค่าจำนวนอาหารและเวลา
    const foodQuantity = document.getElementById(`foodQuantity${index}`).value;
    const timeSelect = document.getElementById(`timeSelect${index}`).value;

    // ดึงปุ่มยืนยันและส่วนแสดงผล
    const confirmButton = document.getElementById(`confirmButton${index}`);
    const resultDiv = document.getElementById("result");
    
    // เปลี่ยนไอคอนและข้อความของปุ่ม
    confirmButton.innerHTML = '<i class="fa-solid fa-check-circle box-icon"></i> สำเร็จ';
    confirmButton.classList.add("clicked");
    confirmButton.removeAttribute("onclick"); // เอาออกฟังก์ชัน onclick

    // สร้างข้อความที่ต้องการแสดง
    const message = document.createElement('div');
    message.className = 'result-container';
    message.innerHTML = `
        <i class="fa-solid fa-check-circle box-icon"></i> 
        <span>คุณเลือกอาหาร ${foodQuantity} กรัม และเวลา ${timeSelect}</span>
    `;
    resultDiv.appendChild(message);
}