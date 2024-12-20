"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[9071],{7159:(e,o,a)=>{a.r(o),a.d(o,{default:()=>m});var i=a(7294),t=a(9960),r=a(2263),s=a(7961),l=a(1207);const n=[{id:1,books:[{id:1,title:"A Arte da Guerra",description:"Estrat\xe9gias militares e filos\xf3ficas de Sun-Tzu, aplic\xe1veis em diversos aspectos da vida.",pdf:"./books/a-arte-da-guerra.pdf",link:"/bookReview/aArteDaGuerra"},{id:2,title:"A Metamorfose",description:"Obra de Franz Kafka que explora temas de isolamento e transforma\xe7\xe3o.",pdf:"./books/a-metamorfose.pdf",link:"/bookReview/aMetamorfose"},{id:3,title:"Divina Com\xe9dia",description:"Poema \xe9pico de Dante Alighieri que narra uma jornada pelo Inferno, Purgat\xf3rio e Para\xedso.",pdf:"./books/divina-comedia.pdf",link:"/bookReview/divinaComedia"},{id:4,title:"Dom Casmurro",description:"Cl\xe1ssico de Machado de Assis que discute ci\xfames e percep\xe7\xe3o na narrativa de Bentinho.",pdf:"./books/dom-casmurro.pdf",link:"/bookReview/domCasmurro"},{id:5,title:"Mem\xf3rias P\xf3stumas de Br\xe1s Cubas",description:"Narrativa inovadora de Machado de Assis, contada por um defunto autor.",pdf:"./books/memorias-postumas.pdf",link:"/bookReview/memoriasPostumas"},{id:6,title:"Odisseia",description:"A \xe9pica jornada de Odisseu, escrita por Homero, repleta de aventuras e desafios.",pdf:"./books/odisseia.pdf",link:"/bookReview/odisseia"}]},{id:2,books:[{id:7,title:"Revolu\xe7\xe3o dos Bichos",description:"S\xe1tira pol\xedtica de George Orwell sobre a corrup\xe7\xe3o do poder.",pdf:"./books/revolucao-dos-bichos.pdf",link:"/bookReview/revolucaoDosBichos"},{id:8,title:"Romeu e Julieta",description:"A tr\xe1gica hist\xf3ria de amor de William Shakespeare.",pdf:"./books/romeu-e-julieta.pdf",link:"/bookReview/romeuEJulieta"},{id:9,title:"1984",description:"Distopia de George Orwell que explora vigil\xe2ncia e autoritarismo.",pdf:"./books/NO.pdf",link:"/bookReview/1984"},{id:10,title:"O Pequeno Pr\xedncipe",description:"Cl\xe1ssico de Antoine de Saint-Exup\xe9ry sobre amizade, amor e humanidade.",pdf:"./books/NO.pdf",link:"/bookReview/oPequenoPrincipe"},{id:11,title:"Moby Dick",description:"A busca obsessiva do Capit\xe3o Ahab pela baleia branca, escrita por Herman Melville.",pdf:"./books/NO.pdf",link:"/bookReview/mobyDick"}]},{id:3,books:[{id:12,title:"O Senhor dos An\xe9is: A Sociedade do Anel",description:"Primeiro volume da trilogia \xe9pica de J.R.R. Tolkien.",pdf:"./books/NO.pdf",link:"/bookReview/aSociedadeDoAnel"},{id:13,title:"Crime e Castigo",description:"Explora\xe7\xe3o psicol\xf3gica de Dostoi\xe9vski sobre culpa e reden\xe7\xe3o.",pdf:"./books/NO.pdf",link:"/bookReview/crimeECastigo"},{id:14,title:"O Alquimista",description:"Inspiradora jornada de autodescoberta escrita por Paulo Coelho.",pdf:"./books/NO.pdf",link:"/bookReview/oAlquimista"},{id:15,title:"Jane Eyre",description:"Hist\xf3ria de amor e resist\xeancia da protagonista hom\xf4nima, escrita por Charlotte Bront\xeb.",pdf:"./books/NO.pdf",link:"/bookReview/janeEyre"},{id:16,title:"Orgulho e Preconceito",description:"Cl\xe1ssico de Jane Austen que explora rela\xe7\xf5es sociais e amorosas na Inglaterra do s\xe9culo XIX.",pdf:"./books/NO.pdf",link:"/bookReview/orgulhoEPreconceito"}]}],d=e=>{let{book:o,onClose:a}=e;return i.createElement("div",{className:l.Z.modalOverlay},i.createElement("div",{className:l.Z.modalContent},i.createElement("h2",null,o.title),i.createElement("p",null,o.description),i.createElement("iframe",{src:o.pdf,title:o.title,className:l.Z.pdfViewer}),i.createElement("button",{onClick:a,className:l.Z.closeButton},"Fechar")))};function c(){const[e,o]=(0,i.useState)(null);return i.createElement("div",{className:l.Z.bookshelf},n.map((e=>i.createElement("div",{key:e.id,className:l.Z.shelf},e.books.map((e=>i.createElement("div",{key:e.id,className:l.Z.book,onClick:()=>o(e),title:e.title},i.createElement("span",null,e.title))))))),e&&i.createElement(d,{book:e,onClose:()=>o(null)}))}function m(){const{siteConfig:e}=(0,r.Z)();return i.createElement(s.Z,{title:`Bem-vindo \xe0 ${e.title}`,description:"A Biblioteca PRO MAX \xe9 um centro de inova\xe7\xe3o, tecnologia e criatividade."},i.createElement("main",null,i.createElement("section",null,i.createElement("h2",{style:{textAlign:"center",margin:"20px 0"}},"\ud83d\udcda Estante de Livros Interativa"),i.createElement("div",{className:"container"},i.createElement("div",{className:l.Z.thin},i.createElement(c,null)))),i.createElement("section",{className:l.Z.callToAction},i.createElement("div",{className:"container"},i.createElement("h2",{className:l.Z.callToActionTitle},"\ud83c\udf10 Junte-se \xe0 Revolu\xe7\xe3o do Conhecimento"),i.createElement("p",{className:l.Z.callToActionText},"Descubra um mundo de inova\xe7\xe3o e aprendizado. Torne-se membro e aproveite todas as vantagens que a Biblioteca PRO MAX tem a oferecer."),i.createElement(t.Z,{className:"button button--primary button--lg",to:"/"},"Seja Membro PRO MAX")))))}},1207:(e,o,a)=>{a.d(o,{Z:()=>i});const i={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN",paginaInicial:"paginaInicial_sUtH",cardsContainer:"cardsContainer_CQtU",happy:"happy_d7f1",heroImage:"heroImage_xZN7",float:"float_x2Lw",heroTitle:"heroTitle_qg2I",heroSubtitle:"heroSubtitle_jFu1",button:"button_JGCe",heroButtons:"heroButtons_r52D",featuresSection:"featuresSection_Y0uK",featureCard:"featureCard_Jbd_",callToAction:"callToAction_n5Oe",callToActionTitle:"callToActionTitle_zyYS",callToActionText:"callToActionText_zmi2",socorro:"socorro_Gflk",imaggy:"imaggy_hIxc",bookshelf:"bookshelf_ZssO",shelf:"shelf_poP9",book:"book_QCHZ",modalOverlay:"modalOverlay_aSGA",modalContent:"modalContent_G0Ul",closeButton:"closeButton_muHm",carouselContainer:"carouselContainer_Flor",carouselImage:"carouselImage_LOM9",overlay:"overlay_CDjE",carouselContent:"carouselContent_zwyD",arrowButton:"arrowButton_YXB2",thin:"thin_yOhL",pdfViewer:"pdfViewer_Mxsx"}}}]);