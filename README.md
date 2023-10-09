# testEdvisory_Burisaphol
1. เปิดไฟล์ใน VScode
2. ใช้ MoongoDB database เชื่อมเพื่อเก็บข้อมูล / check link moogoDB เปลี่ยน username เเละ password
3. run คำสั่ง npm install, npm run build เเละ npm run start
4. เปิดลิ้ง postman : https://www.postman.com/satellite-astronomer-57942336/workspace/test-edvisory/collection/29782345-5a59a6d7-50f3-455a-9700-125425f928c7?action=share&creator=29782345&active-environment=29782345-b9978d0c-6cbd-4c71-944a-47674289c817
5. check environment url = localhost:3000
6. createNote ทีละอันโดยจะต้องใส่ชื่อ Note , Customer เเละ CatagoryNote โดย type จะต้องเป็น String เเละส่วนของ HistoryNote จะกำหนดเป็นวันปัจจุปันที่เเก้ไขหรือเขียนnoteนั้น ส่วนนี้จะกำหนดไว้อัตโนมัติ เเต่สามารถใส่วันตามต้องการได้ เช่น 2022-06-30
7. updateNote อัปเดตได้โดยตาม id ของ note ที่ต้องการเปลี่ยน เเละใส่ข้อมูลที่ต้องการเปลี่ยน จากนั้น HistoryNote จะอัปเดตให้เป็นวันปัจจุยันที่เเก้ไข
8. deleteNote ลบ Note ตาม id
9. getManyNote ค้นหา note ที่ต้องการหา โดย search คือหาชื่อ Note , customer หา ชื่อ customer เเละ catagory หาประเภท

