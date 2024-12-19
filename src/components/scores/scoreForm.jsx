import { Button, Card, Radio, Statistic, Tooltip } from "antd";
import { scores } from "../../utils/constants/scoresConstants";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function ScoreForm({ scoreKey }) {

    const score = scores.find(score => score.key === scoreKey);

    const [selectedRadio, setSelectedRadio] = useState(score.options[0]);
    const [currentState, setCurrentState] = useState('start');
    const [result, setResult] = useState({
        result: 0, feedback: ''
    });
    const [selectedOptions, setSelectedOptions] = useState(new Array(score.questions.length).fill(null));

    const handleScoreSelection = (questionIndex, value) => {
        setSelectedOptions(prev => [
            ...prev.slice(0, questionIndex),
            value,
            ...prev.slice(questionIndex + 1, questionIndex.length),
        ]);
    };

    const handleFinishForm = () => {
        // Lógica para calcular a pontuação
        const finalResult = score.calculateFunction(selectedOptions);
        setResult(finalResult);
        setCurrentState('result');
    }

    const getEmoji = () => {
        // Lógica para mostrar emoji e cor
        switch (true) {
        case result.result < 50: {
            return <FontAwesomeIcon icon={faFaceFrown} className="ml-1 text-red-5" />
        }
        default: {
            return <FontAwesomeIcon icon={faFaceSmile} className="ml-1 text-green-7" />
        }
        }
    }

    const restartScore = () => {
        setSelectedOptions(new Array(score.questions.length).fill(null));
        setResult({ result: 0, feedback: '' });
        setCurrentState('start');
    }

    const renderStart = () => (
        <Card
            title={(
                <div className="py-4">
                    <div className="">
                        {score.label}
                    </div>
                    <div className="mt-2 text-sm font-normal text-[#000a]">
                        {score.description}
                    </div>
                </div>
            )}
        >
            <div>
                <span className="text-[#000a] mr-2">Público-Alvo:</span>
                <span>{score.targetAudience}</span>
            </div>
            <div>
                <span className="text-[#000a] mr-2">Tempo:</span>
                <span>{score.durationText}</span>
            </div>

            <div className="mt-4 font-semibold">
                {score.questions.length} itens em escala de {score.optionsType} <span className="text-[#0007] font-normal">Exemplo:</span>
            </div>
            <div className="mt-4">
                <Radio.Group onChange={e => setSelectedRadio(e.target.value)} value={selectedRadio}>
                    {score.options.map(option => (
                        <Radio
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </Radio>
                    ))}
                </Radio.Group>
            </div>
            <div className="mt-6">
                <Button type="primary" onClick={() => setCurrentState('form')}>
                    Aplicar Escore
                </Button>
            </div>
        </Card>
    );

    const renderForm = () => (
        <Card title={`Assinale cada pergunta com a ${score.optionsType} em que o evento ocorre`}>
            {score.questions.map((question, index) => (
                <>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">

                        <div className="flex items-center gap-4">
                            <div className="text-colorPrimary font-semibold">
                                {index + 1}
                            </div>

                            <div>
                                {question.text}
                            </div>
                        </div>

                        <div className="shrink-0 lg:ml-auto">
                            <Radio.Group
                                onChange={e => handleScoreSelection(index, e.target.value)}
                                value={selectedOptions[index]}
                            >
                                <div className="flex flex-col md:flex-row">
                                    {(question.options || score.options).map(option => (
                                        <Radio
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </Radio>
                                    ))}
                                </div>
                            </Radio.Group>
                        </div>
                    </div>
                    <div className="my-4 w-full h-[1px] bg-[#ededed]" />
                </>
            ))}
            <div className="mt-6 flex justify-end">
                <Button type="primary" onClick={handleFinishForm}>
                    Calcular Escore
                </Button>
            </div>
        </Card>
    );

    const renderResult = () => (
        <Card title={score.label}>
            <div className="flex flex-col md:flex-row gap-6">
                <Card>
                    <Statistic title="Resultado" suffix={getEmoji()} value={result.result} />
                </Card>
                <div>
                    <div className="font-medium">{score.hintText}</div>
                    <div className="mt-4">
                        <span className="text-[#000a] mr-2">
                            Recomendação:
                        </span>
                        <span>
                            {result.feedback}
                        </span>
                    </div>
                    <div className="mt-4 flex gap-4">
                        <Button type="primary" onClick={restartScore}>
                            Refazer Escore
                        </Button>
                        <Tooltip title="Baixar Resultado">
                            <Button icon={<FontAwesomeIcon icon={faDownload} />} />
                        </Tooltip>
                    </div>
                </div>
            </div>
        </Card>
    )

    const states = {
        start: renderStart,
        form: renderForm,
        result: renderResult,
    };

    return (
        <div className="w-full h-auto p-6 md:p-8">
            {states[currentState]()}
        </div>
    )
}