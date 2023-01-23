import './index.scss';
import {useState} from "react";

const questions = [
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
    },
    {
        title: 'Компонент - это ... ',
        variants: ['приложение',
            'часть приложения или страницы',
            'то, что я не знаю что такое'],
        correct: 1,
    },
    {
        title: 'Что такое JSX?',
        variants: [
            'это простой HTML',
            'это функция',
            'это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
    },
    {
        title: 'Что такое колбэк-функция ?',
        variants: [
            'это функция, переданная в другую функцию в качестве аргумента',
            'это библиотека',
            'это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 0,
    },
    {
        title: 'Стор-это ...  ?',
        variants: [
            'это функция, переданная в другую функцию в качестве аргумента',
            'это глобальный объект, в котором находится state, getState, dispatch',
            'это программа, которая находится на сервере (вместо браузера) и в нем работает JS. Chrome и NodeJS ',
        ],
        correct: 1,
    },
    {
        title: 'Что такое GIT  ?',
        variants: [
            'это способность функции получать доступ к данным ее внешнего лексического окружения ',
            'это текстовый документ по принципу ключ-значение: key: value',
            'система контроля версий ',
        ],
        correct: 2,
    },
    {
        title: 'TDD- это ...   ?',
        variants: [
            'это разработка при помощи тестирования ',
            'это текстовый документ по принципу ключ-значение: key: value',
            'это глобальный объект, в котором находится state, getState, dispatch',
        ],
        correct: 0,
    },
    {
        title: 'Что такое UseEffect  ?',
        variants: [
            'это разработка при помощи тестирования ',
            'хук, который следит за жизненным циклом функции',
            'это простой HTML',
        ],
        correct: 1,
    },
    {
        title: 'Что такое Redux  ?',
        variants: [
            'библиотека ',
            'фреймворк',
            'это стейт менеджер (хранитель стейта)',
        ],
        correct: 2,
    },
    {
        title: 'Что такое Куки  ?',
        variants: [
            'аборигены острова Гавайи',
            'это текстовый документ по принципу ключ-значение: key: value',
            'это стейт менеджер (хранитель стейта)',
        ],
        correct: 1,
    },
];

function Result({correct}) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"/>
            <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
            <a href='/'>
                <button>Попробовать снова</button>
            </a>

        </div>
    );
}

function Game({question, onClickVariant, step}) {
    const percentage = Math.round((step / questions.length) * 100)
    return (
        <>
            <div className="progress">
                <div style={{width: `${percentage}%`}} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((text, index) =>
                    <li onClick={() => {
                        onClickVariant(index)
                    }} key={text}>{text}</li>)}

            </ul>
        </>
    );
}

function App() {

    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)
    const question = questions[step]
    const onClickVariant = (index) => {
        console.log(step, index)
        setStep(step + 1)
        if(index===question.correct){
            setCorrect(correct+1)
        }
    }

    return (
        <div className="App">
            {step !== questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant}/> :
                <Result correct={correct}/>}

        </div>
    );
}

export default App;
