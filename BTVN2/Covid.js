class People {
    name;
    age;
    phoneNumber;
    vector = {
        x: 0,
        y: 0
    }

    constructor(name, age, phoneNumber, vector) {
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.vector = vector;
    }
    static tinhKhoangCach(nguoi1, nguoi2) {
        return Math.sqrt(Math.pow((nguoi2.vector.x - nguoi1.vector.x), 2) + Math.pow((nguoi2.vector.y - nguoi1.vector.y),2));
    } 
}
    //F0
    var person1 = new People('Hieu', 18, 0909090909, {x: 2, y: 3})

    //Nguoi can kiem tra
    var person2 = new People('Linh', 11, 113, {x: 4, y: 4});
    var person3 = new People('Tuan', 22, 114, {x: 5, y: 8});
    var person4 = new People('Tra', 30, 115, {x: 0, y: 1});
    var person5 = new People('Vu', 48, 116, {x: 2, y: 4});//
    var person6 = new People('Thu', 90, 117, {x: 2, y: 5} );
    var person7 = new People('QuynhNhu', 14, 118, {x: 3, y: 4} );//
    var person8 = new People('Vinh', 8, 100, {x: 2, y: 3.2} );//
    var person9 = new People('Hoang', 10, 132, {x: 2.9, y: 13.2} );
    var person10 = new People('Phuong', 46, 167, {x: 3.4, y: 3.8} );//
    var dayNguoi = [person2, person3, person4, person5, person6, person7, person8, person9, person10];
    
    function kiemTraF1() {
        var khoangCach;
        var ketquaF1 = [];
        var anhemKhongF1 = [];
        var anhemF1 = [];
        for(let i = 0; i < dayNguoi.length; i ++) {
            khoangCach = People.tinhKhoangCach(person1, dayNguoi[i]);
            if(khoangCach <2 && khoangCach > 0) {
                anhemF1.push(dayNguoi[i]);

            }else {
                anhemKhongF1.push(dayNguoi[i]);
            }
        }
        ketquaF1.push(anhemF1);
        ketquaF1.push(anhemKhongF1);
        return ketquaF1;
    }

    
    function kiemTraF2(mangF1, mangNotF1) {
        var khoangCach2;
        var anhemF2 = [];
        for(let i = 0; i < mangF1.length; i ++) {
            for(let j = 0; j < mangNotF1.length; j ++) {
                khoangCach2 = People.tinhKhoangCach(mangF1[i], mangNotF1[j])
                if(khoangCach2 < 2 && khoangCach2 >0) {
                    if(!anhemF2.includes(mangNotF1[j])){
                        anhemF2.push(mangNotF1[j]);
                    }
                }   
            }
        }
        return anhemF2;
    
    }

    var ResultF1 = kiemTraF1();

    // Day nguoi F1
    var F1 = ResultF1[0];
    console.log("Dãy người F1:");
    console.log(F1); 

    // Day nguoi khong phai F1
    console.log("Dãy người KHÔNG là F0 và F1 (nhưng hoàn toàn có thể là F2):");
    var NotF1 = ResultF1[1];
    console.log(NotF1);

    // Day nguoi F2
    console.log("Dãy người F2:");
    var F2 = kiemTraF2(F1, NotF1);
    console.log(F2);

