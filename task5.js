class UI
{
    words = [
        {word: 'basilashvili', description: 'Basilashvili lost in the first round of RG'},
        {word: 'messi', description: 'Messi has 40M EUR salary in a year'},
        {word: 'Elon Mask', description: 'Elon Mask lost $16B'},
    ];

    dfs(node) {
        const children = node.children  ;
        for (let i = 0;i<children.length;i++) {
          if(children[i].children.length > 0) {
            this.dfs(children[i]);
          }
          else{
             this.wrapIntoSpan(children[i]);
          }
        }
    }
    wrapIntoSpan(child) {
        this.words.forEach(word => {
            const string = child.innerHTML;
            const regex = string.match(new RegExp(word.word,"ig"));
            if(regex) {
                const set = new Set([...regex]);
                const className = word.word.split(" ")[0];
                set.forEach(item => {
                     child.innerHTML = child.innerHTML.replace(new RegExp(item,"g"),`<span class="${className}">${item}</span>`);
                });
            }
        })
    }
    divCreator(description) {
        const div = document.createElement('div');
        div.textContent = description;
        div.style.backgroundColor = 'yellow';
        div.style.color = 'red';
        div.style.position = 'absolute';
        div.style.display = 'none';
        div.style.padding = '5px 10px';
        document.body.append(div);
        return div;
    }
 
    render() {
        ui.dfs(document.body)
        this.words.forEach(word => {
            const str = word.word.split(" ");
            const spans = document.querySelectorAll(`span.${str}`);
            const div = this.divCreator(word.description);
            spans.forEach(span => {
                span.addEventListener('mouseover',(e) => {
                    div.style.display = 'block';
                    div.style.top = `${e.clientY}px`;
                    div.style.left = `${e.clientX}px`;
                });
                span.addEventListener('mouseout',(e) => {
                    div.style.display = 'none';
                })
            });
        });
    }
}

const ui = new UI();
ui.render();