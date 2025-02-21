"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Vangara Manish
      Date:   02/20/2025

      Filename: project05-03.js
*/

let sourceDoc = document.getElementById("source_doc");

let toc = document.getElementById("toc");

let headingCount = 1;
const heading = "H2";

// for loop to iterate through every child in the element.
for (let n = sourceDoc.firstElementChild; n != null; n = n.nextElementSibling){
      if (n.nodeName == heading){
            let anchor = document.createElement("a");
            anchor.id = "doclink" + headingCount;

            n.insertBefore(anchor, n.firstChild);

            let listItem = document.createElement("li");
            let link = document.createElement("a");

            listItem.appendChild(link);

            link.textContent = n.textContent;

            link.href = "#doclink" + headingCount;

            toc.appendChild(listItem);

            headingCount++;
      }
}

