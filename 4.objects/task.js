function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (!this.marks) {
        console.log("Student has been expelled");
        return;
    }
    this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
    if(!this.marks || !this.marks.length) {
        return 0;
    }
    const sum = this.marks.reduce((acc, curr) => acc + curr);
    return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}


//    this.setSubject = function(subjectName) {
//        this.subject = subjectName;
//    };
//
//    this.addMarks = function(...marksToAdd) {
//        if (!this.marks) {
//            console.log("Student has been expelled");
//            return;
//        }
//        this.marks.push(...marksToAdd);
//    };
//
//    this.getAverage = function() {
//        if(!this.marks || !this.marks.length) {
//            return 0;
//        }
//        const sum = this.marks.reduce((acc, curr) => acc + curr);
//        return sum / this.marks.length;
//    };
//
//    this.exclude = function(reason) {
//        delete this.subject;
//        delete this.marks;
//        this.excluded = reason;
//    };
