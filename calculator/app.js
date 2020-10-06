class Calcualtor
{
    done = false;
    screen = document.getElementById('screen');
    dotClicked = false;
    button(num) {
        if(!this.done){
            if(num === 0 && this.screen.textContent === '0') return;
            else if(this.screen.textContent === '0') this.screen.textContent = num;
            else this.screen.textContent+=num;
        }
        else
        {
            this.screen.textContent = num;
            this.done = false;
            this.dotClicked = false;
        }
    }

    operation(operation){
        if(this.screen.textContent !== '') {
            this.done = false;
            const str = this.screen.textContent;
            if(str[str.length-1] == '+' || str[str.length-1] == '-' || str[str.length-1] == '*' || str[str.length-1] == '/' || str[str.length-1] == '%') {
                return;
            }
            else
           this.screen.textContent+=operation;
           this.dotClicked = false;
        }
    }
    sqrt(){
        if(this.screen.textContent !== '') {
        const num = eval(this.screen.textContent);
        this.screen.textContent = Math.sqrt(num);
        this.done = true;
        this.dotClicked = false;
        }
    }
    pow() {
        if(this.screen.textContent !== '') {
            const num = eval(this.screen.textContent);
        this.screen.textContent = Math.pow(num,2);
        this.done = true;
        this.dotClicked = false;    
        }
    }
    evaluate() {
        this.screen.textContent = eval(this.screen.textContent);
        this.done = true;
    }
    erase() {
        this.screen.textContent = '';
    }
    dot() {
        if(!this.dotClicked) {
            if(this.screen.textContent !== '')
            {
                this.screen.textContent+='.';
                this.dotClicked = true;
            }
            if (this.done) {
                this.screen.textContent = '0.';
                this.done = false;
            }
        }
    }
}

const calculator = new Calcualtor();