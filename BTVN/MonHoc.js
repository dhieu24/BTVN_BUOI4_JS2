import SinhVien from "../BTVN/SinhVien.js";
import GiangVien from "../BTVN/GiangVien.js";

export default class MonHoc {
    maLop;
    tenMonHoc;
    giangVien;

    constructor(maLop, tenMonHoc) {
        this.maLop = maLop;
        this.tenMonHoc = tenMonHoc;
        this.danhSachSinhVien = [];
    }
    addGiangVien(giangVien) {
        if(giangVien instanceof GiangVien) {
            this.giangVien = giangVien;
        }
    }

    addSinhVien(sinhvien) {
        if(sinhvien instanceof SinhVien)
        {
            this.danhSachSinhVien.push(sinhvien);
        }
    }

    botSinhVien(sinhvien) {
        if(sinhvien instanceof SinhVien) {
            for(let i = 0; i < this.danhSachSinhVien.length; i++) {
                if(sinhvien == this.danhSachSinhVien[i]) {
                    this.danhSachSinhVien.splice(i, 1);
                }
            }
        }
    }

    suaSinhVien(maSinhVien, property, value) {
        for(let i = 0; i < danhSachSinhVien.length; i++) {
            if(maSinhVien == danhSachSinhVien[i].id) {
                danhSachSinhVien[i][property] = value;
            }
        }
    }

    xemSinhVien() {
        console.log(this.danhSachSinhVien);
    }

    xemGiangVien() {
        console.log(this.giangVien);
    }

    
    timSinhVien(maSinhVien) {
        for(let i = 0; i < this.danhSachSinhVien.length; i++) {
            if(maSinhVien == this.danhSachSinhVien[i].maSinhVien){
                alert(this.danhSachSinhVien[i]);
            }
        }
    }

    timSinhVien(ten) {
        danhSachSinhVienCungTen = [];
        for(let i = 0; i < this.danhSachSinhVien.length; i++) {
            if(ten == this.danhSachSinhVien[i].ten){
                danhSachSinhVienCungTen.push(this.danhSachSinhVien[i]);
            }
        }
        return danhSachSinhVienCungTen;
    }



}

