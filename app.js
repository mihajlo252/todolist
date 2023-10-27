const addTask = document.querySelector("[data-new-task='newTask']");
const save = document.querySelector(".save");
const tasks = document.querySelector(".tasks");
const input = document.querySelector("[data-input='input']");
const card = document.querySelector(".card");
let i = 0;

addTask.addEventListener("click", () => {
    window.dispatchEvent(
        new KeyboardEvent("keydown", {
            key: "Enter",
        })
    );
});

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "Enter":
            if (i < 15 && input.value !== '') {
                let div = document.createElement("div");
                div.innerText = `${i + 1}. ${input.value} `;
                tasks.appendChild(div);
                i++;
                input.value = "";
                if (i === 15) {
                    card.removeChild(input);
                    card.removeChild(addTask);
                }
            }
            break;
    }
});

console.log("changed")
