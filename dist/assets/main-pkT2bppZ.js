import{g as p,s as m,u as y,p as S}from"./showToast-CtBCiTSP.js";p();const q=(u,r,l)=>{let c=p();const n=document.querySelector(`#card${r}`);let t=n.querySelector(".productQuantity").innerText,o=n.querySelector(".productPrice").innerText;o=o.replace("Rs. ","");let d=c.find(a=>a.id===r);if(d&&t>1){t=Number(d.quantity)+Number(t),o=Number(o*t);let a={id:r,quantity:t,price:o};a=c.map(i=>i.id===r?a:i),console.log(a),localStorage.setItem("cartProductLS",JSON.stringify(c)),m("add",r)}if(d)return!1;o=Number(o*t),t=Number(t),c.push({id:r,quantity:t,price:o}),localStorage.setItem("cartProductLS",JSON.stringify(c)),y(c),m("add",r)},g=(u,r,l)=>{const n=document.querySelector(`#card${r}`).querySelector(".productQuantity");let t=parseInt(n.getAttribute("data-quantity"))||1;return u.target.className==="cartIncrement"&&(t<l?t+=1:t===l&&(t=l)),u.target.className==="cartDecrement"&&t>1&&(t-=1),n.innerText=t,n.setAttribute("data-quantity",t.toString()),t},C=document.querySelector("#productContainer"),f=document.querySelector("#productTemplate"),N=u=>{if(!u)return!1;u.forEach(r=>{const{brand:l,category:c,description:n,id:t,image:o,name:d,price:a,stock:i}=r,e=document.importNode(f.content,!0);e.querySelector("#cardValue").setAttribute("id",`card${t}`),e.querySelector(".productName").textContent=d,e.querySelector(".productImage").src=o,e.querySelector(".productImage").alt=d,e.querySelector(".productStock").textContent=i,e.querySelector(".productDescription").textContent=n,e.querySelector(".category").textContent=c,e.querySelector(".productPrice").textContent=`Rs. ${a}`,e.querySelector(".productActualPrice").textContent=`Rs. ${a*4}`,e.querySelector(".stockElement").addEventListener("click",s=>{g(s,t,i)}),e.querySelector(".add-to-cart-button").addEventListener("click",s=>{q(s,t)}),C.append(e)})};N(S);
