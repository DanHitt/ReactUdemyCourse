console.log('App.js is running!');

const appInfo = {
    title: 'Get that app!',
    subtitle: 'master react',
    options: []
};
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        appInfo.options.push(option);
        e.target.elements.option.value = '';
        renderJsx();
    }
};

const onRemoveAll = () => {
    appInfo.options = [];
    renderJsx();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * appInfo.options.length);
    const option = appInfo.options[randomNum];
    alert(option);
    renderJsx();
}

const onVisOption = () => {
    const x = ['show', 'hide'];
    
    renderJsx();
}

const appRoot = document.getElementById('app');
const renderJsx = () => {
    const template = (
        <div>
            <h1>{appInfo.title}</h1>
            {appInfo.subtitle && <p>{appInfo.subtitle}</p>} 
            <p>{appInfo.options.length > 0 ? "here are your options" : "no options"}</p>
            <button disabled={appInfo.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {appInfo.options.map((option) => <li key={option}>Option: {option}</li>)
            }
            </ol>
            
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>  
                <button>Add Option</button>
            </form>
            <p></p>
            <button onClick={onVisOption}>{switcher} code</button>
            <p>Now you see me...</p>
        </div>
    );

    ReactDOM.render(template,appRoot);
}

renderJsx();




// const multiplier = {
//     multiplyBy : 2,
//     numbers : [1, 2, 3],
//     multiply(){
//         return this.numbers.map((number) => this.multiplyBy * number);
//     }
// };

// console.log(multiplier.multiply());

