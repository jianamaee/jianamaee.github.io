function openFolder(folderName, sectionName) {
const folderContainer =
    document.getElementById(sectionName + "-folder-container");

const sectionHeading =
    document.querySelector(
        "#" + sectionName + " .heading"
        );

if (folderContainer) {
        folderContainer.style.display = "none";
    }

if (sectionHeading) {
        sectionHeading.style.display = "none";
    }

    const section =
    document.getElementById(sectionName);

    if (section) {
    const folders =
        section.querySelectorAll(".folder-content");
        folders.forEach(function(folder) {
            folder.classList.remove("active");
        });
    }

    const selectedFolder =
        document.getElementById(folderName);

    if (selectedFolder) {
        selectedFolder.classList.add("active");
    }

}

function closeFolder(folderName, sectionName) {
    const selectedFolder =
        document.getElementById(folderName);
    if (selectedFolder) {
        selectedFolder.classList.remove("active");
    }

    const folderContainer =
        document.getElementById(sectionName + "-folder-container");
    if (folderContainer) {
        folderContainer.style.display = "grid";
    }

    const sectionHeading =
        document.querySelector(
            "#" + sectionName + " .heading"
        );

    if (sectionHeading) {
        sectionHeading.style.display = "block";
    }
}
