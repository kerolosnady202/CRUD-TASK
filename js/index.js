let productName=document.querySelector("#name")
let productCategory=document.querySelector("#category")
let productPrice=document.querySelector("#price")
let productDescription=document.querySelector("#description")
let addButton=document.querySelector("#add")
/* let updataButton=document.querySelector("#updata") */
let tbody=document.querySelector("#tbody")
let mybtns=document.querySelector('btns')


/* productList=[
    {name:'kerols1',category:"jashd",price:"12",description:"ff;ladk;a"},
    {name:'kerols2',category:"jashd",price:"12",description:"ff;ladk;a"},
] */
productList=[]
/* localStorage.setItem("allProduct",JSON.stringify(productList)) */

function addProduct() {
    let product={
        name:productName.value,
        category:productCategory.value,
        price:productPrice.value,
        description:productDescription.value
    }
    productList.push(product)
    localStorage.setItem("allProduct",JSON.stringify(productList))
    createRow(product)
    window.location.reload()
}

function showAllProduct() {
    if (localStorage.getItem("allProduct")!== null) {
        productList=JSON.parse(localStorage.getItem("allProduct"))
     }
     
    for (let index = 0; index < productList.length; index++) {
       createRow(productList[index],index)
    }
    
}
showAllProduct()
function deleteProduct(id) {
    productList.splice(id,1)
    localStorage.setItem("allProduct",JSON.stringify(productList))
  /*   id = parseInt(id)
    console.log(typeof id) */
    if (id == 1) {
        tbody.innerHTML=""
    }else{
        tbody.deleteRow(id)
    }

   /*  window.location.reload() */
    /* showAllProduct() */
}

function createRow(rowdata,index=productList.length) {
    let tr=document.createElement('tr')
    for (const key in rowdata) {
        let tdtext=document.createTextNode(rowdata[key])
        let td=document.createElement("td")
        td.append(tdtext)
        tr.append(td)
        
    }
    let updatabtn=document.createElement("button")
    let deletebtn=document.createElement("button")
    let updataText=document.createTextNode("Updata")
    let deleteText=document.createTextNode("Delete")
    updatabtn.classList.add('btn','btn-primary','mx-1',"mt-2")
    deletebtn.classList.add('btn','btn-danger','mx-1',"mt-2")
    updatabtn.append(updataText)
    deletebtn.append(deleteText)
    tr.append(updatabtn)
    tr.append(deletebtn)
    tbody.append(tr)
    deletebtn.addEventListener("click",()=>deleteProduct(index))
    updatabtn.addEventListener("click",()=>setData(rowdata, index))

}
function setData(rowdata , index) {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
   addButton.classList.add("d-none")
   productName.value=rowdata.name
   productCategory.value=rowdata.category
   productPrice.value=rowdata.price
   productDescription.value=rowdata.description
   let mainupdatabtn=document.createElement("button")
   let mainupdataText=document.createTextNode("Updata")
   mainupdatabtn.classList.add("btn", "btn-success")
   mainupdatabtn.setAttribute("type","button")
   mainupdatabtn.append(mainupdataText)
   btns.append(mainupdatabtn)
   mainupdatabtn.addEventListener("click",()=>updataRow(index))
}
function reset() {
    productName.value=""
   productCategory.value=""
   productPrice.value=""
   productDescription.value=""
}

function updataRow(index){
    let product={
        name:productName.value,
        category:productCategory.value,
        price:productPrice.value,
        description:productDescription.value
    }
    productList[index]=product
    localStorage.setItem("allProduct",JSON.stringify(productList))
    window.location.reload()

}

