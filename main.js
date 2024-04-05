
function createPageContent() {
    var section1 = document.createElement('section');
    section1.id = "class";

    var div1 = document.createElement('div');
    div1.className = "img1";

    var img1 = document.createElement('img');
    img1.style.width = "100%";
    img1.style.height = "200px";
    img1.src = "istockphoto-1324413691-612x612.jpg";
    img1.alt = "";

    div1.appendChild(img1);
    section1.appendChild(div1);

    var section2 = document.createElement('section');

    var div2 = document.createElement('div');
    div2.className = "container text-center";

    var div3 = document.createElement('div');
    div3.className = "row";

    var col1 = createColumn("imago1038360339h.jpg", "ROMANTIC RESTAURANT", "Phasellus lorem enim, luctus ut velit eget, con-vallis eg.", "#");
    var col2 = createColumn("_131849372_microsoftteams-image-6.png", "DELICIOUS FOOD", "Aliquam eget aliquam magna, quis posuere risus ac just", "#");
    var col3 = createColumn("SOCCER-SAUDI-ABH-ANA-REPORT-18_1712105734062_1712105812314.avif", "RED WINES YOU LOVE", "Sed ornare ligula eget tortor tempor, quis porta tellus dictum.", "#");

    div3.appendChild(col1);
    div3.appendChild(col2);
    div3.appendChild(col3);

    div2.appendChild(div3);
    section2.appendChild(div2);

    document.body.appendChild(section1);
    document.body.appendChild(section2);
}
function createColumn(imgSrc, title, text, link) {
    var div = document.createElement('div');
    div.className = "col-md-4";

    var img = document.createElement('img');
    img.style.width = "400px";
    img.style.height = "246px";
    img.src = imgSrc;
    img.alt = "";

    var h3 = document.createElement('h3');
    var a = document.createElement('a');
    a.href = link;
    a.textContent = title;
    h3.appendChild(a);

    var p = document.createElement('p');
    p.textContent = text;

    var aLearnMore = document.createElement('a');
    aLearnMore.href = link;
    aLearnMore.textContent = "LEARN MORE";

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(aLearnMore);

    return div;
}
createPageContent();
