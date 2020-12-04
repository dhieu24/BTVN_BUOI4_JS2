import SinhVien from "../BTVN/SinhVien.js";
import GiangVien from "../BTVN/GiangVien.js";
import MonHoc from "../BTVN/MonHoc.js";

var monToan = new MonHoc('Toan123', 'Toan');
var sinhvien1 = new SinhVien(1, 'Hieu', 18, '2020-2024');
var giangVien1 = new GiangVien(1, 'Long', 25, 'Thac_Si');

monToan.addSinhVien(sinhvien1);
monToan.addGiangVien(giangVien1);
