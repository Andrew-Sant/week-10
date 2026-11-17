//runs on every page. it uses the components form the components.js
//now we ask what page are we on?
const page = document.body.dataset.page;
//now that we have our what page .. now we can add metadata
const pageMeta = {
    home: {
        title: "Home", 
        description: "This is a home description"
    },
    about: {
        title: "About", 
        description: "This is a about description"
    },
    contact: {
        title: "Contact", 
        description: "This is a contact description"
    },
};
// the CTA content
const ctaContent = {
    home: {
        heading: "sdjbskdjfb",
        text: "sdoicuhsdc",
        buttonText: "sducbs",
        link: "index.html",
    },
    about: {
        heading: "23992",
        text: "923721031",
        buttonText: "2384239843",
        link: "about.html",
    },
    contact: {
        heading: "ubkjwdc",
        text: "qsodnqcb",
        buttonText: "qiudhqowdb",
        link: "contact.html",
    }
}
const favourites = [
    {title: "Espresso", text: "blah"},
    {title: "Cold Brew", text: "blah blah"},
    {title: "Croissant", text: "blah blah blah"}
];

//
//now build the damn thing
//
//metadata goes in the <head>
const meta = pageMeta[page];
renderHead(createMetadata(meta.title, meta.description, meta.robots));
// now fill in our pages
render("#site-header", createHeader(page));
render("#site-footer", createFooter(siteName));
render("#cta", createCallToAction(ctaContent[page]));//not working refer to github
//turn every object in the array into a card
const cardHtml = favourites
.map((item) => createCard(item.title, item.text))
.join("");

render("#cards", cardsHtml);