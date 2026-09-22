function openFolder(folderName, sectionName) {

    const folderContainer =
        document.getElementById(
            sectionName + "-folder-container"
        );

    const sectionHeading =
        document.querySelector(
            "#" + sectionName + " .heading"
        );

    const section =
        document.getElementById(sectionName);


    if (folderContainer) {
        folderContainer.style.display = "none";
    }

    if (sectionHeading) {
        sectionHeading.style.display = "none";
    }

    if (section) {

        section.classList.add("folder-open");

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

        requestAnimationFrame(function() {

            const header =
                document.querySelector(".header");

            const headerHeight =
                header
                    ? header.offsetHeight
                    : 0;

            const folderPosition =
                selectedFolder.getBoundingClientRect().top +
                window.scrollY -
                headerHeight -
                20;


            window.scrollTo({

                top: Math.max(folderPosition, 0),

                behavior: "smooth"

            });

        });

    }

}


function closeFolder(folderName, sectionName) {

    const selectedFolder =
        document.getElementById(folderName);

    if (selectedFolder) {
        selectedFolder.classList.remove("active");
    }


    const folderContainer =
        document.getElementById(
            sectionName + "-folder-container"
        );

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

    const section =
        document.getElementById(sectionName);

    if (section) {
        section.classList.remove("folder-open");
    }

    if (section) {

        const header =
            document.querySelector(".header");

        const headerHeight =
            header
                ? header.offsetHeight
                : 0;

        const sectionPosition =
            section.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;


        window.scrollTo({

            top: Math.max(sectionPosition, 0),

            behavior: "smooth"

        });

    }

}
