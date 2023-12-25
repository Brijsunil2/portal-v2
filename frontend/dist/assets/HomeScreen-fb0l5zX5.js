import{r as v,u as k,j as e,c as P,B as b,a as C,b as F,d as R,C as N,R as g,e as f,S as L,s as I,f as U,g as V}from"./index-rjsEL-S0.js";import{c as G,a as w,F as s,f as B}from"./index.esm-toxatSzD.js";const E=v.forwardRef(({bsPrefix:r,size:i,vertical:o=!1,className:u,role:h="group",as:x="div",...j},p)=>{const c=k(r,"btn-group");let d=c;return o&&(d=`${c}-vertical`),e.jsx(x,{...j,ref:p,role:h,className:P(u,d,i&&`${c}-${i}`)})});E.displayName="ButtonGroup";const $=E,A=()=>{},q=v.forwardRef(({bsPrefix:r,name:i,className:o,checked:u,type:h,onChange:x,value:j,disabled:p,id:c,inputRef:d,...m},t)=>(r=k(r,"btn-check"),e.jsxs(e.Fragment,{children:[e.jsx("input",{className:r,name:i,type:h,value:j,ref:d,autoComplete:"off",checked:!!u,disabled:!!p,onChange:x||A,id:c}),e.jsx(b,{...m,ref:t,className:P(o,p&&"disabled"),type:void 0,role:void 0,as:"label",htmlFor:c})]})));q.displayName="ToggleButton";const S=q,H=()=>{const[r,i]=v.useState(!0),{Formik:o}=B,u=G().shape({email:w().required().email(),password:w().required()}),h=C(),x=F(),[j,{isLoading:p}]=R(),c=async d=>{var m,t;i(!0);try{const a=await j(d).unwrap();x(I({...a})),h("/")}catch(a){if(a.status===401)switch(a.data.message){case"Invalid email or password":i(!1);break;default:console.log(((m=a==null?void 0:a.data)==null?void 0:m.message)||a.error)}else console.log(((t=a==null?void 0:a.data)==null?void 0:t.message)||a.error)}};return e.jsxs(N,{className:"authlogin-container",children:[e.jsx("h2",{className:"auth-h2",children:"Login to Portal!"}),e.jsx(o,{validationSchema:u,onSubmit:d=>c(d),initialValues:{name:"",username:"",email:"",password:"",confirmPassword:""},children:({handleSubmit:d,handleChange:m,values:t,touched:a,errors:l})=>e.jsxs(s,{noValidate:!0,onSubmit:d,children:[e.jsx(g,{className:"mb-3",children:e.jsxs(s.Group,{as:f,children:[e.jsx(s.Control,{type:"email",placeholder:"Email",name:"email",value:t.email,onChange:m,isInvalid:(l.email||!r)&&a.email}),e.jsx(s.Control.Feedback,{type:"invalid",children:r?"Please provide a valid email":""})]})}),e.jsx(g,{className:"mb-3",children:e.jsxs(s.Group,{as:f,children:[e.jsx(s.Control,{type:"password",placeholder:"Password",name:"password",value:t.password,onChange:m,isInvalid:(l.password||!r)&&a.password}),e.jsx(s.Control.Feedback,{type:"invalid",children:r?"Please provide a password":"Invalid email or password"})]})}),e.jsx(b,{type:"submit",children:p?e.jsx(L,{animation:"border",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}):"Sign-up"})]})})]})},T=()=>{const[r,i]=v.useState(!0),[o,u]=v.useState(!0),{Formik:h}=B,x=G().shape({name:w().required(),username:w().required().min(5),email:w().required().email(),password:w().required(),confirmPassword:w().required()}),j=C(),p=F(),[c,{isLoading:d}]=U(),m=async t=>{var a,l;i(!0),u(!0);try{const n=await c(t).unwrap();p(I({...n})),j("/")}catch(n){if(n.status===400)switch(n.data.message){case"Email already exists":u(!1);break;case"Username already exists":i(!1);break;default:console.log(((a=n==null?void 0:n.data)==null?void 0:a.message)||n.error)}else console.log(((l=n==null?void 0:n.data)==null?void 0:l.message)||n.error)}};return e.jsxs(N,{className:"authsignup-container",children:[e.jsx("h2",{className:"auth-h2",children:"Sign-up to get Started!"}),e.jsx(h,{validationSchema:x,onSubmit:t=>m(t),initialValues:{name:"",username:"",email:"",password:"",confirmPassword:""},children:({handleSubmit:t,handleChange:a,values:l,touched:n,errors:y})=>e.jsxs(s,{noValidate:!0,onSubmit:t,children:[e.jsx(g,{className:"mb-3",children:e.jsxs(s.Group,{as:f,children:[e.jsx(s.Control,{type:"text",placeholder:"Name",name:"name",value:l.name,onChange:a,isInvalid:y.name&&n.name}),e.jsx(s.Control.Feedback,{type:"invalid",children:"Please provide your name"})]})}),e.jsx(g,{className:"mb-3",children:e.jsxs(s.Group,{as:f,children:[e.jsx(s.Control,{type:"text",placeholder:"Username",name:"username",minLength:"5",maxLength:"20",value:l.username,onChange:a,isInvalid:(y.username||!r)&&n.username}),e.jsx(s.Control.Feedback,{type:"invalid",children:r?"Username must be a minimum of 5 characters long":"Username already exists"})]})}),e.jsx(g,{className:"mb-3",children:e.jsxs(s.Group,{as:f,children:[e.jsx(s.Control,{type:"email",placeholder:"Email",name:"email",value:l.email,onChange:a,isInvalid:(y.email||!o)&&n.email}),e.jsx(s.Control.Feedback,{type:"invalid",children:o?"Please provide a valid email":"Email already exists"})]})}),e.jsx(g,{className:"mb-3",children:e.jsxs(s.Group,{as:f,children:[e.jsx(s.Control,{type:"password",placeholder:"Password",name:"password",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",value:l.password,onChange:a,isInvalid:y.password&&n.password}),e.jsx(s.Control.Feedback,{type:"invalid",children:"Password must have at least one lowercase, one uppercase, a number and at least 8 characters long"})]})}),e.jsx(g,{className:"mb-3",children:e.jsxs(s.Group,{as:f,children:[e.jsx(s.Control,{type:"password",placeholder:"Retype Password",value:l.confirmPassword,name:"confirmPassword",onChange:a,isInvalid:l.password!==l.confirmPassword&&n.confirmPassword}),e.jsx(s.Control.Feedback,{type:"invalid",children:"Passwords must match"})]})}),e.jsx(b,{type:"submit",children:d?e.jsx(L,{animation:"border",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}):"Sign-up"})]})})]})},M=({setUser:r})=>{const[i,o]=v.useState(!0);return e.jsxs("div",{className:"authsection-container",children:[e.jsxs($,{children:[e.jsx(S,{type:"radio",checked:i,onClick:()=>o(!0),children:"Login"}),e.jsx(S,{type:"radio",checked:!i,onClick:()=>o(!1),children:"Sign-up"})]}),e.jsx(N,{children:i?e.jsx(H,{}):e.jsx(T,{})})]})},z=()=>{const{userInfo:r}=V(o=>o.auth),i=C();return v.useEffect(()=>{r&&i("/home")},[r,i]),e.jsx("div",{className:"homescreen-container",children:e.jsx("div",{className:"primary-container",children:e.jsx(M,{})})})};export{z as default};
