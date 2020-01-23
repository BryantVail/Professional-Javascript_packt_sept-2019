document.getElementById("btnSubmit").addEventListener("click", () => {
  const allParagraphs = document.getElementsByClassName("paragraphs");
  let allContent = "";
  let count = 0;

  for (let i = 0; i < allParagraphs.length; i++) {
    const node = allParagraphs[i];
    count++;
    //construct string to present
    allContent += `${count} - ${node.textContent}\n`;
  }

  alert(`Found ${count} paragraphs. Their content: \n${allContent}`);
});
