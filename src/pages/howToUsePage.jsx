import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "antd";

export default function HowToUsePage() {
    return (
        <div
            className="w-full flex flex-col md:flex-row md:h-[calc(100vh-80px-96px)]"
        >
            <div
                className="h-full w-full md:max-w-96 flex flex-col justify-center text-white py-12 px-6 md:px-8 text-center"
                style={{
                    background: 'linear-gradient(125deg, var(--color-primary) 50%, var(--color-primary-light) 50%)'
                }}
            >
                <FontAwesomeIcon icon={faCircleQuestion} className="text-8xl" />
                <div className="mt-8 text-3xl font-semibold">Como Utilizar o Sistema</div>
                <div className="mt-6 text-lg">
                    Encontre guias sobre navegar pelas funcionalidades do nosso sistema de forma eficiente.
                </div>
            </div>

            <div className="w-full h-full flex flex-col gap-12 p-6 !pt-16 md:p-8">
                <FontAwesomeIcon icon={faScrewdriverWrench} className="text-8xl text-colorPrimary" />
                <Card
                    bordered
                    className="text-center text-xl font-semibold"
                >
                    Em construção
                </Card>
            </div>
        </div>
    );
}