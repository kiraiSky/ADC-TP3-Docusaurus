"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[3237],{6554:(e,a,t)=>{t.d(a,{Z:()=>r});var o=t(7294);const l="modalOverlay_Ueg_",n="modalContent_sa2g",s="closeButton_VaUw",r=e=>{let{title:a,description:t,onClose:r}=e;return o.createElement("div",{className:l,onClick:r},o.createElement("div",{className:n,onClick:e=>e.stopPropagation()},o.createElement("span",{className:s,onClick:r},"\xd7"),o.createElement("h2",null,a),o.createElement("p",null,t)))}},4461:(e,a,t)=>{t.r(a),t.d(a,{default:()=>U});var o=t(7294),l=t(9960),n=t(2263),s=t(7961),r=(t(6554),t(1207));const i="container_Nd8Q",c="row_mCGK",m="rowReverse_Lj3V",d="imageBox_qBuY",u="authorImage_uUi6",p="textBox_q2P_",g="authorName_Xxsl",v="authorDescription_mMRb",E=[{id:1,name:"Hanna Paiva",description:"Especialista em Design e leitora \xe1vida",image:"./img/authors/hanna.png"},{id:2,name:"Adriano Muncaciu",description:"Manager da \xe1rea de venda de livros",image:"./img/authors/adriano.png"},{id:3,name:"Jo\xe3o Cunha",description:"Respons\xe1vel pelas resenhas submetidas dos livros.",image:"./img/authors/joao.png"},{id:4,name:"Paulo Ferreira",description:"Vendedor do software desenvolvido para gest\xe3o de livros",image:"./img/authors/paulo.png"}],_=()=>o.createElement("div",{className:r.Z.callToAction},o.createElement("div",{className:i},o.createElement("h2",null,"Idealizadores da Biblioteca Pro Max"),E.map(((e,a)=>o.createElement("div",{key:e.id,className:`${c} ${a%2==1?m:""}`},o.createElement("div",{className:d},o.createElement("img",{src:e.image,alt:e.name,className:u})),o.createElement("div",{className:p},o.createElement("h3",{className:g},e.name),o.createElement("p",{className:v},e.description)))))));var N=t(6010);const h="featuresSection_doj3",b="title_KROf",C="featureCard_e9kX",f=[{id:1,title:"\ud83d\udcda Acervo Inovador",description:"Mais de 50.000 t\xedtulos sobre tecnologia, ci\xeancia e inova\xe7\xe3o. Livros, e-books e audiolivros cuidadosamente selecionados para inspirar sua criatividade."},{id:2,title:"\ud83d\udecb\ufe0f Espa\xe7os Modernos",description:"Makerspace, laborat\xf3rios de realidade virtual e salas de estudo colaborativo. Ideal para transformar ideias em projetos."},{id:3,title:"\ud83c\udf1f Eventos e Workshops",description:"Participe de hackathons, palestras e cursos sobre tecnologia emergente e tend\xeancias futuras."},{id:4,title:"\ud83d\udda5\ufe0f Software robusto e confi\xe1vel",description:"Possu\xedmos um software de gest\xe3o de livros que \xe9 poss\xedvel de adquirir!"}],B=e=>{let{title:a,description:t}=e;return o.createElement("div",{className:(0,N.Z)("col col--6",C)},o.createElement("h3",null,a),o.createElement("p",null,t))},k=()=>o.createElement("div",{className:h},o.createElement("h2",{className:b},"Principais Benef\xedcios da Biblioteca Pro Max"),o.createElement("div",{className:"container"},o.createElement("div",{className:"row"},f.map((e=>o.createElement(B,{key:e.id,title:e.title,description:e.description})))))),y="aboutUsSection_PGNj",A="row_UVHs",T="imageColumn_edQH",S="aboutImage_IfzB",P="textColumn_WBDG",Z="title_Pn82",x="description_oNSL",w=()=>{const{siteConfig:e}=(0,n.Z)();return o.createElement("section",{className:y},o.createElement("div",{className:"container"},o.createElement("div",{className:A},o.createElement("div",{className:T},o.createElement("img",{src:"./img/LOGO.png",alt:"Sobre N\xf3s",className:S})),o.createElement("div",{className:P},o.createElement("h2",{className:Z},"Sobre a Biblioteca Pro Max"),o.createElement("p",{className:x},"A ",o.createElement("strong",null,"Biblioteca Pro Max")," \xe9 um centro de inova\xe7\xe3o, leitura e tecnologia. Nossa miss\xe3o \xe9 oferecer uma experi\xeancia \xfanica, unindo o mundo dos livros f\xedsicos com o digital. Temos uma vasta cole\xe7\xe3o de mais de 50.000 t\xedtulos e espa\xe7os modernos para estudo e colabora\xe7\xe3o."),o.createElement("p",{className:x},"Nossos espa\xe7os incluem \xe1reas de realidade virtual, makerspaces e salas projetadas para estimular a criatividade e o aprendizado. A Biblioteca Pro Max est\xe1 sempre em busca de inova\xe7\xe3o para tornar o conhecimento acess\xedvel a todos.")))))},I="contactFormContainer_teR7",M="contactForm_uCl4",O="title_Pr9b",j="subtitle_zQg_",q="inputRow_kbaA",R="inputField_TSl7",F="submitButton_C8Af",z=()=>{const[e,a]=(0,o.useState)({firstName:"",lastName:"",email:"",phone:""}),t=t=>{const{name:o,value:l}=t.target;a({...e,[o]:l})};return o.createElement("div",{className:I},o.createElement("form",{className:M,onSubmit:a=>{a.preventDefault(),console.log("Form Submitted",e),alert("Form Submitted Successfully!")}},o.createElement("h2",{className:O},"Nos contate"),o.createElement("p",{className:j},"Vamos responder o mais cedo quanto poss\xedvel!"),o.createElement("div",{className:q},o.createElement("input",{type:"text",name:"firstName",placeholder:"Nome",value:e.firstName,onChange:t,required:!0,className:R}),o.createElement("input",{type:"text",name:"lastName",placeholder:"Apelido",value:e.lastName,onChange:t,required:!0,className:R})),o.createElement("div",{className:q},o.createElement("input",{type:"email",name:"email",placeholder:"Email",value:e.email,onChange:t,required:!0,className:R}),o.createElement("input",{type:"tel",name:"phone",placeholder:"Telefone",value:e.phone,onChange:t,className:R})),o.createElement("button",{type:"submit",className:F},"Send")))},D=[{id:1,title:"Biblioteca pro MAX",image:"./img/slider/mainpage.png"},{id:2,title:"Participe de Workshops",image:"./img//slider/carousel1.jpg"},{id:3,title:"Espa\xe7os Colaborativos",image:"./img//slider/carousel2.jpg"},{id:4,title:"Espa\xe7os Colaborativos",image:"./img//slider/carousel3.jpg"},{id:4,title:"Espa\xe7os Colaborativos",image:"./img//slider/carousel3.png"}];function G(){const[e,a]=(0,o.useState)(0);return o.createElement("div",{className:r.Z.carouselContainer},o.createElement("div",{className:r.Z.carouselImage,style:{backgroundImage:`url(${D[e].image})`}},o.createElement("div",{className:r.Z.overlay}),o.createElement("div",{className:r.Z.carouselContent},o.createElement("h1",{className:"hero__title happy"},D[e].title)),o.createElement("button",{onClick:()=>a((e=>(e-1+D.length)%D.length)),className:r.Z.arrowButton},"\u2190"),o.createElement("button",{onClick:()=>a((e=>(e+1)%D.length)),className:r.Z.arrowButton},"\u2192")))}function U(){const{siteConfig:e}=(0,n.Z)();return o.createElement(s.Z,{title:`Bem-vindo \xe0 ${e.title}`,description:"A Biblioteca PRO MAX \xe9 um centro de inova\xe7\xe3o, tecnologia e criatividade."},o.createElement(G,null),o.createElement("main",null,o.createElement(w,null),o.createElement("section",{className:r.Z.callToAction},o.createElement("div",{className:"container"},o.createElement("h2",{className:r.Z.callToActionTitle},"\ud83c\udf10 Junte-se \xe0 Revolu\xe7\xe3o do Conhecimento"),o.createElement("br",null),o.createElement("p",{className:r.Z.callToActionText},"Descubra um mundo de inova\xe7\xe3o e aprendizado. Torne-se membro e aproveite todas as vantagens que a Biblioteca PRO MAX tem a oferecer."),o.createElement("br",null),o.createElement(l.Z,{className:"button button--primary button--lg",to:"/VendaSoftware"},"Consultar planos PRO AMX"),o.createElement("br",null))),o.createElement(k,null),o.createElement(_,null),o.createElement(z,null)))}},1207:(e,a,t)=>{t.d(a,{Z:()=>o});const o={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN",paginaInicial:"paginaInicial_sUtH",cardsContainer:"cardsContainer_CQtU",happy:"happy_d7f1",heroImage:"heroImage_xZN7",float:"float_x2Lw",heroTitle:"heroTitle_qg2I",heroSubtitle:"heroSubtitle_jFu1",button:"button_JGCe",heroButtons:"heroButtons_r52D",featuresSection:"featuresSection_Y0uK",featureCard:"featureCard_Jbd_",callToAction:"callToAction_n5Oe",callToActionTitle:"callToActionTitle_zyYS",callToActionText:"callToActionText_zmi2",socorro:"socorro_Gflk",imaggy:"imaggy_hIxc",bookshelf:"bookshelf_ZssO",shelf:"shelf_poP9",book:"book_QCHZ",modalOverlay:"modalOverlay_aSGA",modalContent:"modalContent_G0Ul",closeButton:"closeButton_muHm",carouselContainer:"carouselContainer_Flor",carouselImage:"carouselImage_LOM9",overlay:"overlay_CDjE",carouselContent:"carouselContent_zwyD",arrowButton:"arrowButton_YXB2",thin:"thin_yOhL"}}}]);