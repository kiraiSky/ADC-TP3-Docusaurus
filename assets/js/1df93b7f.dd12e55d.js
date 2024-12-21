"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[3237],{5755:(e,a,t)=>{t.r(a),t.d(a,{default:()=>H});var o=t(7294),l=t(9960),n=t(2263),r=t(7961);const s="container_qTzs",i="row_J7xG",c="rowReverse_l9zF",m="imageBox_VeFK",d="authorImage_Cilw",u="textBox_IT8p",p="authorName_ZrJl",g="authorDescription__i56";var v=t(1207);const h=[{id:1,name:"Hanna Paiva",description:"Especialista em Design e leitora \xe1vida",image:"./img/authors/hanna.png"},{id:2,name:"Adriano Muncaciu",description:"Manager da \xe1rea de venda de livros",image:"./img/authors/adriano.png"},{id:3,name:"Jo\xe3o Cunha",description:"Respons\xe1vel pelas resenhas submetidas dos livros.",image:"./img/authors/joao.png"},{id:4,name:"Paulo Ferreira",description:"Vendedor do software desenvolvido para gest\xe3o de livros",image:"./img/authors/paulo.png"}],_=()=>o.createElement("div",{className:v.Z.callToAction},o.createElement("div",{className:s},o.createElement("h2",null,"Idealizadores da Biblioteca Pro Max"),h.map(((e,a)=>o.createElement("div",{key:e.id,className:`${i} ${a%2==1?c:""}`},o.createElement("div",{className:m},o.createElement("img",{src:e.image,alt:e.name,className:d})),o.createElement("div",{className:u},o.createElement("h3",{className:p},e.name),o.createElement("p",{className:g},e.description)))))));var E=t(6010);const N="featuresSection_FXIs",b="title_Fmz9",f="featureCard_e10r",C=[{id:1,title:"\ud83d\udcda Acervo Inovador",description:"Mais de 50.000 t\xedtulos sobre tecnologia, ci\xeancia e inova\xe7\xe3o. Livros, e-books e audiolivros cuidadosamente selecionados para inspirar sua criatividade."},{id:2,title:"\ud83d\udecb\ufe0f Espa\xe7os Modernos",description:"Makerspace, laborat\xf3rios de realidade virtual e salas de estudo colaborativo. Ideal para transformar ideias em projetos."},{id:3,title:"\ud83c\udf1f Eventos e Workshops",description:"Participe de hackathons, palestras e cursos sobre tecnologia emergente e tend\xeancias futuras."},{id:4,title:"\ud83d\udda5\ufe0f Software robusto e confi\xe1vel",description:"Possu\xedmos um software de gest\xe3o de livros que \xe9 poss\xedvel de adquirir!"}],x=e=>{let{title:a,description:t}=e;return o.createElement("div",{className:(0,E.Z)("col col--6",f)},o.createElement("h3",null,a),o.createElement("p",null,t))},y=()=>o.createElement("div",{className:N},o.createElement("h2",{className:b},"Principais Benef\xedcios da Biblioteca Pro Max"),o.createElement("div",{className:"container"},o.createElement("div",{className:"row"},C.map((e=>o.createElement(x,{key:e.id,title:e.title,description:e.description})))))),A="aboutUsSection_bHjp",B="row_WT6Q",T="imageColumn_AZAI",F="aboutImage_nrb6",S="textColumn_tNKG",Z="title_jBQ6",w="description_GtHx",k=()=>{const{siteConfig:e}=(0,n.Z)();return o.createElement("section",{className:A},o.createElement("div",{className:"container"},o.createElement("div",{className:B},o.createElement("div",{className:T},o.createElement("img",{src:"./img/LOGO.png",alt:"Sobre N\xf3s",className:F})),o.createElement("div",{className:S},o.createElement("h2",{className:Z},"Sobre a Biblioteca Pro Max"),o.createElement("p",{className:w},"A ",o.createElement("strong",null,"Biblioteca Pro Max")," \xe9 um centro de inova\xe7\xe3o, leitura e tecnologia. Nossa miss\xe3o \xe9 oferecer uma experi\xeancia \xfanica, unindo o mundo dos livros f\xedsicos com o digital. Temos uma vasta cole\xe7\xe3o de mais de 50.000 t\xedtulos e espa\xe7os modernos para estudo e colabora\xe7\xe3o."),o.createElement("p",{className:w},"Nossos espa\xe7os incluem \xe1reas de realidade virtual, makerspaces e salas projetadas para estimular a criatividade e o aprendizado. A Biblioteca Pro Max est\xe1 sempre em busca de inova\xe7\xe3o para tornar o conhecimento acess\xedvel a todos.")))))},I="contactFormContainer_LWz6",P="contactForm_xFFY",M="title_ZC2S",z="subtitle_yn8a",O="inputRow_Rto7",j="inputField_nuAu",q="submitButton_t0DT",D=()=>{const[e,a]=(0,o.useState)({firstName:"",lastName:"",email:"",phone:""}),t=t=>{const{name:o,value:l}=t.target;a({...e,[o]:l})};return o.createElement("div",{className:I},o.createElement("form",{className:P,onSubmit:a=>{a.preventDefault(),console.log("Form Submitted",e),alert("Form Submitted Successfully!")}},o.createElement("h2",{className:M},"Nos contate"),o.createElement("p",{className:z},"Vamos responder o mais cedo quanto poss\xedvel!"),o.createElement("div",{className:O},o.createElement("input",{type:"text",name:"firstName",placeholder:"Nome",value:e.firstName,onChange:t,required:!0,className:j}),o.createElement("input",{type:"text",name:"lastName",placeholder:"Apelido",value:e.lastName,onChange:t,required:!0,className:j})),o.createElement("div",{className:O},o.createElement("input",{type:"email",name:"email",placeholder:"Email",value:e.email,onChange:t,required:!0,className:j}),o.createElement("input",{type:"tel",name:"phone",placeholder:"Telefone",value:e.phone,onChange:t,className:j})),o.createElement("button",{type:"submit",className:q},"Send")))},G=[{id:1,title:"Biblioteca Pro MAX",image:"./img/slider/mainpage.png"},{id:2,title:"Leia livros como nunca leu antes",image:"./img/slider/carousel1.jpg"},{id:3,title:"Participe de espa\xe7os colaborativos",image:"./img/slider/carousel2.jpg"},{id:4,title:"Tecnologia e Literatura mescladas como um",image:"./img/slider/carousel3.jpg"}],L={fontSize:"56px",fontWeight:"600",color:"#FFFFFF",textAlign:"center",lineHeight:"1.3",fontFamily:"'Playfair Display', serif",textTransform:"uppercase",letterSpacing:"2px",margin:"0 auto",padding:"10px 20px",textShadow:"2px 4px 8px rgba(0, 0, 0, 0.7)"};function R(){const[e,a]=(0,o.useState)(0);return o.createElement("div",{className:v.Z.carouselContainer},o.createElement("div",{className:v.Z.carouselImage,style:{backgroundImage:`url(${G[e].image})`}},o.createElement("div",{className:v.Z.overlay}),o.createElement("div",{className:v.Z.carouselContent},o.createElement("h1",{className:"hero__title happy",style:L},G[e].title)),o.createElement("button",{onClick:()=>a((e=>(e-1+G.length)%G.length)),className:v.Z.arrowButton},"\u2190"),o.createElement("button",{onClick:()=>a((e=>(e+1)%G.length)),className:v.Z.arrowButton},"\u2192")))}function H(){const{siteConfig:e}=(0,n.Z)();return o.createElement(r.Z,{title:`Bem-vindo \xe0 ${e.title}`,description:"A Biblioteca PRO MAX \xe9 um centro de inova\xe7\xe3o, tecnologia e criatividade."},o.createElement(R,null),o.createElement("main",null,o.createElement(k,null),o.createElement("section",{className:v.Z.callToAction},o.createElement("div",{className:"container"},o.createElement("h2",{className:v.Z.callToActionTitle},"\ud83c\udf10 Junte-se \xe0 Revolu\xe7\xe3o do Conhecimento"),o.createElement("br",null),o.createElement("p",{className:v.Z.callToActionText},"Descubra um mundo de inova\xe7\xe3o e aprendizado. Torne-se membro e aproveite todas as vantagens que a Biblioteca PRO MAX tem a oferecer."),o.createElement("br",null),o.createElement(l.Z,{className:"button button--primary button--lg",to:"/membership"},"Consultar planos PRO MAX"),o.createElement("br",null))),o.createElement(y,null),o.createElement(_,null),o.createElement(D,null)))}},1207:(e,a,t)=>{t.d(a,{Z:()=>o});const o={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN",paginaInicial:"paginaInicial_sUtH",cardsContainer:"cardsContainer_CQtU",happy:"happy_d7f1",heroImage:"heroImage_xZN7",float:"float_x2Lw",heroSubtitle:"heroSubtitle_jFu1",button:"button_JGCe",heroButtons:"heroButtons_r52D",featuresSection:"featuresSection_Y0uK",featureCard:"featureCard_Jbd_",callToAction:"callToAction_n5Oe",callToActionTitle:"callToActionTitle_zyYS",callToActionText:"callToActionText_zmi2",socorro:"socorro_Gflk",imaggy:"imaggy_hIxc",bookshelf:"bookshelf_ZssO",shelf:"shelf_poP9",book:"book_QCHZ",modalOverlay:"modalOverlay_aSGA",modalContent:"modalContent_G0Ul",closeButton:"closeButton_muHm",carouselContainer:"carouselContainer_Flor",carouselImage:"carouselImage_LOM9",overlay:"overlay_CDjE",carouselContent:"carouselContent_zwyD",arrowButton:"arrowButton_YXB2",thin:"thin_yOhL",pdfViewer:"pdfViewer_Mxsx",hero__title:"hero__title_sobY"}}}]);