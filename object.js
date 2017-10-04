/*
* @Author: 宏达
* @Date:   2017-09-27 12:46:40
* @Last Modified by:   宏达
* @Last Modified time: 2017-10-04 20:28:39
*/
class storage{
	constructor(){
		this.data=[{name:'张三',age:18,sex:'男',address:'山西大同',phone:1112233},
	{name:'李四',age:20,sex:'女',address:'山西太原',phone:2211333},
	{name:'张岚',age:18,sex:'男',address:'山西晋中',phone:4455665},
	{name:'李鑫',age:18,sex:'女',address:'山西临汾',phone:4477885},
	{name:'吴京',age:18,sex:'男',address:'山西阳泉',phone:4477755}
	    ];
	}
	//初始化
	_init(){
         localStorage.setItem('students',JSON.stringify(this.data));
    }
//查询
    getData(){
    	 let data=localStorage.getItem('students');
         if(!data){
         	this._init();
         }
         return this.data=JSON.parse(localStorage.getItem('students'));
	}
//更新
	update(row,type,value){
		this.data[row][type]=value;
		this.save();
	}
	del(row){
		this.data.splice(row,1);
		this.save();
	}
	push(obj){
		this.data.push(obj);
		this.save();
	}
	save(data){
		localStorage.setItem('students',JSON.stringify(this.data));
	}
}