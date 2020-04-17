// 创建求职人员类
var People = function (info) {
  this.age = (info && info.age) || "保密";
  this.phone = (info && info.phone) || "保密";
};

// 求职人员类原型方法
People.prototype = {
  getAge: function () {
    return this.age;
  },
  getPhone: function () {
    return this.phone;
  },
};
// 解析姓名
var Name = function (name) {
  var _this = this;
  (function (name, that) {
    that.fullName = name;
    if (name.indexOf(" ") > -1) {
      that.firstName = name.slice(0, name.indexOf(" "));
      that.lastName = name.slice(name.indexOf(" ") + 1);
    }
  })(name, _this);
};

// 职位类
var Work = function (job) {
  var _this = this;
  (function (job, that) {
    switch (job) {
      case "code":
        that.job = "程序员";
        that.jobDescription = "沉醉于代码无法自拔";
        break;
      case "UI":
      case "UE":
        that.job = "设计师";
        that.jobDescription = "沉醉于艺术无法自拔";
        break;
      case "teacher":
        that.job = "教师";
        that.jobDescription = "沉醉于教学无法自拔";
        break;
      default:
        that.job = job;
        that.jobDescription = "暂时没有您选择职位的相关描述";
    }
  })(job, _this);
};
Work.prototype.changeJob = function (job) {
  this.job = job;
};
Work.prototype.changeJd = function (description) {
  this.jobDescription = description;
};
/**
 * 求职者建造者（类）
 * @param {string} name
 * @param {string} job
 */
var Employees = function (name, job) {
  // 创建求职用户缓存对象
  var employee = new People();
  // 创建姓名解析对象
  employee.name = new Name(name);
  // 创建职位对象
  employee.job = new Work(job);
  return employee;
};
// 创建一个求职应聘者
var employee = new Employees("li ming", "code");

console.log(employee.phone); // 保密
console.log(employee.getAge()); // 保密
console.log(employee.name.lastName); // ming
console.log(employee.job.job); // 程序员
console.log(employee.job.jobDescription); // 沉醉于代码无法自拔
employee.job.changeJd("编程让世界更美好");
console.log(employee.job.jobDescription); // 编程让世界更美好

class People {
  constructor(age, phone) {
    this.age = age || "保密";
    this.phone = phone || "保密";
  }
  // 解析姓名
  createName(name) {
    if (name.indexOf(" ") > -1) {
      this.firstName = name.slice(0, name.indexOf(" "));
      this.lastName = name.slice(name.indexOf(" ") + 1);
    }
    return this;
  }
  // 求职职位
  judgeWork(job) {
    switch (job) {
      case "code":
        this.job = "程序员";
        this.jobDescription = "沉醉于代码无法自拔";
        break;
      case "UI":
      case "UE":
        this.job = "设计师";
        this.jobDescription = "沉醉于艺术无法自拔";
        break;
      case "teacher":
        this.job = "教师";
        this.jobDescription = "沉醉于教学无法自拔";
        break;
      default:
        this.job = job;
        this.jobDescription = "暂时没有您选择职位的相关描述";
    }
    return this;
  }
}

const employee = new People(21).createName("xiao ming").judgeWork("code");
console.log(employee);
// People {
//   age: 21,
//   phone: '保密',
//   firstName: 'xiao',
//   lastName: 'ming',
//   job: '程序员',
//   jobDescription: '沉醉于代码无法自拔'
// }
