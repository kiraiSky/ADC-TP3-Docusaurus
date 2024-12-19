"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[9071],{7159:(e,o,t)=>{t.r(o),t.d(o,{default:()=>m});var i=t(7294),a=t(9960),r=t(2263),s=t(7961),l=t(1207);const n=[{id:1,books:[{id:1,title:"A arte da Guerra",description:"Livro de Sun-Tzu. Consulte a Resenha aqui: ",pdf:"./books/a-arte-da-guerra.pdf",link:"/bookReview/aArteDaGuerra"},{id:2,title:"A metamorfose",description:"Descri\xe7\xe3o do Livro 2",pdf:"./books/a-metamorfose.pdf",link:"/bookReview/aArteDaGuerra"},{id:3,title:"Divina Com\xe9dia",description:"Descri\xe7\xe3o do Livro 3",pdf:"./books/divina-comedia.pdf",link:"/bookReview/aArteDaGuerra"},{id:4,title:"Dom Casmurro",description:"Descri\xe7\xe3o do Livro 4",pdf:"./books/dom-casmurro.pdf",link:"/bookReview/aArteDaGuerra"},{id:5,title:"Mem\xf3rias Postumas de Br\xe1s Cubas",description:"Descri\xe7\xe3o do Livro 5",pdf:"./books/memorias-postumas.pdf",link:"/bookReview/aArteDaGuerra"},{id:6,title:"Odisseia",description:"Descri\xe7\xe3o do Livro 6",pdf:"./books/odisseia.pdf",link:"/bookReview/aArteDaGuerra"}]},{id:2,books:[{id:7,title:"Revolu\xe7\xe3o dos bichos",description:"Descri\xe7\xe3o do Livro 1",pdf:"./books/revolucao-dos-bichos.pdf",link:"/bookReview/aArteDaGuerra"},{id:8,title:"Romeu e Julieta",description:"Descri\xe7\xe3o do Livro 2",pdf:"./books/romeu-e-julieta.pdf",link:"/bookReview/aArteDaGuerra"},{id:4,title:"Dom Casmurro",description:"Descri\xe7\xe3o do Livro 4",pdf:"./books/dom-casmurro.pdf",link:"/bookReview/aArteDaGuerra"},{id:5,title:"Mem\xf3rias Postumas de Br\xe1s Cubas",description:"Descri\xe7\xe3o do Livro 5",pdf:"./books/memorias-postumas.pdf",link:"/bookReview/aArteDaGuerra"},{id:6,title:"Odisseia",description:"Descri\xe7\xe3o do Livro 6",pdf:"./books/odisseia.pdf",link:"/bookReview/aArteDaGuerra"}]},{id:2,books:[{id:1,title:"A arte da Guerra",description:"Descri\xe7\xe3o do Livro 1",pdf:"./books/a-arte-da-guerra.pdf",link:"/bookReview/aArteDaGuerra"},{id:2,title:"A metamorfose",description:"Descri\xe7\xe3o do Livro 2",pdf:"./books/a-metamorfose.pdf",link:"/bookReview/aArteDaGuerra"},{id:3,title:"Divina Com\xe9dia",description:"Descri\xe7\xe3o do Livro 3",pdf:"./books/divina-comedia.pdf",link:"/bookReview/aArteDaGuerra"},{id:4,title:"Dom Casmurro",description:"Descri\xe7\xe3o do Livro 4",pdf:"./books/dom-casmurro.pdf",link:"/bookReview/aArteDaGuerra"},{id:5,title:"Mem\xf3rias Postumas de Br\xe1s Cubas",description:"Descri\xe7\xe3o do Livro 5",pdf:"./books/memorias-postumas.pdf",link:"/bookReview/aArteDaGuerra"},{id:6,title:"Odisseia",description:"Descri\xe7\xe3o do Livro 6",pdf:"./books/odisseia.pdf",link:"/bookReview/aArteDaGuerra"}]}],d=e=>{let{book:o,onClose:t}=e;return i.createElement("div",{className:l.Z.modalOverlay},i.createElement("div",{className:l.Z.modalContent},i.createElement("h2",null,o.title),i.createElement("p",null,o.description),i.createElement("iframe",{src:o.pdf,title:o.title,className:l.Z.pdfViewer}),i.createElement("button",{onClick:t,className:l.Z.closeButton},"Fechar")))};function c(){const[e,o]=(0,i.useState)(null);return i.createElement("div",{className:l.Z.bookshelf},n.map((e=>i.createElement("div",{key:e.id,className:l.Z.shelf},e.books.map((e=>i.createElement("div",{key:e.id,className:l.Z.book,onClick:()=>o(e),title:e.title},i.createElement("span",null,e.title))))))),e&&i.createElement(d,{book:e,onClose:()=>o(null)}))}function m(){const{siteConfig:e}=(0,r.Z)();return i.createElement(s.Z,{title:`Bem-vindo \xe0 ${e.title}`,description:"A Biblioteca PRO MAX \xe9 um centro de inova\xe7\xe3o, tecnologia e criatividade."},i.createElement("main",null,i.createElement("section",null,i.createElement("h2",{style:{textAlign:"center",margin:"20px 0"}},"\ud83d\udcda Estante de Livros Interativa"),i.createElement("div",{className:"container"},i.createElement("div",{className:l.Z.thin},i.createElement(c,null)))),i.createElement("section",{className:l.Z.callToAction},i.createElement("div",{className:"container"},i.createElement("h2",{className:l.Z.callToActionTitle},"\ud83c\udf10 Junte-se \xe0 Revolu\xe7\xe3o do Conhecimento"),i.createElement("p",{className:l.Z.callToActionText},"Descubra um mundo de inova\xe7\xe3o e aprendizado. Torne-se membro e aproveite todas as vantagens que a Biblioteca PRO MAX tem a oferecer."),i.createElement(a.Z,{className:"button button--primary button--lg",to:"/"},"Seja Membro PRO MAX")))))}},1207:(e,o,t)=>{t.d(o,{Z:()=>i});const i={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN",paginaInicial:"paginaInicial_sUtH",cardsContainer:"cardsContainer_CQtU",happy:"happy_d7f1",heroImage:"heroImage_xZN7",float:"float_x2Lw",heroTitle:"heroTitle_qg2I",heroSubtitle:"heroSubtitle_jFu1",button:"button_JGCe",heroButtons:"heroButtons_r52D",featuresSection:"featuresSection_Y0uK",featureCard:"featureCard_Jbd_",callToAction:"callToAction_n5Oe",callToActionTitle:"callToActionTitle_zyYS",callToActionText:"callToActionText_zmi2",socorro:"socorro_Gflk",imaggy:"imaggy_hIxc",bookshelf:"bookshelf_ZssO",shelf:"shelf_poP9",book:"book_QCHZ",modalOverlay:"modalOverlay_aSGA",modalContent:"modalContent_G0Ul",closeButton:"closeButton_muHm",carouselContainer:"carouselContainer_Flor",carouselImage:"carouselImage_LOM9",overlay:"overlay_CDjE",carouselContent:"carouselContent_zwyD",arrowButton:"arrowButton_YXB2",thin:"thin_yOhL",pdfViewer:"pdfViewer_Mxsx"}}}]);