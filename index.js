/*
* @Author: 宏达
* @Date:   2017-09-26 15:24:01
* @Last Modified by:   宏达
* @Last Modified time: 2017-10-04 21:00:52
*/
window.addEventListener('load',function(){
  let table=document.querySelector('tbody');
  let add=document.querySelector('.add');
  let dataObj=new storage();  
//双击修改数据
    table.ondblclick=function(e){
       let element=e.target;
       if(element.nodeName=='TD' && element.className!='del'){
          let oldv=element.innerText;
          element.innerText='';
          let inputs=document.createElement('input');
          inputs.value=oldv;   //设置内容（类似在当前基础修改）
          element.appendChild(inputs);
          inputs.onblur=function(){   //onblur失去焦点
             let newv=this.value.trim();
             element.removeChild(inputs);
             // inputs=null;
             if(!newv){
              element.innerText=oldv;
             }
             element.innerText=newv;
             let row=element.parentNode.id;
                 type=element.getAttribute('type');
                 value=newv;
            console.log(row);
            dataObj.update(row,type,value);             
          }
      }
      //删除
      else if(element.nodeName=='BUTTON'){
        let tr=element.parentNode.parentNode;
        // table.removeChild(tr);
        // let parent=element.parentNode.parentNode;
        // table.removeChild(parent);
        let index=element.parentNode.id;
        dataObj.del(index);
        table.innerHTML='';
        load();
      }
    };
//添加
    //查询添加数index为下标
    load();
    function load(){
       let students=dataObj.getData();
       students.forEach((element,index)=>{
          createTr(element,index);
       })
    }
    // let del=document.querySelector('.del'); 

//update更新数据
    function createTr(obj,i){
        let trs=document.createElement('tr');
        trs.id=i;
        for(let j in obj){
           trs.innerHTML+=`<td type="${j}">${obj[j]}</td>`;
        }
        trs.innerHTML+=`<td class="del"><button>删除</button></td>`
        table.appendChild(trs);
      
    }
//添加数据
    add.onclick=function(){
      let obj={name:'李青',age:20,sex:'男',address:'山西大同',phone:5555555}
      createTr(obj,table.childElementCount);
      dataObj.push(obj);
    }  
})