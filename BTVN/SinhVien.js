export default class SinhVien {
    maSinhVien;
    ten;
    tuoi;
    nienKhoa;

    constructor(maSinhVien, ten, tuoi, nienKhoa) {
        this.maSinhVien = maSinhVien;
        this.ten = ten;
        this.tuoi = tuoi;
        this.nienKhoa = nienKhoa;
    }

    update(property, value) {
        this[property] = value;
    }
}

