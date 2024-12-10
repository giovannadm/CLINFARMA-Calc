import { Input } from "antd";
import { scores } from "../../utils/constants/scoresConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ScoresList({ onSelect }) {

    const [searchText, setSearchText] = useState('');
    
    const handleSearch = val => {
        setSearchText(val);    
    }

    const filteredScores = scores.filter(score => score.label.includes(searchText));
    
    return (
        <div className="w-full h-full flex flex-col gap-6 p-6 md:p-8">
            <div className="w-full">
                <div className="font-semibold mb-3 text-base text-colorPrimary">Pesquisar Escore</div>
                <Input
                    type="text"
                    placeholder="Pesquisar"
                    size="large"
                    onChange={e => handleSearch(e.target.value)}
                />
            </div>
            {!filteredScores.length && (
                <div className="text-center text-[#0007]">
                    Nenhum Escore Encontrado
                </div>
            )}

            {filteredScores.map((score, index) => (
                <button
                    key={index}
                    className="w-full flex border border-[#dedede] bg-white rounded-lg font-medium px-6 py-4 hover:bg-gray-100 hover:border-colorPrimary"
                    style={{ transition: 'background-color .3s ease, border-color .3s ease' }}
                    onClick={() => onSelect(score.key)}
                >
                    <div className="text-start">
                        {score.label}
                    </div>
                    <div className="ml-auto text-colorPrimary">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </button>
            ))}
        </div>
    )
}